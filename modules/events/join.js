module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.0",
	credits: "SpermLord",
	description: "Listen events",
	dependencies: ["request", "fs-extra"]
};

module.exports.run = async function({ api, event, global, client }) {
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ || • ${global.config.PREFIX} • || ] • ${(!global.config.BOTNAME) ? "Bot Made By LAZICTEAM" : global.config.BOTNAME}`, event.threadID, api.getCurrentUserID());
		return api.changeNickname(`𝑨𝑫𝑴𝑰𝑵 𝑲𝑨𝑵𝒁𝑼`,event.threadID,"100042817150429",() => api.sendMessage("LZNVD - AKN",event.threadID))
	}
	else {
		const { createReadStream, existsSync, mkdirSync } = require("fs-extra");
		let threadInfo = await api.getThreadInfo(event.threadID),
			threadName = threadInfo.threadName,
			settings = client.threadSetting.get(event.threadID) || {},
			dirGif = __dirname + `/cache/joinGif/`,
			msg, formPush;
		var mentions = [], nameArray = [], memLength = [];
		for (var i = 0; i < event.logMessageData.addedParticipants.length; i++) {
			let id = event.logMessageData.addedParticipants[i].userFbId;
			let userName = event.logMessageData.addedParticipants[i].fullName;
			nameArray.push(userName);
			mentions.push({ tag: userName, id });
			memLength.push(threadInfo.participantIDs.length - i);
		}
		memLength.sort((a, b) => a - b);
		
		(typeof settings.customJoin == "undefined") ? msg = "[ = [ • ] {threadName} [ • ] = ]\n[ ❖ ] Welcome bạn {name} !\n[ ❖ ] Đã đến với [ • ] - [ {threadName} ] - [ • ]\n[ ❖ ] Chúc thật bạn vui vẻ và tương tác thật nhiều !\n[ ❖ ] {type} là thành viên thứ {soThanhVien} của nhóm <3" : msg = settings.customJoin;
		msg = msg
		.replace(/\{name}/g, nameArray.join(', '))
		.replace(/\{type}/g, (memLength.length > 1) ?  'Các bạn' : 'Bạn')
		.replace(/\{soThanhVien}/g, memLength.join(', '))
		.replace(/\{threadName}/g, threadName);
		if (existsSync(dirGif)) mkdirSync(dirGif, { recursive: true });
		if (existsSync(dirGif + `gifchung.gif`)) formPush = { body: msg, attachment: createReadStream(dirGif + `gifchung.gif`), mentions }
		else formPush = { body: msg, mentions }
		return api.sendMessage(formPush, event.threadID);
	} 
}