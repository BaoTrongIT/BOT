module.exports.config = {

    name: "reallove",
  
    version: "1.0.5",
  
    hasPermssion: 0,
  
    credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
  
    description: "Ghép đôi với 1 đứa trong nhóm",
  
    commandCategory: "Box - Chat",
  
    usages: "ghep",
  
    cooldowns: 1,
  
    dependencies: ["axios", "fs-extra"],
  
    envConfig: {
  
         cooldownTime: 3000000000000000
  
    }
  
  };
  
  
  
  module.exports.run = async ({ api, event, args, Users,__GLOBAL,Currencies }) => {
  
    const axios = require("axios");
  
    const fs = require("fs-extra");
  
    const request = require("request");
  
    let data = (await Currencies.getData(event.senderID)).ghepTime;
  
    var mention = Object.keys(event.mentions)[0];
  
    var emoji = ["♥️","❤️","💛","💚","💙","💜","🖤","💖","💝","💓","💘","💍","🎁","💋","💎","💠","🌈","🌍","🌕","☀️"]
  
    var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
  
  
  
    if (!mention) {
  
      let threadInfo = await api.getThreadInfo(event.threadID);
  
      let all = threadInfo.participantIDs;
  
      await all.splice(all.indexOf(api.getCurrentUserID()), 1);
  
      await all.splice(all.indexOf(event.senderID), 1);
  
      var random = all[Math.floor(Math.random() * all.length)];
  
      let data = await api.getUserInfo(parseInt(random));
  
      let dt = await api.getUserInfo(event.senderID);
  
      let Avatar = (await axios.get( `https://graph.facebook.com/${random}/picture?width=512&height=512&access_token=525483098783031|d93387ddd21cbe15f23046e50b8b65fb`, { responseType: "arraybuffer" } )).data;
  
      fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
  
      let name_1 = dt[event.senderID].name;
  
      let name_2 = data[parseInt(random)].name;
  
      if (name_2 == undefined) {
  
        

  
    } else {
        let cooldown = global.ghep.cooldownTime;
				let data = (await Currencies.getData(event.senderID)).ghepTime;
				if (typeof data !== "undefined" && cooldown - (Date.now() - data) > 0) {
					var time = cooldown - (Date.now() - data),
						minutes = Math.floor(time / 60000),
						seconds = ((time % 60000) / 1000).toFixed(0);
					
					return api.sendMessage(`Bạn đã có real love ! hãy thử lại sau : !\n ${minutes} phút ${(seconds < 10 ? "0" : "")}${seconds} giây!`, event.threadID);
				} 
                else {
      const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  
        api.sendMessage( { body: `[ = [ ${random_emoji} [ {name} ] ${random_emoji} ] = ]\n` 
        .replace(/\{name}/g, nameUser) 
        +`Định Mệnh Của Bạn Là :\n`
        +`[ = [ ${random_emoji} [ ${name_2} ] ${random_emoji} ]  = ]\n[ 𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦 ] => Sài ít thôi nha :v`, attachment: fs.createReadStream(__dirname + `/cache/avt.png`), mentions: [{ tag: name_2, id: random }] }, event.threadID, async () => {
			await Currencies.setData(event.senderID, { ghepTime: Date.now() });
		});
                }
  
        }
    }
  
  };