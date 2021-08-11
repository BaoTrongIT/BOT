module.exports.config = {
	name: "yeubot",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Gửi tin nhắn tới các nhóm!",
	commandCategory: "Admin",
	usages: "sendnoti [Text]",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "Đoạn văn bản bạn muốn gửi tới mọi người",
			type: 'Văn bản',
			example: 'Hello Em'
		}
	]
};
module.exports.run = ({ event, api }) => api.sendMessage(`Yêu Vs chả Đương >:v lo học đi >:v`, event.threadID, event.messageID);