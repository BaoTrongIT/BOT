module.exports.config = {
	name: "sendnoti",
	version: "1.0.0",
	hasPermssion: 2,
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

module.exports.run = async ({ api, event, args, client }) => {
	var allThread = client.allThread || [];
	var count = 1,
		cantSend = [];
	for (const idThread of allThread) {
		if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
		else {
			api.sendMessage("[ = ] => [ 𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦 ] <= [ = ]\n\n" + args.join(" ") , idThread, (error, info) => {
				if (error) cantSend.push(idThread);
			});
			count++;
			await new Promise(resolve => setTimeout(resolve, 500));
		}
	}
	return api.sendMessage(`Đã gửi tin nhắn đến ${count} nhóm!`, event.threadID, () => api.sendMessage(`[!] Không thể gửi thông báo tới ${cantSend.length} nhóm`, event.threadID, event.messageID), event.messageID);
}