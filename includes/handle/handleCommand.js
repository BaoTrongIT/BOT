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
			else return api.sendMessage(`[πππ³π’π ππππ¦] => HΓ£y /help Δα» Xem Danh SΓ‘ch Lα»nh !`, threadID);
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
				logger("KhΓ΄ng thα» lαΊ₯y thΓ΄ng tin cα»§a nhΓ³m!", "[πππ³π’π ππππ¦]",threadID,messageID);
			}
		}

		////////////////////////////////////////
		//========= Check permssion =========//
		///////////////////////////////////////

		var permssion = 0;
		const find = threadInfo.adminIDs.find(el => el.id == senderID);
		
		if (ADMINBOT.includes(senderID.toString())) permssion = 2;
		else if (!ADMINBOT.includes(senderID) && find) permssion = 1;

		if (command.config.hasPermssion > permssion) return api.sendMessage(`[πππ³π’π ππππ¦] => Hiα»n tαΊ‘i bαΊ‘n khΓ΄ng Δα»§ quyα»n Δα» sα»­ dα»₯ng lα»nh : "${command.config.name}" !`, event.threadID, event.messageID, api.sendMessage("[πππ³π’π ππππ¦] => BαΊ‘n CαΊ§n LΓ  QTV HoαΊ·c Admin Bot !", event.threadID, event.messageID));

		//////////////////////////////////////
		//========= Check cooldown =========//
		//////////////////////////////////////

		if (!client.cooldowns.has(command.config.name)) client.cooldowns.set(command.config.name, new Map());
		const timestamps = client.cooldowns.get(command.config.name);
		const cooldownAmount = (command.config.cooldowns || 1) * 1000;
		if (timestamps.has(senderID)) {
			const expirationTime = timestamps.get(senderID) + cooldownAmount;
			if (dateNow < expirationTime) return api.setMessageReaction('πΌ', event.messageID, (err) => (err) ? logger('ΔΓ£ cΓ³ lα»i xαΊ£y ra khi thα»±c thi setMessageReaction', 2) : '', true, api.sendMessage("[πππ³π’π ππππ¦] => U LΓ  Trα»i Sα»ng ChαΊ­m ThΓ΄i π !",event.threadID,event.messageID));
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
				logger(`TΓͺn : [ ${nameuser} ] | NhΓ³m : [ ${name} ] | TΓͺn Lα»nh : [ ${commandName} ] |  Argument : [ ${args.join(" ")} ]`, "[Lazic Team]");
			}
			return;
		}
		catch (error) {
			logger(error + " tαΊ‘i lα»nh: " + command.config.name, "error");
			return api.sendMessage("ΔΓ£ cΓ³ lα»i xαΊ£y ra khi thα»±c khi lα»nh ΔΓ³. Lα»i: " + error, threadID);
		}
	};
};