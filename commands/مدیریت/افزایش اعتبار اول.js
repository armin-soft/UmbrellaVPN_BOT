/*CMD
  command: افزایش اعتبار اول
  help: 
  need_reply: false
  auto_retry_time: 
  folder: مدیریت

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.sendChatAction({
chat_id: chat.chatid,
action: "typing"
});

let Admin_Full_Name = User.getProperty("Admin_Full_Name");
let Admin_User_ID = Bot.getProperty("Admin_User_ID");
let Date_Time = Bot.getProperty("Date_Time");

Api.answerCallbackQuery({
callback_query_id:request.id,
text:"🔄افزایش اعتبار در حال بار گذاری می باشد...",
show_alert:false
})

Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id:request.message.message_id,
text:"*🌹مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *به بخش افزایش اعتبار خوش آمدید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode:"Markdown",
reply_markup:{inline_keyboard:[
[{text: "🔙بازگشت به منوی قبل", callback_data: "اعتبار حساب کاربری"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});

Bot.runCommand("افزایش اعتبار دوم");