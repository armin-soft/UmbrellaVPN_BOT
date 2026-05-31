/*CMD
  command: پرسش اول بررسی سوم
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

let Edit = User.getProperty("msgid");

Bot.editMessage("*✔️نام و نام خانوادگی وارد شده صحیح می باشد.*", Edit);
Bot.runCommand("پرسش دوم بررسی اول");