module.exports.config = {
    name: "Help",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
    description: "Hướng dẫn cho người mới",
    commandCategory: "Thông Tin",
    usages: " Help  [Text]",
    cooldowns: 5,
    dependencies: ['axios', 'fs-extra']
};
module.exports.handleReply = async function({ api, event, handleReply, User }) {
    switch (handleReply.type) {
        case "help": {
            switch (event.body) {
                case "1": {
                    api.sendMessage("[ ❖ ] => Box - Chat <= [ ❖ ]\n\n[❖] =>/Setimgbox - Đổi Ảnh Nhóm\n[❖] =>/howtouse list - Hướng Dẫn\n[❖] =>/hug [ tag ] - Ôm 1 Người\n[❖] =>/kiss [ tag ] - Hôn 1 Người\n[❖] =>/lydo add [ Lý Do Out ] - Lý Do Rời Nhóm\n[❖] =>/meme - Ramdom Meme Tiếng Anh\n[❖] =>/math - Tính Toán\n[❖] =>/qr [ Thứ Muốn Nói ] - Tạo Mã QR\n[❖] =>/rcl - Ramdom Color Box Chat\n[❖] =>/reminder - Đếm Ngược Thời Gian Nhắc Nhở\n[❖] =>/poll - Tạo Cuộc Thăm Dò Ý Kiến\n[❖] =>/Sing [ Tên Bài Hát ] - Nghe Nhạc\n[❖] =>/video [ Tên Video ] Xem Video\n[❖] =>/top - Xem Top Các Loại\n[❖] =>/Tvm [ Tag ] - Chào Đón TVM\n[❖] =>/trans - Dịch Ngôn Ngữ\n[❖] =>/work - Thăm Ngàn , Làm Việc\n[❖] =>/ban - Số Tiền Của Bạn\n[❖] =>/ykien add - Thêm Ý Kiến Với Bot\n[❖] =>/covid - Lấy Thông Tin Covid\n[❖] =>/die - Thật Thú Zị :v",event.threadID,event.messageID);
                    try {
                       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
                    }
                    catch {
               api.sendMessage("", event.threadID, event.messageID);
           }
           return api.unsendMessage(handleReply.messageID);
       }
       case "2": {
        api.sendMessage("[ ❖ ] => Check Tương Tác <= [ ❖ ]\n\n[❖] =>/rank - Làm Rank Card\n[❖] =>/check - Số Tin Nhắn Bạn Đã Nhắn\n[❖] =>/top rank - Lấy Top Rank Tất Cả Box",event.threadID,event.messageID);
        try {
           const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
        }
        catch {
             api.sendMessage("", event.threadID, event.messageID);
            }
        return api.unsendMessage(handleReply.messageID);
        }
                case "3": {
                     api.sendMessage("[ ❖ ] => Trò Chơi <= [ ❖ ]\n\n[❖] =>/boitoan - Làm 1 Quẻ Chơi \n[❖] =>/boctham - Bốc Thăm Thử Thách\n[❖] =>/slot - Cờ Bạc , Đặt Cược\n[❖] =>/cauca - Câu Cá Với Bot\n[❖]=>/rname - Ramdom Tên Tiếng Nhật\n[❖] =>/ghep - Ghép Đôi Online\n[❖] =>/bikip list - Bí Kiếp Hay Bởi Admin\n[❖] =>/veso - Vé Số Online\n[❖] =>/giveaway - Giveaway Cho Nhóm\n[❖] =>/howtouse list - Hướng Dẫn Sử Dụng\n[❖] =>/say - Thỉu năng wa\n[❖] =>/rmimg - Có Mỗi Ảnh Meow\n[❖] =>/img - Những Chiếc Ảnh Hay Ho\n[❖] =>/lyrics - Tìm Hiểu Hoàng Đạo\n[❖] =>/kiss - Hôn\n[❖] =>/hug - Ôm\n[❖] =>/meme - Nhưng Dành Trùm Anh\n[❖] =>/quiz - Tự Tin Anh,Thông Thái :)\n[❖] =>/anime - Who Wibu\n[❖] =>/afk - Seen Chùa Ko Bị Kick\n[❖] =>/thinh - Thính ?:D",event.threadID,event.messageID);
                     try {
                        const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
                     }
                     catch {
                api.sendMessage("", event.threadID, event.messageID);
            }
            return api.unsendMessage(handleReply.messageID);
        }
                 case "4": {
                     api.sendMessage("[ ❖ ] => Học <= [ ❖ ]\n\n[❖] =>/diemdanh add - Điểm Danh Thành Viên Học\n[❖] =>/suggest add - Tạo Công Việc , Bài Tập\n[❖] =>/wiki - Kiến Thức Mở Rộng Wiki\n[❖] =>/trans - Google Dịch\n[❖] =>/math - Tính Toán\n[❖] =>/domath - Ramdon Math\n[❖] =>/quiz - Trả Lời Câu Hỏi\n[❖] =>/time - Hữu Dụng",event.threadID,event.messageID);
                     try {
                        const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
                     }
                     catch {
                api.sendMessage("", event.threadID, event.messageID);
            }
            return api.unsendMessage(handleReply.messageID);
        }
                case "5": {
                     api.sendMessage("[ ❖ ] => QTV - Tools <= [ ❖ ]\n\n[❖] =>/kick - Kick Thành Viên\n[❖] =>/filter - Lọc Thành Viên [ Cần Có Sự Giám Sát Của Admin ]\n[❖] =>/usd - Xóa Tin Nhắn Của Bot\n[❖] =>/setad - Thêm Người Vào QTV\n[❖] =>/Ping - Tag Tất Cả Thành Viên Vào\n[❖] =>/all - Tag All",event.threadID,event.messageID);
                     try {
                        const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
                     }
                     catch {
                api.sendMessage("", event.threadID, event.messageID);
            }
            return api.unsendMessage(handleReply.messageID);
        }
                case "6": {
                      api.sendMessage("[ ❖ ] => Báo Lỗi , Nhắn vs Ad <= [ ❖ ]\n\n[❖] =>/callad - Nhắn Tin Cho Admin\n[❖] =>Facebook.com/Hotaru.Kanzu - Facebook Ad",event.threadID,event.messageID);
                      try {
                        const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
                     }
                     catch {
                api.sendMessage("", event.threadID, event.messageID);
            }
            return api.unsendMessage(handleReply.messageID);
                }
                case "del": {
                api.sendMessage("Đã Xóa Thành Công !",event.threadID,event.messageID);
                try {
                  const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
               }
               catch {
          api.sendMessage("", event.threadID, event.messageID);
      }
      return api.unsendMessage(handleReply.messageID);
      
                }
                case "7": {
                    api.sendMessage("[ ❖ ] => Thông Báo Nhận Thưởng <= [ ❖ ]\n\n[❖] =>/callad - Nhắn Tin Cho Admin\n[❖] =>/thongbao [Box  đang ở] - Thông Báo Với Ad Về Việc Thắng Vé Số\n[❖] =>Facebook.com/Hotaru.Kanzu - Facebook Ad",event.threadID,event.messageID);
                    try {
                      const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
                   }
                   catch {
              api.sendMessage("", event.threadID, event.messageID);
          }
          return api.unsendMessage(handleReply.messageID);
              }
              case "8": {
                api.sendMessage("[ ❖ ] => Những Thứ Thú Zị <= [ ❖ ]\n\n[❖] =>/pornhub - Ai biết gì đâu :v\n[❖] =>/nhentai - That is cú lừa\n[❖] =>/hentai - ai bt j 🌚🌚\n[❖] =>/hentaivn - bấm vô tự chịu 🌚\n[❖] =>/penis - nhìn cái j .-.",event.threadID,event.messageID);
                try {
                  const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
               }
               catch {
          api.sendMessage("", event.threadID, event.messageID);
      }
      return api.unsendMessage(handleReply.messageID);
                }
                case "9": {
                    api.sendMessage("[ ❖ ] => Cú Lừa <= [ ❖ ]\n\n[❖] =>/okia - Cú Lừa :V\n[❖] =>/yeubot - Cú Lừa :V\n[❖] =>/die - Cú Lừa :V",event.threadID,event.messageID);
                    try {
                      const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
                   }
                   catch {
              api.sendMessage("", event.threadID, event.messageID);
          }
          return api.unsendMessage(handleReply.messageID);
                    }
            }
        }
    }
}

