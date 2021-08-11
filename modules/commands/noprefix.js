module.exports.config = {
	name: "noprefix",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	commandCategory: "Admin",
	usages: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
    cooldowns: 0, 
};
module.exports.event = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
/*let threadBan = client.threadBanned;
    for(let abc of threadBan){
    	   if (event.threadID == item.abc) {   
    api.removeUserFromGroup(100016862404996, abc);
  }
}*/

if(event.logMessageType == "log:subscribe" ) {
if((client.threadBanned).includes(event.threadID)) {
    api.removeUserFromGroup(100021585459638, client.threadBanned);
}
}
if (event.body == "Lazic Team"){
		return api.sendMessage("AD KanzuWakazaki - [𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦]", event.threadID, event.messageID);
		}
		if (event.body == "Hi"){
		return api.sendMessage("Chào Cậu ^^", event.threadID, event.messageID);
		}
		if (event.body == "Yêu ad"){
		return api.sendMessage("Ad hong tin yêu gì mà yêu >:v", event.threadID, event.messageID);
		}
		if (event.body == "/Administrator"){
		return api.sendMessage("Hi admin Kanzu 💁‍♂️", event.threadID, event.messageID);
		}
		if (event.body == "Hi mn."){
		return api.sendMessage("Chào cậu nha ^^", event.threadID, event.messageID);
		}
		if (event.body == "2 mn"){
		return api.sendMessage("2 , 3 , 4 , 5 , 6 ,...", event.threadID, event.messageID);
		}
		if (event.body == ":,>"){
			return api.sendMessage(":')", event.threadID, event.messageID);
		}
		if (event.body == "/kiss @Mon AI Haruto"){
			return api.sendMessage("Á À DÁM HÔN CHỊ MÀI À >:V)", event.threadID, event.messageID);
		}
		if (event.body == "/hug @Mon AI Haruto"){
			return api.sendMessage("Á À DÁM ÔM CHỊ MÀI À >:V)", event.threadID, event.messageID);
		}
		if (event.body == "😼"){
		return api.sendMessage("Bố mài khinh 😼", event.threadID, event.messageID);
		}
		if (event.body == "😏"){
			return api.sendMessage("Bố mài lại khinh 😼", event.threadID, event.messageID);
		}
		if (event.body == "Bot ngu"){
			return api.sendMessage("Ngu Cái Lon >:v", event.threadID, event.messageID);
		}
		if (event.body == "bot ngu"){
			return api.sendMessage("Ngu Cái Lon >:v", event.threadID, event.messageID);
		}
		if (event.body == "Hello mn"){
		return api.sendMessage("Chào cậu nha ^^", event.threadID, event.messageID);
		}
		if (event.body == "@Nguyễn Thái Hảo"){
		return api.sendMessage("U Là Trời Admin Đang Bận Cày Phim , Gọi Cái Gì Thế , Tin T Đốt Nhà M ko :v", event.threadID, event.messageID);
		}
		if (event.body == "Bsvv"){
		return api.sendMessage("Buổi Sáng Vui Vẻ Nha !", event.threadID, event.messageID);
		}
		if (event.body == "🤣tao cứ thích sống nhanh được không ad"){
			return api.sendMessage("ko pp", event.threadID, event.messageID);
			}
		if (event.body == "Prefix"){
	return api.sendMessage(`Dấu Lệnh Là : \" / \" `, event.threadID, event.messageID);
}
};

module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",event.threadID)
	}
	
