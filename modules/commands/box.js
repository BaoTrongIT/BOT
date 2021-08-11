module.exports.config = {
	name: "boxinfo",
	version: "0.0.1-beta",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Các tag của box: info, id, emoji, name",
	commandCategory: "Box - Chat",
	usages: "boxin4",
	cooldowns: 5,
	
};
module.exports.run = async  ({ event, api }) => {	
	const request = require('request')
	const fs = require('fs') 
     try {
  	let threadInfo = (await api.getThreadInfo(event.threadID));
  	let sex = threadInfo.approvalMode;
  var pd = sex == false ? "Đang tắt" : sex == true ? "Đang bật" : "Không phải Thread";
var name = threadInfo.name;
let countMess = threadInfo.messageCount;
let num = threadInfo.adminIDs.length;
var boy = [];
    var nu = [];
	var gay = [];
    for (let i in threadInfo.userInfo) {
        var gei = threadInfo.userInfo[i].gender;
			var emoji = threadInfo.emoji || "👍";
        if(gei == "MALE"){boy.push(i)}
		else if(gei == "UNIKNOWN"){gay.push(i)}
        else if(gei == "FEMALE"){nu.push(i)}
    }
   	 var callback = () => api.sendMessage({body:`[ ❖ ] - [ Tên box ] : [ ${name} ]\n[ ❖ ] - [ ThreadID ] : [ ${event.threadID} ]\n[ ❖ ] - [ Emoji ] : [ ${emoji} ]\n[ ❖ ] - [ Số tin nhắn ] : [ ${countMess} ]\n[ ❖ ] - [ Admin ] : [ ${num} ]`
  	+ `\n[ ❖ ] - [ Thành Viên ] : [ ${threadInfo.participantIDs.length} ]\n[ ❖ ] - [ Nam ] : [ ${boy.length} ]\n[ ❖ ] - [ Nữ ] : [ ${nu.length} ]\n[ ❖ ] - [ Không Xác Định ] : [ ${gay.length} ]\n[ ❖ ] - [ Phê duyệt nhóm ] : [ ${pd} ]`,attachment: fs.createReadStream(__dirname + "/cache/2.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.png"));
  	return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/2.png')).on('close',() => callback());
	 }
  catch (e) {
	 return api.sendMessage("Lỗi nè , Box cần có tên hoặc ảnh bìa box",event.threadID,event.messagaID);
	}
}

