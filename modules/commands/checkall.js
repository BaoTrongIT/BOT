module.exports.config = {
	name: "checkall",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Lấy Thông Tin Tương Tác",
	commandCategory: "system",
	usages: "checktt args",
	cooldowns: 5,
	info: [
		{
			key: 'args => all',
			prompt: 'Kiểm tra lượt tương tác của toàn bộ thành viên',
			type: 'String',
			example: ''
		},
        {
            key: "args => Tag một người nào đó!",
            prompt: "Kiểm tra lượt tương tác người bạn tag",
            type: "Mention",
            example: "@Nguyễn Thái Hảo"
        },
        {
            key: "args => để trống",
            prompt: "Kiểm tra lượt tương tác của bản thân",
            type: "AIR",
            example: ""
        }
	],
    envConfig: {
        "maxColumn": 10
    }
};

module.exports.run = async function ({ args, api, event, Currencies }) {
    const data = await api.getThreadInfo(event.threadID);
    try {
        var number = 0, msg = "", storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp});
        }
        exp.sort(function (a, b) { return b.exp - a.exp });

        for (const lastData of exp) {
            number++;
            msg += `[ ❖ ] • ${number} • [ ${lastData.name} ] • [ ${lastData.exp} ] Tin Nhắn \n`;
        }
        return api.sendMessage(msg, event.threadID);
    }
    catch (e) {
        return api.sendMessage("Lỗi Rồi nè bấm /check all sài đỡ i",event.messageID,event.threadID)
    }
}