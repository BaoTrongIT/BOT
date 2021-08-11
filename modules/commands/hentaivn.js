module.exports.config = {
    name: "hentaivn",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
    description: "Tìm kiếm thông tin truyện trên hentaivn",
    commandCategory: "NFSW",
    usages: "hentaivn id",
    cooldowns: 5,
    dependencies: ["axios","cheerio"]
};

module.exports.run = ({ event, api }) => api.sendMessage(`Eeee mấy đứa ai bấm command gì lạ quá nè :"D`, event.threadID, event.messageID);