module.exports.run = async function ({ api, event, args, client }) {
        try {
          return  api.sendMessage("[ ❖ ] ↜ [ = [Lazic Team] = ] ↝ [ ❖ ]" +
            "\n[❖] • [ ❶ ] • [Box - Chat] "+
            "\n[❖] • [ ❷ ] • [ Check Tương Tác ]"+
            "\n[❖] • [ ❸ ] • [ Trò Chơi ]"+
            "\n[❖] • [ ❹ ] • [ Học - Cre : Kanzu ]"+
            "\n[❖] • [ ❺ ] • [ QTV - Tools ] "+
            "\n[❖] • [ ❻ ] • [ Báo Lỗi , Gọi Admin ] "+
            "\n[❖] • [ ❼ ] • [ Thông Báo Nhận Thưởng ] "+
            "\n[❖] • [ ❽ ] • [ Những Thứ Thú Zị ] " +
            "\n[❖] • [ ❾ ] • [ Cú Lừa ] " +
            "\n[✪]=> Lưu Ý : Hãy reply tin nhắn và chọn theo số !"+
            "\n[✪]=> Hiện Tại Có [ 130 ] Câu Lệnh  Dùng Được"+
            "\n[✪]=> Nếu Như Có Ý Kiến Gì Thì Bấm /ykien add [ ý kiến ]" +
            "\n[✪]=> Admin Bot : [ Nguyễn Thái Hảo ] <=[✪]" 
            , event.threadID, (error, info) => {
                client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "help"
                });
            }, event.messageID)
        }
        catch {
                api.sendMessage("Lỗi Nè AHAHAHAHAHHAHA",event.threadID,event.messageID);
        }
    }