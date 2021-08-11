module.exports.config = {
	name: "hentai",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "lợi",
	description: "Random lấy ảnh hentai! (Safe For Work)",
	commandCategory: "NFSW",
	usages: "anime tag",
	cooldowns: 300,
	dependencies: ['request', 'fs-extra']
};

module.exports.run = ({ event, api }) => api.sendMessage(`Eeee mấy đứa ai bấm command gì lạ quá nè :"D`, event.threadID, event.messageID);