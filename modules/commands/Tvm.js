module.exports.config = {
	name: "Tvm",
	version: "0.0.1-beta",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Các tag của box: info, id, emoji, name",
	commandCategory: "Box - Chat",
	usages: "boxin4",
	cooldowns: 5,
	
};
module.exports.run = async ({ event, api, args, client, Currencies, Users, utils, __GLOBAL, reminder }) => {
const request = require('request')
const fs = require('fs')
 if (args[0]=="..."){
 let data = await api.getUserInfo(event.senderID);			
		let nameuser = data[event.senderID].name;
		let threadInfo = (await api.getThreadInfo(event.threadID));
var name = threadInfo.name;
let isFriend = data[event.senderID].isFriend == false ? "Chưa kết bạn với BOT" : data[event.senderID].isFriend == true ? "Đã kết bạn với BOT" : "???";
				let vanity = data[event.senderID].vanity;
				let token = data[event.senderID].searchTokens;
				let url = data[event.senderID].profileUrl;
  var callback = () => api.sendMessage({body:`[ • ] [ Tên ] : [ ${name} ] \n [ • ] [ UID ] : [ ${event.senderID} ] \n [ • ] [ Giới tính ] : [ ${gender} ] \n [ • ] [ Tình trạng ] : [ ${isFriend} ] \n [ • ] [ Url ] : [ ${vanity} ] \n [ • ] [ Link FB ] : [ ${url} ]`,attachment: fs.createReadStream(__dirname + "/cache/2.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.png"));
  	return request(encodeURI(`https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=411070130254123|ce534c241cfa9ac89b59776c17f63127`)).pipe(fs.createWriteStream(__dirname+'/cache/2.png')).on('close',() => callback());

		}
		else if (Object.keys(event.mentions).length == 1) {
			var mention = Object.keys(event.mentions)[0];
			let threadInfo = (await api.getThreadInfo(event.threadID));
var name = threadInfo.name;
	 let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
	let sex = data1[mention].gender;
var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Ái";
					let vanity = data1[mention].vanity;
					let token = data1[mention].searchTokens;
					let url = data1[mention].url;
	  var callback = () => api.sendMessage({body:`[ = ] - [ ${name} ] [ = ]\n[ = [ ⚜️ ] = ] Chào Mừng : ${nameuser}\n[ = [ ⚜️ ] = ] Giới Tính : ${gender}\n[ = [ ⚜️ ] = ] Link Facebook : Facebook.com/${mention}\n[ = [ ⚜️ ] = ] Khi Vào Nhóm , Lưu ý :\n[ = [ ⚜️ ] = ] Giới Thiệu , Show ảnh , Set Biệt danh\n[ = [ ⚜️ ] = ] Chúc bạn 1 ngày tốt lành ! `,attachment: fs.createReadStream(__dirname + "/cache/2.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.png"));
	  	return request(encodeURI(`https://graph.facebook.com/${mention}/picture?width=512&height=512&access_token=525483098783031|d93387ddd21cbe15f23046e50b8b65fb`)).pipe(fs.createWriteStream(__dirname+'/cache/2.png')).on('close',() => callback());
	  								
		}
		else api.sendMessage("Ghi sai /info me ", event.threadID);
	}