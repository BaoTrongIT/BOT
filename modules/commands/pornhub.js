module.exports.config = {
	name: "phub",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Comment trên pỏn𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦hub ( ͡° ͜ʖ ͡°)",
	commandCategory: "NFSW",
	usages: "phub [text]",
	cooldowns: 10,
	dependencies: ["canvas", "axios"]
};


module.exports.run = ({ event, api }) => api.sendMessage(`Eeee mấy đứa ai bấm command gì lạ quá nè :"D`, event.threadID, event.messageID);