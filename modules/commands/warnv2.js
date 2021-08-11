module.exports.config = {
	name: "warnv2",
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

	if (!fs.existsSync(__dirname + "/cache/warnlistv2.json")) {
		const warnlistv2 = [];
		fs.writeFileSync(__dirname + "/cache/warnlistv2.json", JSON.stringify(warnlistv2));
	}
}

module.exports.run = async ({ api, event, args, permssion, utils, client, Users, envent }) => {

	const fs = require("fs-extra");

	const content = args.slice(1, args.length);
	const dirFile = __dirname + "/cache/warnlistv2.json";


	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);


	switch (args[0]) {
		case "1.1": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 5 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "1.2": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 5 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "1.3": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 5 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "1.4": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 5 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "1.5": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 5 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "1.6": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 5 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "1.7": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 5 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "1.8": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 5 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "1.9": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 1 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 5 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 1 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "2.1": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 4 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "2.2": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
 			 
			api.sendMessage(`[ ⚜️ ] Còn 4 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "2.3": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
 			
			api.sendMessage(`[ ⚜️ ] Còn 4 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "2.4": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
 			 
			api.sendMessage(`[ ⚜️ ] Còn 4 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "2.5": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 4 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "2.6": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
 			
			api.sendMessage(`[ ⚜️ ] Còn 4 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "2.7": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
 			
			api.sendMessage(`[ ⚜️ ] Còn 4 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "2.8": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
 			
			api.sendMessage(`[ ⚜️ ] Còn 4 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "2.9": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 2 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
 			
			api.sendMessage(`[ ⚜️ ] Còn 4 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 2 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.1": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 3 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 3 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.2": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			 
			api.sendMessage(`[ ⚜️ ] Còn 3 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 3 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.3": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 3 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 3 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.4": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			 
			api.sendMessage(`[ ⚜️ ] Còn 3 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 3 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.5": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 3 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 3 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.6": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 3 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 3 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.7": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 3 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 3 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.8": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 3 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 3 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
		case "3.9": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 3 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 3 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 3 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
        case "4.1": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 4 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 4 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
        case "4.2": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 4 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 4 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
        case "4.3": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 4 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 4 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
        case "4.4": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 4 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 4 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
        case "4.5": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 4 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 4 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
        case "4.6": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 4 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 4 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
        case "4.7": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 4 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 4 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
        case "4.8": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 4 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 4 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
        case "4.9": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 4 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 2 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Đã Cảnh Cáo Lần 4 cho [ ${nameuser} ] Thành Công !`,event.threadID, event.messageID);
		}
        case "5.1": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 5 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 0 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị kick thành viên [ ${nameuser} ]  !`,event.threadID, event.messageID);
		}
        case "5.2": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 5 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 0 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị kick thành viên [ ${nameuser} ]  !`,event.threadID, event.messageID);
		}
        case "5.3": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 5 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 0 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị kick thành viên [ ${nameuser} ]  !`,event.threadID, event.messageID);
		}
        case "5.4": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 5 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 0 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị kick thành viên [ ${nameuser} ]  !`,event.threadID, event.messageID);
		}
        case "5.5": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 5 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 0 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị kick thành viên [ ${nameuser} ]  !`,event.threadID, event.messageID);
		}
        case "5.6": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 5 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 0 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị kick thành viên [ ${nameuser} ]  !`,event.threadID, event.messageID);
		}
        case "5.7": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 5 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 0 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị kick thành viên [ ${nameuser} ]  !`,event.threadID, event.messageID);
		}
        case "5.8": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 5 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 0 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị kick thành viên [ ${nameuser} ]  !`,event.threadID, event.messageID);
		}
        case "5.9": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 5 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions)[0];
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			
			api.sendMessage(`[ ⚜️ ] Còn 0 lần cảnh cáo cho => [ ${nameuser} ]`, event.threadID, event.messageID);
			return api.sendMessage(`Chuẩn bị kick thành viên [ ${nameuser} ]  !`,event.threadID, event.messageID);
		}
        case "6.1": {
			const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
			const warnlistv2 = `[ [ Lần 6 ] ] Người cảnh cáo : {name} ] ${content.join(" ")}`
			.replace(/\{name}/g, nameUser)
			getData.push(warnlistv2);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			var mention = Object.keys(event.mentions);
			let data1 = await api.getUserInfo(mention);	
			let nameuser= data1[mention].name;
			api.sendMessage(`[ ⚜️ ] Còn 0 lần cảnh cáo cho => [ ${nameuser} ] , Chuẩn Bị kick`, event.threadID, event.messageID);
            var mention = Object.keys(event.mentions);
	return api.getThreadInfo(event.threadID, (err, info) => {
		if (err) return api.sendMessage("Đã có lỗi xảy ra!",event.threadID);
		if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('Cần quyền quản trị viên nhóm\nVui lòng thêm và thử lại!', event.threadID, event.messageID);
		if(!mention[0]) return api.sendMessage("Bạn phải tag người cần kick [ 𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦 ]",event.threadID);
		if (info.adminIDs.some(item => item.id == event.senderID)) {
			for (let o in mention) {
				setTimeout(() => {
					api.removeUserFromGroup(mention[o],event.threadID) 
				},3000)
			}
		}
	})
	
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
			api.sendMessage("Uhmm T Biết m tạo ra t nhưng m có cần ngu đến v ko ? :)",event.threadID, event.messageID);
		break;
	}
}