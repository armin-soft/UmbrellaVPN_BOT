/*CMD
  command: پرسش دوم بررسی دوم
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Api.sendChatAction({
chat_id: chat.chatid,
action: "typing"
});

let msg_id = options.result.message_id;
User.setProperty("msgid", msg_id, "integer");

Bot.run({
command: "پرسش سوم بررسی سوم"
});