module.exports.config = {
	name: "ping",
	version: "1.0.4",
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "tag toàn bộ thành viên",
	commandCategory: "system",
	usages: "[Text]",
	cooldowns: 80
};

module.exports.run = async  ({ api, event, args, Users }) => {
	try {
		const botID = api.getCurrentUserID();
		const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
		const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name || (await Users.getData(senderID)).name;
		var body = (args.length != 0) ? args.join(" ") : (`Ê mấy đứa QTV [ {name} ]`.replace(/\{name}/g, nameUser)
		+` gọi kìa !`), mentions = [], index = 0;
		for(const idUser of listUserID) {
			body = "‎" + body;
			mentions.push({ id: idUser, tag: "‎", fromIndex: index - 1 });
			index -= 1;
		}

		return api.sendMessage({ body, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
}