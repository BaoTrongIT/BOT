module.exports.config = {
	name: "uid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Lấy ID người dùng.",
	commandCategory: "QTV - Tools",
	usages: "uid",
	cooldowns: 5,
	info: [
		{
			key: "tag",
			prompt: "Để trống hoặc tag người cần lấy ID người dùng",
			type: 'Tag',
			example: 'uid @SpermLord'
		}
	]
};

module.exports.run = function({ api, event }) {
	if (Object.keys(event.mentions) == 0) return api.sendMessage(`${event.senderID}`, event.threadID, event.messageID);
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
		return;
	}
}