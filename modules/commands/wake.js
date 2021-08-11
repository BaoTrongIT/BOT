module.exports.config = {
	name: "wake",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Tính thời gian đi ngủ hoàn hảo cho bạn",
	commandCategory: "Box - Healthy",
	usages: "wake [Time]",
	cooldowns: 5,
	dependencies: ["moment-timezone"],
	info: [
		{
			key: 'Time',
			prompt: 'Thời gian bạn ngủ',
			type: 'Giờ',
			example: '07:00'
		}
	]
};

module.exports.run = function({ api, event, args, global }) {
	let { threadID, messageID } = event;
	const moment = require("moment-timezone");
	var wakeTime = [];
	let content = args.join(" ")
	if (!content) {
		for (var i = 1; i < 7; i++) wakeTime.push(moment().utcOffset("+07:00").add(90 * i + 15, 'm').format("HH:mm"));
		return api.sendMessage("Nếu bạn đi ngủ bây giờ, những thời gian hoàn hảo nhất để thức dậy là:\n" + wakeTime.join(', '), threadID, messageID);
	}
	else {
		if (content.indexOf(":") == -1) return api.sendMessage(`Không đúng format, hãy xem trong ${global.config.PREFIX}help sleep`, threadID, messageID);
		var contentHour = content.split(":")[0];
		var contentMinute = content.split(":")[1];
		if (isNaN(contentHour) || isNaN(contentMinute) || contentHour > 23 || contentMinute > 59 || contentHour < 0 || contentMinute < 0 || contentHour.length != 2 || contentMinute.length != 2) return api.sendMessage(`Không đúng format, hãy xem trong ${global.config.PREFIX}help`, threadID, messageID);
		var getTime = moment().utcOffset("+07:00").format();
		var time = getTime.slice(getTime.indexOf("T") + 1, getTime.indexOf("+"));
		var hour = time.split(":")[0];
		var minute = time.split(":")[1];
		var sleepTime = getTime.replace(hour + ":", contentHour + ":").replace(minute + ":", contentMinute + ":");
		for (var i = 1; i < 7; i++) wakeTime.push(moment(sleepTime).utcOffset("+07:00").add(90 * i + 15, 'm').format("HH:mm"));
		return api.sendMessage("Nếu bạn đi ngủ vào lúc " + content + ", những thời gian hoàn hảo nhất để thức dậy là:\n" + wakeTime.join(', '), threadID, messageID);
	}
}   