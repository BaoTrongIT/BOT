module.exports.config = {
	name: "veso",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Vé Số Đó Bruh",
	commandCategory: "Admin",
	usages: "veso",
	cooldowns: 5
};
module.exports.run = async ({ api, event }) => {
    api.sendMessage("Hãy Chọn 4 con số từ : 1 - 35 nhé , Mn có 20s để chọn",event.threadID,event.messageID);
    await new Promise(resolve => setTimeout(resolve, 20 * 1000));
    var emoji = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35"]
    var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
    var lza = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35"]
    var random_lza = lza[Math.floor(Math.random() * lza.length)];
    var emoji1 = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35"]
    var random_emoji1 = emoji1[Math.floor(Math.random() * emoji1.length)];
    var emoji2 = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35"]
    var random_emoji2 = emoji2[Math.floor(Math.random() * emoji2.length)];
    return api.sendMessage({
	body:`Đây Là 4 con số ngẫu Nhiên Do Hệ Thống Chọn :\n[ ✯ ] [ ${random_emoji} ]\n[ ✯ ] [ ${random_lza} ]\n[ ✯ ] [ ${random_emoji1} ]\n[ ✯ ] [ ${random_emoji2} ]\n[ H ] Ai Thắng Cuôc Thì Bấm \'/callad\' Ghi tên Nhóm , Tên Face để nhận Thưởng nhé !`,
	}, event.threadID, event.messageID); 
}

