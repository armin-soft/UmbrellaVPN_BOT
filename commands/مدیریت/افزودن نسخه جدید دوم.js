/*CMD
  command: افزودن نسخه جدید دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: *👌نسخه جدید ربات را وارد کنید.*
  keyboard: 
  aliases: 
  group: 
CMD*/

Api.sendChatAction({
chat_id: chat.chatid,
action: "typing"
});

Bot.setProperty("Robot_Version", message);
Bot.runCommand("افزودن نسخه جدید سوم");