module.exports.config = {
	name: "setadmin",
	version: "1.0.0",
	hasPermssion: 0,
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

module.exports.run = function({ api, event, args }) {
	api.sendMessage("Nhớ Tag Người Muốn Thêm Làm QTV Nhé !", event.threadID, event.messageID);
	if (Object.keys(event.mentions) == 0) return api.changeAdminStatus(event.threadID, args.join(" "), true);
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.changeAdminStatus(event.threadID ,`${Object.keys(event.mentions)[i]}`, true)
	return 
	}
}