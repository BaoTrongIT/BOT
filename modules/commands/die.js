module.exports.config = {
	name: "die",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "( ͡° ͜ʖ ͡°)",
	commandCategory: "random-text",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Bot Ngủm r :v`, event.threadID, event.messageID);