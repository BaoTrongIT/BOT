module.exports.config = {
	name: "kiss",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Hôn đứa bạn tag :L",
	commandCategory: "Cơm Đog",
	usages: "/kiss [ tag ]",
	cooldowns: 5,
	dependencies: ["request"],
};
	
module.exports.run = async ({ event, api, args, client, Currencies, Users, utils, __GLOBAL }) => {
	const request = require('request')
		const fs = require('fs')
		var mention = Object.keys(event.mentions);
		if(!mention[0]) return api.sendMessage("[ 𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦 ] => Bạn Cần Tag Người Cần Hôn !!",event.threadID);
		if (args.join().indexOf('@') !== -1)
			return request('https://nekos.life/api/v2/img/kiss', (err, response, body) => {
				let picData = JSON.parse(body);
				let getURL = picData.url;
				let ext = getURL.substring(getURL.lastIndexOf('.') + 1);
				let callback = function () {
					api.sendMessage({
						body: " Nụ Hôn Đầy comtro ( có thể hôn ngkhac bằng cách Tag )",
						attachment: fs.createReadStream(__dirname + `/cache/anime.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anime.${ext}`), event.messageID);
				};
				request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/anime.${ext}`)).on("close", callback);
			});
	}