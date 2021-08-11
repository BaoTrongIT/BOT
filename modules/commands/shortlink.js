module.exports.config = {
	name: "shortlink",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Rút gọn url của bạn",
	commandCategory: "Khác",
	usages: "shortlink [link]",
	cooldowns: 5,
	dependencies: ["bitly"],
	info: [
		{
			key: "link",
			prompt: "Url bạn cần rút gọn",
			type: 'link',
			example: 'https://github.com'
		}
	],
	envConfig: {
		"bitlyAPI": ""
	}
};

module.exports.run = async ({ api, event, args, global }) => {
	const BitlyClient = require("bitly").BitlyClient;
	const bitly = new BitlyClient(global.shortlink.BITLY);
	var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
	if (!regex.test(args[0])) return api.sendMessage("Phải là một url cần rút gọn!", event.threadID);
	if (args[0].indexOf("http" || "https") === -1) args[0] = "https://" + args[0];
	const res = await bitly.shorten(args[0]);
	return api.sendMessage("Link đã rút gọn: " + res.id, event.threadID, event.messageID);
}