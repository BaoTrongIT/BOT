module.exports.config = {
	name: "reminder",
	version: "0.0.1-beta",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Nhắc nhở bạn về việc gì đấy trong khoảng thời gian cố định",
	commandCategory: "Box - Time",
	usages: "reminder [Time] [Text] ",
	cooldowns: 5,
	info: [
		{
			key: 'Time',
			prompt: 'Là thời gian bạn đặt để nhắc lại sau khoảng nào đó, theo đơn vị giây(s)',
			type: 'Number',
			example: '300'
		},
		{
			key: 'Text',
			prompt: 'Là phần nội dung nhắn lại sau khoảng thời gian',
			type: 'Văn bản',
			example: 'Đi ngủ'
		}
	]
};

module.exports.run = async function({ api, event, args, Users }) {
	const time = args[0];
	const text = args.join(" ").replace(time, "");
	if (isNaN(time)) return api.sendMessage(`thời gian bạn nhập không phải là một con số!`, event.threadID, event.messageID);
	const display = time > 59 ? `${time / 60} phút` : `${time} giây `;
	api.sendMessage(`Tau sẽ đốt nhà mài sau....  : \n ${display} [ Admin tủi l =))👎😼]`, event.threadID, event.messageID);
	await new Promise(resolve => setTimeout(resolve, time * 1000));
	var value = await api.getThreadInfo(event.threadID);
	if (!(value.nicknames)[event.userID]) value = (await Users.getInfo(event.senderID)).name;
	else value = (value.nicknames)[event.senderID];
	return api.sendMessage({
	body: `${(text) ? value + ", m để lại câu l gì nè 👎😼:" + text : value + ", ê l , bạn gì đó ey bạn kêu mình nhắc l j kìa ?:) 👎😼"}`,
		mentions: [{
			tag: value,
			id: event.senderID
		}]
	}, event.threadID, event.messageID);
}