module.exports.config = {
	name: "thongbao",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Lấy thông tin lỗi của bot.",
	commandCategory: "Admin",
	usages: "callad",
	cooldowns: 5,
};
module.exports.handleReply = async function({ api, args, event, handleReply }) {
  let {body} = event;
return api.sendMessage(body, handleReply.id, handleReply.messID);
}
const request = require('request')
const fs = require('fs')
const axios = require("axios")	


module.exports.run = async ({ event, api , args, client, global }) => {
var idbox = event.threadID;
	var content = args.join(' ');
	        const listAdmin = global.config.ADMINBOT;
			if (!content) return api.sendMessage('Có vẻ như bạn chưa nhập thông tin, vui lòng nhập thông tin lỗi bạn gặp phải!', event.threadID, event.messageID);
			var threadName = (await api.getThreadInfo(event.threadID)).name;		
 let data = await api.getUserInfo(event.senderID);			
		let name = data[event.senderID].name;
				let vanity = data[event.senderID].vanity || " Không có ";
				let link = event.senderID;
				var bodyy = `[ ⚜️ ] Báo cáo Trúng Thưởng Từ : [ ${name} ]\n[ ⚜️ ] ID : [ ${event.senderID} ]\n[ ⚜️ ] Tên Group Trúng Thưởng : [ ${threadName} ]\n[ ⚜️ ] ThreadID : ${event.threadID}\n[ ⚜️ ] Tên Người Dùng : [ ${vanity} / ${link} ]\n[ ⚜️ ] Địa Chỉ Facebook : https://facebook.com/${link} \n[ ⚜️ ] Nội dung : ${content}`
    api.sendMessage("Thông Báo Về Việc Trúng Vé Số hay Trúng Thưởng Của Bạn Đã Được Gửi Đến ADMIN",event.threadID);
      for(var idad of listAdmin){
   api.sendMessage({body: bodyy}, idad, (error, info) => client.handleReply.push({
      name: this.config.name,
      messageID: info.messageID,
      author: event.senderID,
      messID: event.messageID,
      id: idbox}
                   ));
  	
		}   
	}
