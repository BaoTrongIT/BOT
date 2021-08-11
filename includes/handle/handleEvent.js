module.exports = function({ api, global, client, models, Users, Threads, Currencies }) {
	const logger = require("../../utils/log.js");
	return function({ event }) {
		const timeStart = Date.now();
		const { senderID, threadID } = event;
	
		if (client.userBanned.has(parseInt(senderID)) || client.threadBanned.has(parseInt(threadID)) || global.config.allowInbox == false && senderID == threadID) return;
		for (const [key, value] of client.events.entries()) {
			if (value.config.eventType.indexOf(event.logMessageType) !== -1) {
				const eventRun = client.events.get(key);
				try {
					eventRun.run({ api, event, global, client, models, Users, Threads, Currencies });
					if (global.config.DeveloperMode == false) {
						const moment = require("moment");
						const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
						logger(`Event Module Được Kích Hoạt : ${eventRun.config.name} | Group: ${threadID} |`, "[ Lazic ]");
					}
				}
				catch (error) {
					logger(JSON.stringify(error) + " Lỗi Tại module Event " + eventRun.config.name , "error");
				}
			}
		}
		return;
	};
};