module.exports.config = {
	name: "data",
	version: "0.0.1-beta",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "tìm kiếm thông tin qua id của box hoặc người dùng",
	commandCategory: "Admin",
	usages: "data",
	cooldowns: 5,
	
};
const request = require('request')
const fs = require('fs')
module.exports.run = async ({ event, api, args, client, Currencies, Users, utils, __GLOBAL, reminder }) => {	
var input=args[0]
  if (input==""){api.sendMessage("Bạn chưa nhập thẻ,hãy sử dụng các thẻ sau:")}
  else if (input=="box"){
  	var box = args[0];
  	var id = args[1];
  	let threadInfo = await api.getThreadInfo(id)
  	let sex = threadInfo.approvalMode;
  var pd = sex == false ? "Đang tắt" : sex == true ? "Đang bật" : "Không phải Thread";
var name = threadInfo.name;
			let countMess = threadInfo.messageCount;
			var emoji = threadInfo.emoji;
let num = threadInfo.adminIDs.length;
var boy = [];
    var nu = [];
    for (let i in threadInfo.userInfo) {
        var gei = threadInfo.userInfo[i].gender;
        if(gei == "MALE"){boy.push(i)}
        else if(gei == "FEMALE"){nu.push(i)}
    }
  var callback = () => api.sendMessage({body:`Tên box: ${name} \nTID: ${id}\nEmoji: ${emoji}\nSố tin nhắn: ${countMess}\nAdmin: ${num}\n Số thành viên: ${threadInfo.participantIDs.length}\nNam: ${boy.length}\nNữ: ${nu.length}\nPhê duyệt nhóm: ${pd}`,attachment: fs.createReadStream(__dirname + "/cache/2.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.png"));
  	return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/2.png')).on('close',() => callback());
	}
else if (input=="user"){
	var user = args[0];
	var idd = args[1];
	let data = await api.getUserInfo(idd);
		let name = data[idd].name;
let sex = data[idd].gender;
var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Ái";
let isFriend = data[idd].isFriend == false ? "Chưa kết bạn với BOT" : data[idd].isFriend == true ? "Đã kết bạn với BOT" : "???";
				let vanity = data[idd].vanity;
				let token = data[idd].searchTokens;
				let url = data[idd].profileUrl;
  var callback = () => api.sendMessage({body:`Tên: ${name} \nUID: ${idd}\nGiới tính: ${gender}\nTình trạng: ${isFriend}\nUrl: ${vanity}\nLink FB: ${url}`,attachment: fs.createReadStream(__dirname + "/cache/2.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.png"));
  	return request(encodeURI(`https://graph.facebook.com/${idd}/picture?width=512&height=512&access_token=170918394587449|sONjQBBNs316xVD31T-yuL4jfyc`)).pipe(fs.createWriteStream(__dirname+'/cache/2.png')).on('close',() => callback());

	}
}