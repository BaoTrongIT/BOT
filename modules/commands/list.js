module.exports.config = {
  name: "list",

  version: "1.0.0",

  credits: "𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦",

  hasPermssion: 0,

  description: "List thread bot đã tham gia\nCredits: Ntkhang",

  commandCategory: "system",

  usages: "listthread",

  cooldowns: 5
};

module.exports.run = async function({ api, event, client }) {

    var inbox = await api.getThreadList(300, null, ["INBOX"]);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);

var abc = ""; let i = 0;
  for (var groupInfo of list) {
    abc += `${i+=1}. ${groupInfo.name}\n[ ❖ ] ❖ = ❖ = ❖ [𝐋𝐚𝐳𝐢𝐜 𝐓𝐞𝐚𝐦] ❖ = ❖ = ❖ [ ❖ ]\n`;
  }
  api.sendMessage(abc, event.threadID);
};