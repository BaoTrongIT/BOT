module.exports.config = {
	name: "adminbot",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Quản lý admin bot",
	commandCategory: "Quyền Cấp 2",
	usages: "admin [list/add/remove] [args]",
    cooldowns: 5,
    info: [
		{
			key: 'list',
			prompt: 'Xem toàn bộ danh sách admin',
			type: 'String'
		},
        {
			key: 'add',
			prompt: 'Thêm admin vào danh sách admin, có thể sử dụng tag, reply',
			type: 'String',
			example: '10000000'
		},
        {
			key: 'remove',
			prompt: 'Xóa admin khỏi danh sách admin, có thể sử dụng tag, reply',
			type: 'String',
			example: '10000000'
		}
	],
};



module.exports.run = async ({ api, event, global, args, permssion, utils, client, Users }) => {
    const content = args.slice(1, args.length);
    const option = args[0];
    const { writeFileSync } = require("fs-extra");
    delete require.cache[require.resolve(client.dirConfig)];
    var config = require(client.dirConfig);
    try {
    const listAdmin = global.config.ADMINBOT;
    var msg = [];
    for (const id of listAdmin) {
        if (parseInt(id)) {
            const name = await Users.getNameUser(id);
            msg.push(`- ${name} - https://facebook.com/${id}`);
        }
    }

     api.sendMessage(`[𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦] => Danh sách toàn bộ admin bot: \n${msg.join("\n")}`, event.threadID, event.messageID);
}
    catch (e) {
        api.sendMessage("Lỗi !", event.threadID, event.messageID)
    }
}