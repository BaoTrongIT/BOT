module.exports.config = {
	name: "search",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Tìm kiếm kết quả trên google!",
	commandCategory: "Link - Search",
	usages: "search [Text]",
	cooldowns: 5,
	dependencies: ["request", "fs"],
	info: [
		{
			key: "Text",
			prompt: "Là đoạn văn bản cần tìm kiếm hoặc phản hồi một ảnh!",
			type: 'Text',
			example: 'catalizcs'
		}
	]
};

module.exports.run = function({ api, event, args }) {
	let textNeedSearch = "";
	const regex = /(https?:\/\/.*?\.(?:png|jpe?g|gif)(?:\?(?:[\w_-]+=[\w_-]+)(?:&[\w_-]+=[\w_-]+)*)?(.*))($)/;
	(event.type == "message_reply") ? textNeedSearch = event.messageReply.attachments[0].url : textNeedSearch = args.join(" ");
	(regex.test(textNeedSearch)) ? api.sendMessage(`https://www.google.com/searchbyimage?&image_url=${textNeedSearch}`, event.threadID, event.messageID) : api.sendMessage(`https://www.google.com.vn/search?q=${encodeURIComponent(textNeedSearch)}`, event.threadID, event.messageID);
}