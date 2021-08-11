module.exports = function({ api, global, client, models, Users, Threads, Currencies, utils }) {
	const stringSimilarity = require('string-similarity');
	const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	const logger = require("../../utils/log.js");
	return async function({ event }) {
		const dateNow = Date.now();
		var { body: contentMessage, senderID, threadID } = event;
		const { allowInbox, PREFIX, ADMINBOT, DeveloperMode } = global.config;

		senderID = parseInt(senderID);
		threadID = parseInt(threadID);

		if (client.userBanned.has(senderID) || client.threadBanned.has(threadID) || allowInbox == false && senderID == threadID) return;
		const threadSetting = client.threadSetting.get(parseInt(threadID)) || {};
		const prefixRegex = new RegExp(`^(<@!?${senderID}>|${escapeRegex((threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : PREFIX )})\\s*`);
		if (!prefixRegex.test(contentMessage)) return;

		//////////////////////////////////////////
		//=========Get command user use=========//
		//////////////////////////////////////////

		const [matchedPrefix] = contentMessage.match(prefixRegex);
		const args = contentMessage.slice(matchedPrefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();
		const commandBanned = client.commandBanned.get(senderID) || [];
		if (commandBanned.includes(commandName)) return;
		var command = client.commands.get(commandName);
		if (!command) {
			var allCommandName = [];
			const commandValues = client.commands.values();
			for (const cmd of commandValues) allCommandName.push(cmd.config.name);
			const checker = stringSimilarity.findBestMatch(commandName, allCommandName);
			if (checker.bestMatch.rating >= 0.5) command = client.commands.get(checker.bestMatch.target);
			else return api.sendMessage(`[𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦] => Hãy /help Để Xem Danh Sách Lệnh !`, threadID);
		}

		////////////////////////////////////////
		//========= Check threadInfo =========//
		////////////////////////////////////////
		
		var threadInfo = (client.threadInfo.get(threadID) || await Threads.getInfo(threadID));
		if(Object.keys(threadInfo).length == 0) {
			try {
				threadInfo = await api.getThreadInfo(event.threadID);
				await Threads.setData(threadID, { name: threadInfo.name, threadInfo });
				client.threadInfo.set(threadID, threadInfo);
			}
			catch {
				logger("Không thể lấy thông tin của nhóm!", "[𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦]",threadID,messageID);
			}
		}

		////////////////////////////////////////
		//========= Check permssion =========//
		///////////////////////////////////////

		var permssion = 0;
		const find = threadInfo.adminIDs.find(el => el.id == senderID);
		
		if (ADMINBOT.includes(senderID.toString())) permssion = 2;
		else if (!ADMINBOT.includes(senderID) && find) permssion = 1;

		if (command.config.hasPermssion > permssion) return api.sendMessage(`[𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦] => Hiện tại bạn không đủ quyền để sử dụng lệnh : "${command.config.name}" !`, event.threadID, event.messageID, api.sendMessage("[𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦] => Bạn Cần Là QTV Hoặc Admin Bot !", event.threadID, event.messageID));

		//////////////////////////////////////
		//========= Check cooldown =========//
		//////////////////////////////////////

		if (!client.cooldowns.has(command.config.name)) client.cooldowns.set(command.config.name, new Map());
		const timestamps = client.cooldowns.get(command.config.name);
		const cooldownAmount = (command.config.cooldowns || 1) * 1000;
		if (timestamps.has(senderID)) {
			const expirationTime = timestamps.get(senderID) + cooldownAmount;
			if (dateNow < expirationTime) return api.setMessageReaction('😼', event.messageID, (err) => (err) ? logger('Đã có lỗi xảy ra khi thực thi setMessageReaction', 2) : '', true, api.sendMessage("[𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦] => U Là Trời Sống Chậm Thôi 🌚 !",event.threadID,event.messageID));
		}	
		///////////////////////////////////
		//========= Run command =========//
		///////////////////////////////////

		try {
			command.run({ api, global, client, event, args, models, Users, Threads, Currencies, utils, permssion });
			timestamps.set(senderID, dateNow);
			
			if (DeveloperMode == false) {
				const moment = require("moment-timezone");
				const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
				let threadInfo = (await api.getThreadInfo(event.threadID));
				var name = threadInfo.name;
				let data = await api.getUserInfo(event.senderID);			
				let nameuser = data[event.senderID].name;
				logger(`Tên : [ ${nameuser} ] | Nhóm : [ ${name} ] | Tên Lệnh : [ ${commandName} ] |  Argument : [ ${args.join(" ")} ]`, "[Lazic Team]");
			}
			return;
		}
		catch (error) {
			logger(error + " tại lệnh: " + command.config.name, "error");
			return api.sendMessage("Đã có lỗi xảy ra khi thực khi lệnh đó. Lỗi: " + error, threadID);
		}
	};
};