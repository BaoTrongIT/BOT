module.exports.config = {
	name: "setemoji",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "๐๐๐ณ๐ข๐ ๐๐๐๐ฆ",
	description: "ฤแปi emoji trong nhรณm",
	commandCategory: "QTV - Tools",
	usages: "setemoji [emoji]",
	cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
	const emoji = args.join(" ")
	api.changeThreadEmoji(`${args.join(" ")}`, event.threadID, event.messagaID);
}