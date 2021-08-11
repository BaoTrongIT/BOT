module.exports.config = {
	name: "setTitle",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Đổi emoji trong nhóm",
	commandCategory: "QTV - Tools",
	usages: "setemoji [emoji]",
	cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
	const emoji = args.join(" ")
	return api.setTitle(`${args.join(" ")}`, event.threadID, event.messagaID);
}