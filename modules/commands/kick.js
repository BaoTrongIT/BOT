module.exports.config = {
	name: "kick",
	version: "1.0.0", 
	hasPermssion: 1,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Xoá người bạn cần xoá khỏi nhóm bằng cách tag",
	commandCategory: "QTV Tools", 
	usages: "kick [tag]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = function({ api, event }) {
	var mention = Object.keys(event.mentions);
	return api.getThreadInfo(event.threadID, (err, info) => {
		if (err) return api.sendMessage("Có lỗi r :v Kick tay đi :v",event.threadID);
		if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('Cần quyền quản trị viên nhóm\nVui lòng thêm và thử lại!', event.threadID, event.messageID);
		if(!mention[0]) return api.sendMessage("Bạn phải tag người cần kick [ 𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦 ]",event.threadID);
		if (info.adminIDs.some(item => item.id == event.senderID)) {
			for (let o in mention) {
				setTimeout(() => {
					api.removeUserFromGroup(mention[o],event.threadID) 
				},200)
			return api.sendMessage("Đã Kick Thành Công !",event.threadID, event.messageID);
			} 
		}
	})
}