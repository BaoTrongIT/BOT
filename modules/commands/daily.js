module.exports.config = {
	name: "daily",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Nhận 500 coins mỗi ngày!",
	commandCategory: "Work",
	usages: "daily",
    cooldowns: 5,
    dependencies: ["parse-ms"],
    envConfig: {
        cooldownTime: 3000000,
        rewardCoin:500
    }
};

module.exports.run = async ({ event, api, Currencies, global }) => {
    let cooldown = global.daily.cooldownTime;
    let coinReward = global.daily.rewardCoin;
    let data = (await Currencies.getData(event.senderID)).dailyTime;
    if (typeof data !== "undefined" && cooldown - (Date.now() - data) > 0) {
        var time = cooldown - (Date.now() - data),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0);
        
		return api.sendMessage(`Bạn đang trong thời gian chờ\nVui lòng thử lại sau: ${minutes} phút ${(seconds < 10 ? "0" : "")}${seconds} giây!`, event.threadID);
    }
    else return api.sendMessage(`Bạn đã nhận ${coinReward} coins, để có thể tiếp tục nhận, vui lòng quay lại sau 12 tiếng`, event.threadID, async () => {
        await Currencies.increaseMoney(event.senderID, coinReward);
        await Currencies.setData(event.senderID, options = { dailyTime: Date.now() });
    })
}