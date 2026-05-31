/*CMD
  command: تنظیمات
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
let Robot_Status = Bot.getProperty("Robot_Status");

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄تنظیمات در حال بار گذاری می باشد...",
show_alert: false
});

Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text:"*🌹مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *به بخش تنظیمات خوش آمدید.\n➖➖➖➖➖➖➖➖➖➖\n🚦🤖وضعیت ربات:" + Robot_Status + "\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🤖🟢روشن کردن ربات", callback_data: "روشن کردن ربات"}, {text: "🤖🔴خاموش کردن ربات", callback_data: "خاموش کردن ربات"}],
[{text: "💳اعتبار حساب کاربری", callback_data: "اعتبار حساب کاربری"}],
[{text: "⚙️🗄️پیکربندی سرور", callback_data: "پیکربندی سرور"}],
[{text: "🚨جرایم", callback_data: "جرایم"}],
[{text: "📩ارسال پیامک", callback_data: "ارسال پیامک"}],
[{text: "🔄بروز رسانی", callback_data: "بروز رسانی"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});