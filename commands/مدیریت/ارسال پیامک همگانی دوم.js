/*CMD
  command: ارسال پیامک همگانی دوم
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

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "*✅مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *پیامک با موفقیت به همه کاربران ارسال گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data:"ارسال پیامک"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data:"مدیریت"}]
]}
});

Api.sendMessage({
text: "*📩کاربر گرامی لحظاتی پیش پیامک از سوی مدیریت دریافت گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n📨متن پیامک:" + message + "*",
parse_mode: "Markdown",
});