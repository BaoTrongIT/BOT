module.exports.config = {
	name: "setname",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Đổi biệt danh trong nhóm của bạn hoặc của người bạn tag",
	commandCategory: "Chat - BD",
	usages: "setname [name]",
	cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
	const name = args.join(" ")
	const mention = Object.keys(event.mentions)[0];
	if (!mention) return api.changeNickname(`${name}`, event.threadID, event.senderID);
	if (mention[0]) return api.changeNickname(`${name.replace(event.mentions[mention], "")}`, event.threadID, mention);
	return apiSendMessage("Đã Đổi Biệt Danh Thành Công !",event.threadID, event.messageID);
}


