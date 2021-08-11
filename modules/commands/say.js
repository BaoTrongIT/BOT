
module.exports.config = {
	name: "say",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Khiến bot trả về file âm thanh của chị google thông qua văn bản",
	commandCategory: "media",
	usages: "say [Lang] [Text]",
	cooldowns: 5,
	info: [
		{
			key: "Lang",
			prompt: "Ngôn ngữ bạn muốn bot trả kết quả về, mặc định để trống là Tiếng Việt, có 4 ngôn ngữ 'ru, en, ja, vi'",
			type: 'Text',
			example: 'en'
		},
		{
			key: "Text",
			prompt: "Văn bản bạn cần bot trả kết quả về thanh giọng nói, lưu ý độ dài dưới 100 từ!",
			type: 'Text',
			example: 'Mirai-Chan xin chào cả nhà'
		}
	]
};

module.exports.run = function({ api, event, args }) {
	const request = require("request");
	const fs = require("fs-extra");
	var content = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
	var languageToSay = (["en"].some(item => content.indexOf(item) == 0)) ? content.slice(0, content.indexOf(" ")) : 'vi';
	var msg = (languageToSay != 'vi') ? content.slice(3, content.length) : content;
	return request(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(msg)}&tl=${languageToSay}&client=tw-ob`).pipe(fs.createWriteStream(__dirname+'/cache/say.mp3')).on('close',() => api.sendMessage({body: `[𝗟𝗮𝘇𝗶𝗰𝗧𝗲𝗮𝗺] => ${args.join(" ")}`, attachment: fs.createReadStream(__dirname + "/cache/say.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/say.mp3")));
}