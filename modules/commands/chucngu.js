const fs = require("fs");
module.exports.config = {
	name: "ngủ ngon",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "trunguwu", 
	description: "noprefix",
	commandCategory: "Noprefix",
	usages: "Ngu",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ngủ")==0 || (event.body.indexOf("Ngủ đi")==0 || (event.body.indexOf("Ngủ nha")==0 || (event.body.indexOf("Chúc ngủ ngon")==0)))) {
		var msg = {
				body: "Chúc cậu ngủ ngon",
				attachment: fs.createReadStream(__dirname + `/noprefix/ngungon.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }