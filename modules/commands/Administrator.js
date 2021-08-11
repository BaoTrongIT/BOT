module.exports.config = {
	name: "Administrator",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Thông tin admin",
	commandCategory: "Thông Tin",
	usages: "Administrator",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage('[ 🗼 ] - [Thông Tin Admin] - [ 🗼 ]\n[ = ] Tên : Nguyễn Thái Hảo\n[ = ] Biệt Danh : KanzuWakzaki,HaryWakazaki,Hotaru\n[ = ] Sinh Nhật : 3 / 1\n[ = ] Năm : 🤔🤔\n[ = ] Cao : 1m60 trở lên ?\n[ = ] Cân nặng : 45kg\n[ = ] Sở thích : Nghe nhạc , đọc sách , giết thời gian\n[ = ] Cung : Ma Kết\n[ = ] Facebook : Facebook.com/Hotaru.Kanzu ' , event.threadID, event.messageID);