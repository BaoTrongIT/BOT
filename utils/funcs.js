module.exports = function({ api, global, client }) {
	//will do something in here ¯\_(ツ)_/¯ 

	function throwError(command, threadID, messageID) {
		let threadSetting = client.threadSetting.get(parseInt(threadID)) || {};
		return api.sendMessage(`[𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦] => Thông Báo : Lệnh hiện tại của bạn không đúng cú pháp !\nHãy liên Hệ\n [ ❖ ] Nguyễn Thái Hảo\n Facebook.com/Hotaru.Kanzu !`, threadID, messageID);
	}

	function cleanAnilistHTML(text) {
		text = text
			.replace('<br>', '\n')
			.replace(/<\/?(i|em)>/g, '*')
			.replace(/<\/?b>/g, '**')
			.replace(/~!|!~/g, '||')
			.replace("&amp;", "&")
			.replace("&lt;", "<")
			.replace("&gt;", ">")
			.replace("&quot;", '"')
			.replace("&#039;", "'");
		return text;
	}

	return {
		throwError,
		cleanAnilistHTML
	};
}
//Useless