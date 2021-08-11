module.exports.config = {
	name: "time",
	version: "1.0.2",
	credits: "Lợi",
	hasPermssion: 0,
	description: "thêm thành viên",
	commandCategory: "Box - Chat",
	usages: "g",
	cooldowns: 0,
    dependencies: ["fb-tools"]
};

module.exports.run = async ({api, event}) => {
        try {
    const today = new Date().toLocaleString("vi-vn", {timeZone: "Asia/Ho_Chi_Minh"});
        let threadInfo = (await api.getThreadInfo(event.threadID));
     var name = threadInfo.name;
     let data = await api.getUserInfo(event.senderID);	
      let nameuser = data[event.senderID].name;
      return api.sendMessage(`[ 𝐈𝐈𝐈 ] • [ ${name} ] • [ 𝐈𝐈𝐈 ]\n[ 𝐈𝐈 ] • [ ${nameuser} ] • [ 𝐈𝐈 ]\n[ 𝐈 ] • [ ${today} ] • [ 𝐈 ]`,event.threadID)
}
    catch (e) {
        return api.sendMessage(" Ôi  Má Ơi Kêu Thằng Admin Đi Lỗi Rồi !!!",event.threadID, event.messageID)
    }
}