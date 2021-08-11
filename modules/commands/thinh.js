module.exports.config = {
    name: "thinh",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Lazic Team",
    description: "Thính",
    commandCategory: "random-text",
    cooldowns: 1
  };
  
  module.exports.run = async ({ api, event, args, Users,__GLOBAL,Currencies }) => {
  
    const axios = require("axios");
  
    const fs = require("fs-extra");
  
    const request = require("request");
     const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
    let data = (await Currencies.getData(event.senderID)).ghepTime;
    var emoji = ["Bầu trời xanh, làn mây trắng. Anh yêu nắng hay yêu em?"," Nhờ có nắng mới thấy cầu vồng. Nhờ có anh mới thấy màu hạnh phúc."," Anh yêu ơi ới ời. Anh đang ở đâu?"," Soái ca là của ngôn tình. Còn anh thì chỉ của mình em thôi.","Giữa cuộc đời hàng ngàn cám dỗ.Em chỉ cần bến đỗ anh thôi.","Bồ công anh bay khi có gió. Em chỉ cười vì ở đó có anh.","Chỉ cần anh nói yêu, em sẽ bám theo anh suốt đời. Cô gái đang muốn muốn bật đèn xanh đấy. Cô nàng muốn gợi ý là mình chung thủy lắm đấy. Anh cứ thử tỏ tình mà xem.","Ba mươi chưa phải là Tết. Không làm bạn đâu phải là hết, còn có thể làm người yêu mà.","Ai nào cho mượn avatar để em đỡ cô đơn đi","Nắng đã có mũ, mưa đã có ô, còn em sẽ có ai?",". Chồng tương lai ơi, em chờ anh hơi lâu rồi đấy","Trời đổ mưa rồi sao anh chưa đổ em?","Dạo này anh có thấy mỏi chân? Sao cứ đi trong tim em mãi."," Anh ơi, có nóng không? Tim em đang cháy nè.","Anh gì ơi ! Anh đánh rơi người yêu này.","Sao anh cười mãi thế. Da em đen mất rồi."," Ủa đêm rồi mà sao tim mình vẫn đầy nắng thế?","Tim anh còn chỗ không? Em muốn chuyển nhà mà chưa tìm thấy chỗ.","Uống nhầm 1 ánh mắt cơn say theo cả đời!"," Em thích anh còn nhiều hơn muối ở biển…","Em đọc hết “Mười vạn câu hỏi vì sao” những vẫn không hiểu được vì sao em thích anh nhiều thế."," Đường thì dài, chân em thì ngắn. Phải đi bao xa mới có thể tìm thấy anh.","Em xinh tươi, nhưng em chưa thuộc về ai.","Chán thả thính rồi, ai cưa để em đổ một lần coi.","Có phải cuộc sống quá bon chen nên anh mãi vẫn chưa tìm đến em?","Nếu có thể hãy để em một lần được yêu anh, được không?","Tuổi tác với chị không quan trọng, vấn đề là em đã có bằng lái chưa?","Trăng lên đỉnh núi trăng tà. Anh yêu em thật hay là yêu chơi?","Nếu ngoài kia nhiều bão tố, thì về đây với em."," Em không muốn ngủ muộn, chỉ là đang chờ ai đó chúc ngủ ngon thôi."]
  
    var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
  api.sendMessage(`Đây Là Thính Của :` 
   + " [ {name} ] "
    .replace(/\{name}/g, nameUser) 
   + `: \n - ${random_emoji}\n [ | ] Đóng Góp Thính : /callad - thính`, event.threadID, event.messageID);
  }