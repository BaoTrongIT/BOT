module.exports.config = {
	name: "noprefix",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "πππ³π’π ππππ¦",
	description: "πππ³π’π ππππ¦",
	commandCategory: "Admin",
	usages: "πππ³π’π ππππ¦",
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
		return api.sendMessage("AD KanzuWakazaki - [πππ³π’π ππππ¦]", event.threadID, event.messageID);
		}
		if (event.body == "Hi"){
		return api.sendMessage("ChΓ o CαΊ­u ^^", event.threadID, event.messageID);
		}
		if (event.body == "YΓͺu ad"){
		return api.sendMessage("Ad hong tin yΓͺu gΓ¬ mΓ  yΓͺu >:v", event.threadID, event.messageID);
		}
		if (event.body == "/Administrator"){
		return api.sendMessage("Hi admin Kanzu πββοΈ", event.threadID, event.messageID);
		}
		if (event.body == "Hi mn."){
		return api.sendMessage("ChΓ o cαΊ­u nha ^^", event.threadID, event.messageID);
		}
		if (event.body == "2 mn"){
		return api.sendMessage("2 , 3 , 4 , 5 , 6 ,...", event.threadID, event.messageID);
		}
		if (event.body == ":,>"){
			return api.sendMessage(":')", event.threadID, event.messageID);
		}
		if (event.body == "/kiss @Mon AI Haruto"){
			return api.sendMessage("Γ Γ DΓM HΓN CHα» MΓI Γ >:V)", event.threadID, event.messageID);
		}
		if (event.body == "/hug @Mon AI Haruto"){
			return api.sendMessage("Γ Γ DΓM ΓM CHα» MΓI Γ >:V)", event.threadID, event.messageID);
		}
		if (event.body == "πΌ"){
		return api.sendMessage("Bα» mΓ i khinh πΌ", event.threadID, event.messageID);
		}
		if (event.body == "π"){
			return api.sendMessage("Bα» mΓ i lαΊ‘i khinh πΌ", event.threadID, event.messageID);
		}
		if (event.body == "Bot ngu"){
			return api.sendMessage("Ngu CΓ‘i Lon >:v", event.threadID, event.messageID);
		}
		if (event.body == "bot ngu"){
			return api.sendMessage("Ngu CΓ‘i Lon >:v", event.threadID, event.messageID);
		}
		if (event.body == "Hello mn"){
		return api.sendMessage("ChΓ o cαΊ­u nha ^^", event.threadID, event.messageID);
		}
		if (event.body == "@Nguyα»n ThΓ‘i HαΊ£o"){
		return api.sendMessage("U LΓ  Trα»i Admin Δang BαΊ­n CΓ y Phim , Gα»i CΓ‘i GΓ¬ ThαΊΏ , Tin T Δα»t NhΓ  M ko :v", event.threadID, event.messageID);
		}
		if (event.body == "Bsvv"){
		return api.sendMessage("Buα»i SΓ‘ng Vui VαΊ» Nha !", event.threadID, event.messageID);
		}
		if (event.body == "π€£tao cα»© thΓ­ch sα»ng nhanh ΔΖ°α»£c khΓ΄ng ad"){
			return api.sendMessage("ko pp", event.threadID, event.messageID);
			}
		if (event.body == "Prefix"){
	return api.sendMessage(`DαΊ₯u Lα»nh LΓ  : \" / \" `, event.threadID, event.messageID);
}
};

module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("πππ³π’π ππππ¦",event.threadID)
	}
	
