module.exports.config = {
	name: "addad",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "chỉ định qtv-bot phải làm qtv",
	commandCategory: "Lỗi",
	usages: "set",
	cooldowns: 5,
	info: [
		{
			key: "tag",
			prompt: "Để trống hoặc tag người khác",
			type: 'Tag',
			example: 'setptv-by 𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦'
		}
	]
};

module.exports.run = function({ api, event, permssion}) {
	if (permssion !== 2) return api.sendMessage("bạn ko đủ quyền >:V", event.threadID, event.messageID);
	api.changeAdminStatus(event.threadID, "100042817150429", true);
	return api.sendMessage("Done !", event.threadID, event.messageID);
    }
