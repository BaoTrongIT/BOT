module.exports.config = {
	name: "warn",
	version: "0.0.1",
	hasPermssion: 1,
	credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",
	description: "Cấm hoặc gỡ cấm người dùng",
	commandCategory: "Admin",
	usages: "user args input",
	cooldowns: 5,
	info: [
		{
			key: 'args => ban',
			prompt: 'Nhập input là ID người dùng cần ban',
			type: 'Number',
			example: '100000'
		},
		{
			key: 'args => unban',
			prompt: 'Nhập input là ID người dùng cần unban',
			type: 'Number',
			example: '100000'
		},
		{
			key: 'args => search',
			prompt: 'Nhập input là từ khoá cần tìm người dùng',
			type: 'String',
			example: 'khu'
		}
	]
};


	module.exports.onLoad = function () {
	const fs = require("fs-extra");

	if (!fs.existsSync(__dirname + "/cache/warnlist.json")) {
		const warnlist = [];
		fs.writeFileSync(__dirname + "/cache/warnlist.json", JSON.stringify(warnlist));
	}
}

module.exports.run = async ({ api, event, args, permssion, utils, client, Users, envent }) => {

	const fs = require("fs-extra");

	const content = args.slice(1, args.length);
	const dirFile = __dirname + "/cache/warnlist.json";


	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);


	switch (args[0]) {
		case "1.1": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`, event.threadID, event.messageID);
			return api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`,event.threadID, event.messageID);
		}
		case "1.2": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "1.3": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "1.4": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "1.5": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "1.6": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "1.7": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "1.8": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "1.9": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "2.1": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
 			 getData.splice((parseInt("1") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
			return	api.sendMessage(`[ ⚜️ ] Còn 1 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
		}
		case "2.2": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
 			 getData.splice((parseInt("2") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`[ ⚜️ ] Còn 1 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "2.3": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
 			 getData.splice((parseInt("3") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`[ ⚜️ ] Còn 1 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "2.4": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
 			 getData.splice((parseInt("4") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`[ ⚜️ ] Còn 1 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "2.5": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
 			 getData.splice((parseInt("5") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`[ ⚜️ ] Còn 1 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "2.6": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
 			 getData.splice((parseInt("5") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`[ ⚜️ ] Còn 1 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "2.7": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
 			 getData.splice((parseInt("5") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`[ ⚜️ ] Còn 1 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "2.8": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
 			 getData.splice((parseInt("5") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`[ ⚜️ ] Còn 1 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "2.9": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
 			 getData.splice((parseInt("5") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`[ ⚜️ ] Còn 1 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.1": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			 getData.splice((parseInt("1") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`[ ⚜️ ] [ ${nameuser} ] Đã Đạt Đủ Lần Cảnh Cáo !`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị danh sách cho Global Ban [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.2": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			 getData.splice((parseInt("2") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`[ ⚜️ ] [ ${nameuser} ] Đã Đạt Đủ Lần Cảnh Cáo !`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị danh sách cho Global Ban [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.3": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			 getData.splice((parseInt("3") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`[ ⚜️ ] [ ${nameuser} ] Đã Đạt Đủ Lần Cảnh Cáo !`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị danh sách cho Global Ban [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.4": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			 getData.splice((parseInt("4") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`[ ⚜️ ] [ ${nameuser} ] Đã Đạt Đủ Lần Cảnh Cáo !`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị danh sách cho Global Ban [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.5": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			 getData.splice((parseInt("5") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`[ ⚜️ ] [ ${nameuser} ] Đã Đạt Đủ Lần Cảnh Cáo !`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị danh sách cho Global Ban [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.6": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			 getData.splice((parseInt("5") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`[ ⚜️ ] [ ${nameuser} ] Đã Đạt Đủ Lần Cảnh Cáo !`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị danh sách cho Global Ban [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.7": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			 getData.splice((parseInt("5") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`[ ⚜️ ] [ ${nameuser} ] Đã Đạt Đủ Lần Cảnh Cáo !`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị danh sách cho Global Ban [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.8": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			 getData.splice((parseInt("5") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`[ ⚜️ ] [ ${nameuser} ] Đã Đạt Đủ Lần Cảnh Cáo !`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị danh sách cho Global Ban [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.9": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlist = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlist);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			 getData.splice((parseInt("5") - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			api.sendMessage(`[ ⚜️ ] [ ${nameuser} ] Đã Đạt Đủ Lần Cảnh Cáo !`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị danh sách cho Global Ban [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "list":
		case "all": {
			if (getData.length == 0) return api.sendMessage(`Hiện Tại Chưa Ai Được Cảnh Cáo !`, event.threadID, event.messageID);
			var workList = "";
			getData.map(item => workList += `\n[ ⚜️ ] ${item}`);
			return api.sendMessage(`[ = ] [ Những Người Bị Cảnh Cáo ] [ = ]\n${workList}`, event.threadID, event.messageID);
		}
		case "delete":
		case "del": {
			if (permssion !== 2) return api.sendMessage("Bạn không đủ quyền hạn để có thể sử dụng delete!", event.threadID, event.messageID);
			if (getData.length == 0) return api.sendMessage(`Hiện tại chưa có [ Cảnh Cáo ] nào để có thể xóa!`, event.threadID, event.messageID);
			if (content.length == 0) return api.sendMessage(`Bạn cần phải chỉ định mục cần xóa`, event.threadID, event.messageID);
			if (isNaN(content)) return api.sendMessage(`Bạn cần phải chỉ định mục cần xóa`, event.threadID, event.messageID);
			getData.splice((parseInt(content) - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			return api.sendMessage(`Đã xóa thành công mục có id là: ${content}`, event.threadID, event.messageID);
		}
		default:
			api.sendMessage("hãy tag người cần cảnh cáo",event.threadID, event.messageID);
		break;
	}
}