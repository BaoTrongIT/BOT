module.exports.config = {

    name: "reallove",
  
    version: "1.0.5",
  
    hasPermssion: 0,
  
    credits: "๐๐๐ณ๐ข๐ ๐๐๐๐ฆ",
  
    description: "Ghรฉp ฤรดi vแปi 1 ฤแปฉa trong nhรณm",
  
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
  
    var emoji = ["โฅ๏ธ","โค๏ธ","๐","๐","๐","๐","๐ค","๐","๐","๐","๐","๐","๐","๐","๐","๐ ","๐","๐","๐","โ๏ธ"]
  
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
					
					return api.sendMessage(`Bแบกn ฤรฃ cรณ real love ! hรฃy thแปญ lแบกi sau : !\n ${minutes} phรบt ${(seconds < 10 ? "0" : "")}${seconds} giรขy!`, event.threadID);
				} 
                else {
      const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  
        api.sendMessage( { body: `[ = [ ${random_emoji} [ {name} ] ${random_emoji} ] = ]\n` 
        .replace(/\{name}/g, nameUser) 
        +`ฤแปnh Mแปnh Cแปงa Bแบกn Lร  :\n`
        +`[ = [ ${random_emoji} [ ${name_2} ] ${random_emoji} ]  = ]\n[ ๐๐๐ณ๐ข๐ ๐๐๐๐ฆ ] => Sร i รญt thรดi nha :v`, attachment: fs.createReadStream(__dirname + `/cache/avt.png`), mentions: [{ tag: name_2, id: random }] }, event.threadID, async () => {
			await Currencies.setData(event.senderID, { ghepTime: Date.now() });
		});
                }
  
        }
    }
  
  };