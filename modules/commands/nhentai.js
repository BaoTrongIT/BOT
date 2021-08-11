module.exports.config = {
    name: "nhentai",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
    description: "Tìm kiếm thông tin truyện trên nhentai",
    commandCategory: "NSFW",
    usages: "nhentai id",
    cooldowns: 5,
    dependencies: ["request"],
};

module.exports.run = ({ event, api }) => api.sendMessage(`Eeee mấy đứa ai bấm command gì lạ quá nè :"D`, event.threadID, event.messageID);