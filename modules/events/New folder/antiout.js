/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
    name: "antiout",
    eventType: ["log:unsubscribe"],
    version: "1.0.1",
    credits: "ProCoderMew",
    description: "Listen events",
    dependencies: ["path"]
};

module.exports.run = async ({ api, event, Users }) => {
    const { resolve } = require("path");
    const path = resolve(__dirname, '../commands', 'cache', 'meewmeew.json');
    const { antiout } = require(path);
    const { logMessageData, author, threadID } = event;
    const id = logMessageData.leftParticipantFbId;
    if (id == api.getCurrentUserID()) return;
    if (author == id) {
        const name = await Users.getNameUser(id) || "Người dùng Facebook";
        if (antiout.hasOwnProperty(threadID) && antiout[threadID] == true) {
            try {
                await this.addUser({ id, name, api, event });
            }
            catch {
                return api.sendMessage(`Add được hay không nhờ nhân phẩm 😎🤦‍♂️`, threadID);
            }
        }
    }
}

module.exports.addUser = async ({ id, name, api, event }) => {
    const join = require("./join").run;
    const form = {
        type: 'event',
        threadID: event.threadID,
        logMessageType: 'log:subscribe',
        author: api.getCurrentUserID(),
        logMessageData: { addedParticipants: [{ userFbId: id, fullName: name }] }
    };

    await api.addUserToGroup(id, event.threadID);
    await join({ api, event: form });
}