module.exports.config = {
	name: "work",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Có làm thì mới có ăn!",
	commandCategory: "Box - Games",
	usages: "work",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1200000
    }
};

module.exports.run = async ({ event, api, Currencies, global }) => {
    const { threadID, messageID } = event;
    const cooldown = global.work.cooldownTime;
    const data = (await Currencies.getData(event.senderID)).workTime;
    if (typeof data !== "undefined" && cooldown - (Date.now() - data) > 0) {
        var time = cooldown - (Date.now() - data),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0);
        
		return api.sendMessage(`Bạn đang trong thời gian chờ\nVui lòng thử lại sau: ${minutes} phút ${(seconds < 10 ? "0" : "")}${seconds} giây!`, event.threadID, event.messageID);
    }
    else {
        const job = [
            "đi bán vé số",
            "đi sửa xe",
            "làm nhân viên lập trình",
            "đi hack facebook",
            "làm thợ sửa ống nước ( ͡° ͜ʖ ͡°)",
            "làm đầu bếp",
            "làm thợ hồ",
            "fake taxi",
            "đi gangbang người khác",
            "làm re sờ chym mờ",
            "đi bán hàng online",
            "làm nội trợ",
            "đi vả mấy thằng sao đỏ, giun vàng",
            "đi bán hoa",
            "Đi làm bot :>",
            "đi chơi Yasuo trong rank và gánh team",
            "đi quẩy Bar :>",
            "giả NY admin :>"
        ];
        const amount = Math.floor(Math.random() * 1000);
        return api.sendMessage(`Bạn ${job[Math.floor(Math.random() * job.length)]} và đã nhận được số tiền là: ${amount} coins`, threadID, async () => {
             await Currencies.increaseMoney(event.senderID, parseInt(amount));
             await Currencies.setData(event.senderID, { workTime: Date.now() });
        }, messageID);
    }
       
}