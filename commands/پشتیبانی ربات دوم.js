/*CMD
  command: پشتیبانی ربات دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
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

Bot.setProperty("User_ID", user.telegramid);

var User_ID = Bot.getProperty("User_ID");
let First_Name = user.first_name;
let Date_Time = Bot.getProperty("Date_Time");
let Admin_User_ID = Bot.getProperty("Admin_User_ID");
let Full_Name = Bot.getProperty("Full_Name" + User_ID);

let User_Message = Full_Name === undefined ? "*🌹کاربر گرامی* [" + First_Name + "](tg://user?id=" + User_ID + ")" : "** [" + Full_Name + "](tg://user?id=" + User_ID + ")";

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: User_Message + " *تیکت پشتیبانی شما با موفقیت در سیستم ثبت و بررسی خواهد شد.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "پشتیبانی آنلاین"}],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}]
]}
});

if (request.photo && request.photo[0]) {
let Caption = "*📬مدیریت گرامی لحظاتی پیش پیامک جدید دریافت گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👤فرستنده:" + Full_Name + "\n📜متن پیامک:";

if (request.Caption == null) {
Caption += "ندارد";
}

else {
Caption += message;
}

Caption += "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*";

Api.sendPhoto({
chat_id: Admin_User_ID,
photo: request.photo[0].file_id,
caption: Caption,
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "👁👤مشاهده کاربر (" + First_Name + ")", url: "tg://user?id=" + User_ID}],
[{text: "🗣پاسخ پیامک", callback_data: 'پاسخ پیامک'}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: 'مدیریت'}]
]}
});
}

else {
Api.sendMessage({
chat_id: Admin_User_ID,
text: "*📬مدیریت گرامی لحظاتی پیش پیامک جدید دریافت گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👤فرستنده: " + Full_Name + "\n📜متن پیامک:" + message + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "👁👤مشاهده کاربر (" + First_Name + ")", url: "tg://user?id=" + User_ID}],
[{text: "🗣پاسخ پیامک", callback_data: 'پاسخ پیامک'}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: 'مدیریت'}]
]}
});
}