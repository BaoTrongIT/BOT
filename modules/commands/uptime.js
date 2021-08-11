module.exports.config = {
	name: "uptime",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "Admin",
	usages: "uptime",
	cooldowns: 5
};

module.exports.run = async ({ api, event, client }) => {
	const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);

	const timeStart = Date.now();
	return api.sendMessage("", event.threadID, () => api.sendMessage(`Bot đã hoạt động được ${hours} giờ ${minutes} phút ${seconds} giây.\n\nTổng người dùng: ${client.allUser.length}\nTổng Nhóm: ${client.allThread.length}\nPing: ${Date.now() - timeStart}ms`, event.threadID, event.messageID));
}