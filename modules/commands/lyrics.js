module.exports.config = {
	name: "lyrics",
    version: "1.0.0", 
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Xem cung", 
	commandCategory: "Khác",
	usages: "cung [cung]",
	cooldowns: 5,
    dependencies: ["lyrics-finder"]
};
module.exports.run = async function ({ api, args, event }) {
  const lyricsFinder = require('lyrics-finder');
    let lyrics = await lyricsFinder(args.join(" ")) || "Not Found!";
    console.log(lyrics);
api.sendMessage(`${lyrics}`, event.threadID, event.messageID);
}