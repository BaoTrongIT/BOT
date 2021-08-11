module.exports.config = {
	name: "out",
	version: "1.0.2",
	credits: "LazicTeam",
	hasPermssion: 2,
	description: "Quản lý tin nhắn chờ của bot",
	commandCategory: "Admin",
	usages: "pending",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	 api.sendMessage("", event.threadID);
	try {
		return api.sendMessage("Đã nhận lệnh rời nhóm từ admin !!!", event.threadID,() => api.removeUserFromGroup(`100067465209673`, event.threadID));
	}
	catch (e) {
		api.sendMessage("Lỗi RỒI !",event.threadID)
	}
} 