/*CMD
  command: ارسال پیامک تکی سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: *👌متن پیامک را وارد کنید.*

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
let User_ID_Single_SMS = Bot.getProperty("User_ID_Single_SMS");
let Full_Name = Bot.getProperty("Full_Name" + User_ID_Single_SMS);

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "*✅مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *پیامک با موفقیت به کاربر " + Full_Name + " ارسال گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "ارسال پیامک"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});

Api.sendMessage({
chat_id: User_ID_Single_SMS,
text: "*📩* [" + Full_Name + "](tg://user?id=" + User_ID_Single_SMS + ") *لحظاتی پیش پیامک از سوی مدیریت دریافت گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n📨متن پیامک:" + message + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {
inline_keyboard: [
[{text: "🗣پاسخ پیامک", callback_data: "پشتیبانی ربات دوم"}],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}]
]}
});