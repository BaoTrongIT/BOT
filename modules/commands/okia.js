module.exports.config = {
	name: "okia",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "thay đổi số tiền của bản thân hoặc người được tag",
	commandCategory: "Admin",
	usages: "setmoney [Tag]",
	cooldowns: 5,
	info: [
		{
			key: 'Tag',
			prompt: 'Để trống hoặc tag một người nào đó, có thể tag nhiều người',
			type: 'Văn Bản',
			example: '@Mirai-chan'
		}
	]
};

module.exports.run = ({ event, api }) => api.sendMessage(`Ơ kìa ...... Đồ ko có NY 😏👎🤣`, event.threadID, event.messageID);
