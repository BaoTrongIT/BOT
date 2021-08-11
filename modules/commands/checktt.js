module.exports.config = {
	name: "check",
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
    var mention = Object.keys(event.mentions);
    const data = await api.getThreadInfo(event.threadID);
    if (args[0] == "all") {
        var number = 0, msg = "", storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp});
        }
        exp.sort(function (a, b) { return b.exp - a.exp });

        for (const lastData of exp) {
            number++;
            msg += `[ ❖ ] • ${number} • [ ${lastData.name} ] với [ ${lastData.exp} ] tin nhắn \n`;
        }
        return api.sendMessage(msg, event.threadID);
    }
    else if (mention[0]) {
        var storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});

        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
        }
        exp.sort(function (a, b) { return b.exp - a.exp });

        console.log(JSON.stringify(exp, null, 4))
        const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(mention[0])) + 1;
        const infoUser = exp[rank - 1];
        return api.sendMessage(`[ ❖ ] • [ ${infoUser.name} ] đứng hạng ${rank} với ${infoUser.exp} tin nhắn`, event.threadID);
    }
    else {
        var storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
        }
        exp.sort(function (a, b) { return b.exp - a.exp });

        const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(event.senderID)) + 1;
        const infoUser = exp[rank - 1];
        return api.sendMessage(`[ ❖ ] • [ ${infoUser.name} ] đứng hạng ${rank} với ${infoUser.exp} tin nhắn`, event.threadID);
    }
}
