/*CMD
  command: بروز رسانی
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
let Robot_Version = Bot.getProperty("Robot_Version");
let Robot_Changes = Bot.getProperty("Robot_Changes");

Api.answerCallbackQuery({
callback_query_id: request.id,
text:"🔄بروز رسانی در حال بار گذاری می باشد...",
show_alert: false
});

Bot.runCommand("تاریخ و زمان");

let Text = "*🌹مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *به بخش بروز رسانی خوش آمدید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n🔰تغیرات کنونی ربات بدین شرح است:*\n\n";
if (Robot_Changes == undefined) {
Text += "*⚠️تغییراتی جهت برای نمایش وجود ندارد\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*";
}

else {
Text += "*🔄نسخه کنونی:" + Robot_Version + "\n\n" + Robot_Changes + "*\n*➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*";
}

Api.editMessageText({
message_id: request.message.message_id,
text: Text,
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text:"➕افزودن نسخه جدید", callback_data:"افزودن نسخه جدید اول"}],
[{text:"🔙بازگشت به منوی قبل", callback_data:"تنظیمات"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});