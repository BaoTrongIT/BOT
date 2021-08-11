module.exports.config = {
    name: "bikip",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Kanzu",
    description: "*",
    commandCategory: "Box - Chat",
    usages: "bikip option input",
    cooldowns: 5,
    info: [
        {
            key: 'option => add',
            prompt: 'Thêm công việc/đóng góp',
            type: 'string',
            example: 'make bot better'
        },
        {
            key: 'option => list',
            prompt: 'Xem toàn bộ danh sách công việc/đóng góp',
            type: 'string'
        },
        {
            key: 'option => delete',
            prompt: 'Xóa công việc/đóng góp chỉ định dựa vào số dòng, chỉ admin có thể sử dụng',
            type: 'number',
            example: "1"
        }
    ]
};

module.exports.onLoad = function() {
    const fs = require("fs-extra");

    if (!fs.existsSync(__dirname + "/cache/bikip.json")) {
        const bikip = [];
        fs.writeFileSync(__dirname + "/cache/bikip.json", JSON.stringify(bikip));
    }
}

module.exports.run = function({ api, event, args, permssion, utils }) {
    const fs = require("fs-extra");
    const content = args.slice(1, args.length);
    const dirFile = __dirname + "/cache/bikip.json";

    var getList = fs.readFileSync(dirFile);
    var getData = JSON.parse(getList);

    switch (args[0]) {
        case "add": {
            if (permssion !== 2) return api.sendMessage("Bạn Không Đủ quyền để thêm bí kíp , hãy liên hệ với admin = cách /callad [ vấn đề ]", event.threadID, event.messageID);
            const bikip = `[ Bí kíp ] ${content.join(" ")}`
            getData.push(bikip);
            fs.writeFileSync(dirFile, JSON.stringify(getData));
            return api.sendMessage(`Đã Thêm Bí Kíp Thành Công!`, event.threadID, event.messageID);
        }
        case "list":
        case "all": {
            if (getData.length == 0) return api.sendMessage(`Hiện tại chưa có bí kíp nào để hiển thị!`, event.threadID, event.messageID);
            var workList = "";
            getData.map(item => workList += `\n[⚜️] ${item}`);
            return api.sendMessage(`[ = [ Bí Kíp Nè ] = ] : \n${workList}`, event.threadID, event.messageID);
        }
        case "tantrai": {
            return api.sendMessage(`[ = [ ⚜️-😎-⚜️ ] = ]\nUhmm Theo Ad Muốn Tán Được Trai , thì phải có những thông tin cơ bản của người đó , cần có sự dễ thương , xinh đẹp , cần chọn đúng người , và đường đi thẳng đến trái tim gần nhất là từ dạ dày , tán k đổ thì tán đến khi nào đổ mới thôi , phải quan tâm và chia sẽ nỗi buồn cùng nhau ,...`, event.threadID, event.messageID); 
        }
        case "tangai": {
            return api.sendMessage(`[ = [ ⚜️-😎-⚜️ ] = ]\nUhmm Muốn Tán được 1 cô gái thì bạn cần quyết tâm , không nản , vì tán 1 người rất khó , cần bỏ liêm sỉ ( liêm sĩ j tầm này ), luôn luôn quan tâm , giúp đỡ cô gái đó , tạo dựng thiện cảm và sự tin tưởng ,...`, event.threadID, event.messageID);
        }
        case "caolen": {
            return api.sendMessage(`[ = [ ⚜️-😎-⚜️ ] = ]\nMuốn cao được thì cần bỏ qua tật lười * , mỗi sáng tập thể dục , dậy sớm , ngủ sớm và vận động nhiều ,...`, event.threadID, event.messageID);
        }
        case "hetluoi": {
            return api.sendMessage(`[ = [ ⚜️-😎-⚜️ ] = ]\nUhmm cais này để sau :v`, event.threadID, event.messageID);
        }
        case "taobot": {
            return api.sendMessage(`[ = [ ⚜️-😎-⚜️ ] = ]\n Ủa gì :)) Google làm gì thế bạn :))`, event.threadID, event.messageID);
        }
		case "del":
        case "delete": {
            if (permssion !== 2) return api.sendMessage("Bạn không đủ quyền hạn để có thể sử dụng delete!", event.threadID, event.messageID);
            if (getData.length == 0) return api.sendMessage(`Hiện tại chưa có bí kíp nào để có thể xóa!`, event.threadID, event.messageID);
            if (content.length == 0) return api.sendMessage(`Bạn cần phải chỉ định mục cần xóa`, event.threadID, event.messageID);
            if (isNaN(content)) return api.sendMessage(`Bạn cần phải chỉ định mục cần xóa`, event.threadID, event.messageID);
            getData.splice((parseInt(content) - 1), 1);
            fs.writeFileSync(dirFile, JSON.stringify(getData));
            return api.sendMessage(`Đã xóa thành công mục có id là: ${content}`, event.threadID, event.messageID);
        }
        default:
            api.sendMessage("Bấm /bikip list để xem nha", event.threadID, event.messageID);
            break;
    }
}