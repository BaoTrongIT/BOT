module.exports.config = {
	name: "resend",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Gửi lại những message/video/voice/photos đã được gỡ",
	commandCategory: "Box - Chat", 
	usages: "resend",
	cooldowns: 0,
      dependencies: ["axios", "tinyurl"]

};

module.exports.event = async function ({ event, api, client }) {
    const axios = require("axios");
    const fs = require("fs");
    const request = require("request");
  let {messageID, senderID, threadID, body } = event;
  let settings = client.threadSetting.get(event.threadID) || {};
     if (!settings["resend"]) return;
     if (!client.message) client.message = new Array();	
     if(event.type != "message_unsend") client.message.push({
        msgID:messageID,
        msgBody:body,
        attachment:event.attachments
      })
    if(event.type == "message_unsend") {
      if(!client.message.some(item => item.msgID == messageID)) return;
      var getMsg = client.message.find(item => item.msgID == messageID);
     let name = (await api.getUserInfo(event.senderID))[senderID].name;
      if(getMsg.msgBody != "") return api.sendMessage(`[ Thành Viên ] : [ ${name} ] đã gỡ 1 tin nhắn\n[ Nội dung ] : [ ${getMsg.msgBody} ]   `,threadID)
      else {
            let num = 0
            let msg =`[ Thành Viên ] [ ${name} ] vừa gỡ [ ${getMsg.attachment.length} ] tệp đính kèm:\n`
            var abc = [];
          for (var i = 0; i < getMsg.attachment.length; i++) {
        var shortLink = await require("tinyurl").shorten(getMsg.attachment[i].url);
        var getURL = request.get(getMsg.attachment[i].url);
        var getngu = getURL.uri.pathname;
      var ext = getngu.substring(getngu.lastIndexOf(".") + 1);
        num +=1;
       var path = __dirname + `/cache/${i}.${ext}`;
        var getimg = (await axios.get(`${shortLink}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getimg, "utf-8"));
  }
abc.push(fs.createReadStream(path));

        api.sendMessage({body: msg ,attachment: abc}, threadID);
        api.sendMessage(ext, event.threadID);
        }
     
      }
}

module.exports.run = async ({ event, api, args, Threads, client, utils }) => {
    if (args.length == 0) return api.sendMessage("Input không được để trống", event.threadID, event.messageID);
    let settings = (await Threads.getData(event.threadID)).settings;
    switch (args[0]) {
        case "on": {
            settings["resend"] = true;
            await Threads.setData(event.threadID, options = { settings });
            client.threadSetting.set(event.threadID, settings);
            api.sendMessage("Đã bật resend thành công!", event.threadID);
            break;
        }
        case "off": {
            settings["resend"] = false;
            await Threads.setData(event.threadID, options = { settings });
            client.threadSetting.set(event.threadID, settings);
            api.sendMessage("Đã tắt resend thành công!", event.threadID);
            break;
        }
    
        default: {
          api.sendMessage("Bấm /resend on / off để gửi lại tin nhắn thành viên đã xóa !", event.threadID, event.messageID);
            break;
        }
    }
}