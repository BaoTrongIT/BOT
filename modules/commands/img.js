/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
    name: "img",
    version: "3.1.2",
    hasPermssion: 0,
    credits: "ProCoderMew",
    description: "Kho Ảnh",
    commandCategory: "nsfw",
    usages: "[boy/girl/cosplay/wibu/meow/dog]",
    cooldowns: 5,
    dependencies: ["axios", "fs-extra"],
    envConfig: {
        APIKEY: ""
    }
};

module.exports.run = async function({ api, event, args }) {
    const { createReadStream, unlinkSync, writeFileSync } = require("fs-extra");
    const axios = require("axios");
    const { threadID, messageID } = event;
    var type;
    switch (args[0]) {
        case "boy":
        case "trai":
            type = "boy";
        break;
        case "girl":
        case "gái":
            type = "girl";
        break;
        case "cosplay":
            type = "cosplay";
        break;
        case "wibu":
            type = "wibu";
        break;
        case "meow":
        	type = "meow";
        break;
        case "dog":
        case "chó":
            type = "dog";
        break;        
        default:
            return api.sendMessage("có : boy . girl , cosplay , wibu , meow , dog ",  threadID, messageID);
        break;
    }
    
    var { data } = await axios.get(`https://meewmeew.info/image/${type}?apikey=MEWS2FuenU7b3lleWdxQHdvcmtpbmd0YWxsLmNvbQ`);
    var path = __dirname + `/cache/${type}.png`;
    if (data.success == false) return api.sendMessage(data.error, threadID, messageID);
    else {
        writeFileSync(path, Buffer.from(data.data, 'utf-8'));
        return api.sendMessage({ attachment: createReadStream(path) }, threadID, () => unlinkSync(path), messageID);       
    }
}