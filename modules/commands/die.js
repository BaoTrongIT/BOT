module.exports.config = {
	name: "die",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "๐๐๐ณ๐ข๐ ๐๐๐๐ฆ",
	description: "( อกยฐ อส อกยฐ)",
	commandCategory: "random-text",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Bot Ngแปงm r :v`, event.threadID, event.messageID);