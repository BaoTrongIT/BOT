module.exports.config = {
	name: "owo",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "๐๐๐ณ๐ข๐ ๐๐๐๐ฆ",
	description: "Just owo",
	commandCategory: "Lแปi",
	usages: "",
	cooldowns: 5
};

module.exports.run = ({event, api, args}) => {
    let faces = ['(ใป`ฯยดใป)', ';;w;;', 'owo', 'UwU', '>w<', '^w^'];
    return api.sendMessage(`${ args.join(" ").replace(/(?:r|l)/g, 'w').replace(/(?:R|L)/g, 'W').replace(/n([aeiou])/g, 'ny$1').replace(/N([aeiou])/g, 'Ny$1').replace(/N([AEIOU])/g, 'NY$1').replace(/ove/g, 'uv').replace(/!+/g, ` ${faces[Math.floor(Math.random() * faces.length)]} `).trim()}`, event.threadID, event.messageID);
}