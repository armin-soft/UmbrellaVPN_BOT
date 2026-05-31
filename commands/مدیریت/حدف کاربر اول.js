/*CMD
  command: حذف کاربر اول
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌آیدی عددی کاربر مورد نظر را وارد کنید.

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
text:"🔄حذف کاربر در حال بار گذاری می باشد...",
show_alert:false
})

Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text: "*🌹مدیریت گرامی* [" + Admin_Full_Name  + "](tg://user?id=" + Admin_User_ID + ") *به بخش حذف کاربر خوش آمدید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup:{inline_keyboard:[
[{text: "🔙بازگشت به منوی قبل", callback_data: "پیکربندی سرور"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});

Bot.runCommand("حذف کاربر دوم");