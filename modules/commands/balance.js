module.exports.config = {
	name: "money",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Kiểm tra số tiền của bản thân hoặc người được tag",
	commandCategory: "Người Dùng",
	usages: "balance [Tag]",
	cooldowns: 5,
	info: [
		{
			key: 'Tag',
			prompt: 'Để trống hoặc tag một người nào đó, có thể tag nhiều người',
			type: 'Văn Bản',
			example: '@Mirai-chan'
		}
	]
};

module.exports.run = async function({ api, event, args, Currencies, utils }) {
	if (!args[0]) {
		const money = (await Currencies.getData(event.senderID)).money;
		return api.sendMessage(`Số tiền bạn hiện đang có: ${money} đô`, event.threadID);
	}
	else if (Object.keys(event.mentions).length == 1) {
		var mention = Object.keys(event.mentions)[0];
		const money = (await Currencies.getData(mention)).money;
		return api.sendMessage({
			body: `Số tiền của ${event.mentions[mention].replace("@", "")} hiện đang có là: ${money} đô.`,
			mentions: [{
				tag: event.mentions[mention].replace("@", ""),
				id: mention
			}]
		}, event.threadID, event.messageID);
	}
	else if (Object.keys(event.mentions).length > 0) {
		let mention = Object.keys(event.mentions);
		let msg = "";
		for (let value of mention) {
			let data = (await Currencies.getData(value)) || {};
			if (!data) data.money = 0;
			msg += (` - ${event.mentions[value].replace("@", "")}: ${data.money} đô\n`);
		};
		return api.sendMessage(`Số tiền của thành viên: \n${msg}`, event.threadID, event.messageID);
	}
	else return api.sendMessage("lỗi r !", event.threadID, event.messageID);
}