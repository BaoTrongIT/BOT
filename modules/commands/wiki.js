module.exports.config = {
	name: "wiki",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Tìm mọi thông tin cần biêt thông qua Wikipedia",
	commandCategory: "Khác",
	usages: "wiki args input",
	cooldowns: 1,
	dependencies: ['wikijs'],
    info: [
		{
			key: "args => Để trống",
			prompt: "Tìm kiếm thông qua tiếng việt",
            type: "string",
            example: ""
		},
		{
			key: "args => en",
			prompt: "Tìm kiếm thông qua tiếng anh",
            type: "string",
            example: "en"
		}
	],
};

module.exports.run = ({ event, args, api }) => {
    const wiki = require("wikijs").default;
    let content = args.join(" ");
    let url = 'https://vi.wikipedia.org/w/api.php';
    if (args[0] == "en") {
        url = 'https://en.wikipedia.org/w/api.php';
        content = args.slice(1, args.length);
    }
    if (!content) return api.sendMessage("Nội dung cần tìm kiếm không được để trống!", event.threadID, event.messageID);
    return wiki({ apiUrl: url }).page(content).catch(() => api.sendMessage("Không tìm thấy nội dung bạn cần tìm!", event.threadID, event.messageID)).then(page => (typeof page != 'undefined') ? Promise.resolve(page.summary()).then(val => api.sendMessage(val, event.threadID, event.messageID)) : '');

}