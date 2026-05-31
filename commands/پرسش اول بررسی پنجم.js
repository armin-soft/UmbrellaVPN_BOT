/*CMD
  command: پرسش اول بررسی پنجم
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

Bot.editMessage("*❌نام و نام خانوادگی وارد شده صحیح نمی باشد.\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:فرمت ارسالی باید حروف فارسی و حداقل دو کلمه باشد.*", Edit);
Bot.runCommand("پرسش اول بررسی اول");