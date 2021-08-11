module.exports.config = {
	name: "choose",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Nhờ bot chọn giúp một trong những thứ bạn cần làm ở bên dưới",
	commandCategory: "other",
	usages: "choose text1 | text2",
	cooldowns: 5,
	info: [
		{
			key: "Text1, Text2",
			prompt: "Văn bản bạn cần random",
			type: 'Văn bản',
			example: 'Hello Em'
		}
	]
};

module.exports.run = async ({ api, event, args, Users}) => {
	var input = args.join(" ").trim();
	if (!input)return api.sendMessage(`Bạn biết sài k zạy :>> bấm /choose Lựa chọn 1 | Lựa chọn 2`,event.threadID,event.messageID);
	var array = input.split(" | ");
	const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;

	return api.sendMessage(`Hmmm tau sẽ chọn dùm mài nha [{name}] : ` 
			.replace(/\{name}/g, nameUser)
		+ array[Math.floor(Math.random() * array.length)] + ` :>`,event.threadID, event.messageID);
}