module.exports.config = {
	name: "thanhvien",
	version: "0.0.1-beta",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Số nam nữ trong nhóm",
	commandCategory: "Box - Chat",
	usages: "tv",
	cooldowns: 5,
	
};
module.exports.run = async ({ event, api }) => {	
const request = require('request')
const fs = require('fs')
try {
  	let threadInfo = (await api.getThreadInfo(event.threadID));
var name = threadInfo.name;
var boy = [];
    var nu = [];
    var gay = [];
    for (let i in threadInfo.userInfo) {
        var gei = threadInfo.userInfo[i].gender;
        if(gei == "MALE"){boy.push(i)}
        else if(gei == "FEMALE"){nu.push(i)}
       	else if(gei == "GAY"){gay.push(i)}
    }
  var callback = () => api.sendMessage({body:`[ = [ ⚜️ ${name} ⚜️ ] = ]\n[ = ] - [ Nam ] : [ ${boy.length} ]\n[ = ] - [ Nữ ] : [ ${nu.length} ]\n[ = ] - [ Gay ] : ${gay.length}`,attachment: fs.createReadStream(__dirname + "/cache/2.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.png"));
  	return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/2.png')).on('close',() => callback());
	}
catch (err) {
	api.sendMessage("Box Thiếu Ảnh box hoặc tên box",event.threadID, event.messageID);
	}
}