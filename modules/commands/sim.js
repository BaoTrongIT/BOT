/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
	name: "sim",
	version: "2.0.2",
	hasPermssion: 0,
	credits: "Kanzu",
	description: "Lấy thông tin về tình hình dịch bệnh COVID-19",
	commandCategory: "other",
	usages: "",
	cooldowns: 5,
    dependencies: ["axios"]
        
};

async function simsimi(a, b, c) {
    const d = require('axios'), g = (a) => encodeURIComponent(a);
    try {
        var { data: j } = await d({ url: `https://meewmeew.info/simsimi/api?ask=${g(a)}&apikey=MEWS2FuenU7b3lleWdxQHdvcmtpbmd0YWxsLmNvbQ`, method: "GET" });
        return { error: !1, data: j }
    } catch (p) {
        return { error: !0, data: {} }
    }
}
module.exports.onLoad = async function () {
    "undefined" == typeof global.procodermew && (global.procodermew = {}), "undefined" == typeof global.procodermew.simsimi && (global.procodermew.simsimi = new Map);
};
module.exports.event = async function ({ api: b, event: a }) {
    const { threadID: c, messageID: d, senderID: e, body: f } = a, g = (e) => b.sendMessage(e, c, d);
    if (global.procodermew.simsimi.has(c)) {
        if (e == b.getCurrentUserID() || "" == f || d == global.procodermew.simsimi.get(c)) return;
        var { data: h, error: i } = await simsimi(f, b, a);
        return !0 == i ? void 0 : !1 == h.success ? g(h.error) : g(h.msg)
    }
}
module.exports.run = async function ({ api: b, event: a, args: c }) {
    const { threadID: d, messageID: e } = a, f = (c) => b.sendMessage(c, d, e);
    if (0 == c.length) return f("[𝑳𝒂𝒛𝒊𝒄 𝑻𝒆𝒂𝒎] => Bạn Hãy Nhập Tin Nhắn ");
    switch (c[0]) {
        case "on":
            return global.procodermew.simsimi.has(d) ? f("[𝑳𝒂𝒛𝒊𝒄 𝑻𝒆𝒂𝒎] => Bạn Chưa Tắt Sim !") : (global.procodermew.simsimi.set(d, e), f("[𝑳𝒂𝒛𝒊𝒄 𝑻𝒆𝒂𝒎] => Đã Bật Sim Thành Công"));
        case "off":
            return global.procodermew.simsimi.has(d) ? (global.procodermew.simsimi.delete(d), f("[𝑳𝒂𝒛𝒊𝒄 𝑻𝒆𝒂𝒎] => Đã tắt sim Thành Công")) : f("[𝑳𝒂𝒛𝒊𝒄 𝑻𝒆𝒂𝒎] => Bạn chưa Bật Sim");
        default:
            var { data: g, error: h } = await simsimi(c.join(" "), b, a);
            return !0 == h ? void 0 : !1 == g.success ? f(g.error) : f("[𝑳𝒂𝒛𝒊𝒄 𝑻𝒆𝒂𝒎] => " + g.msg);
    }
};