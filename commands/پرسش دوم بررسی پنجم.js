/*CMD
  command: پرسش دوم بررسی پنجم
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

Bot.editMessage("*❌شماره موبایل وارد شده صحیح نمی باشد.\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:فرمت ارسالی باید یکی از اپراتور های (همراه اول،ایرانسل،رایتل،شاتل موبایل،سامان تل،تالیا) باشد.*", Edit);
Bot.runCommand("پرسش دوم بررسی اول");