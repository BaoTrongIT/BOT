module.exports.config = {
	name: "suggest",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "Kanzu",
	description: "*",
	commandCategory: "Box - Chat",
	usages: "howtouse option input",
	cooldowns: 5,
	info: [
		{
			key: 'option => add',
			prompt: 'Thêm công việc/đóng góp',
			type: 'string',
			example: 'make bot better'
		},
		{
			key: 'option => list',
			prompt: 'Xem toàn bộ danh sách công việc/đóng góp',
			type: 'string'
		},
		{
			key: 'option => delete',
			prompt: 'Xóa công việc/đóng góp chỉ định dựa vào số dòng, chỉ admin có thể sử dụng',
			type: 'number',
			example: "1"
		}
	]
};

module.exports.onLoad = function () {
	const fs = require("fs-extra");

	if (!fs.existsSync(__dirname + "/cache/howtouse.json")) {
		const howtouse = [];
		fs.writeFileSync(__dirname + "/cache/howtouse.json", JSON.stringify(howtouse));
	}
}

module.exports.run = function({ api, event, args, permssion, utils }) {
	const fs = require("fs-extra");
	const content = args.slice(1, args.length);
	const dirFile = __dirname + "/cache/howtouse.json";

	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);

	switch (args[0]) {
		case "add": {
			const howtouse = `[ ${event.senderID} ] ${content.join(" ")}`
			getData.push(howtouse);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			return api.sendMessage(`Bạn đã thêm howtouse mới thành công`, event.threadID, event.messageID);
		}
		case "list":
		case "all": {
			if (getData.length == 0) return api.sendMessage(`Hiện tại chưa có howtouse nào để hiển thị!`, event.threadID, event.messageID);
			var workList = "";
			getData.map(item => workList += `\n- ${item}`);
			return api.sendMessage(`Sau đây là toàn bộ howtouse: ${workList}`, event.threadID, event.messageID);
		}

		case "delete":
		case "del": {
			if (permssion !== 2) return api.sendMessage("Bạn không đủ quyền hạn để có thể sử dụng delete!", event.threadID, event.messageID);
			if (getData.length == 0) return api.sendMessage(`Hiện tại chưa có suggest nào để có thể xóa!`, event.threadID, event.messageID);
			if (content.length == 0) return api.sendMessage(`Bạn cần phải chỉ định mục cần xóa`, event.threadID, event.messageID);
			if (isNaN(content)) return api.sendMessage(`Bạn cần phải chỉ định mục cần xóa`, event.threadID, event.messageID);
			getData.splice((parseInt(content) - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			return api.sendMessage(`Đã xóa thành công mục có id là: ${content}`, event.threadID, event.messageID);
		}
		default:
			utils.throwError("suggest", event.threadID, event.messageID);
		break;
	}
}