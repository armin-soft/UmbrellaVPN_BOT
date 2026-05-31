/*CMD
  command: بروز رسانی میزان استفاده دوم
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

let Admin_Full_Name = User.getProperty("Admin_Full_Name");
let Admin_User_ID = Bot.getProperty("Admin_User_ID");
let Date_Time = Bot.getProperty("Date_Time");

try {
var Json = JSON.parse(content);
if (Json.status == "success") {
Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "*🌹مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *به بخش میزان استفاده کاربران خوش آمدید.\n\n" + Date_Time + "\n\n✅بروز رسانی میزان استفاده کاربران از سرور با موفقیت انجام شد.\n➖➖➖➖➖➖➖➖➖➖\n👌 جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard:[
[{text: "🔙بازگشت به منوی قبل", callback_data: "پیکربندی سرور"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});
}

else {
 Api.sendMessage({
text: "*🌹مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *به بخش میزان استفاده کاربران خوش آمدید.\n\n" + Date_Time + "\n\n❌بروز رسانی میزان استفاده کاربران از سرور انجام نگردید.\n➖➖➖➖➖➖➖➖➖➖\n👌 جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard:[
[{text: "🔙بازگشت به منوی قبل", callback_data: "پیکربندی سرور"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});
}
}

catch (error) {
Api.sendMessage({
text: "*🌹مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *به بخش میزان استفاده کاربران خوش آمدید.\n\n" + Date_Time + "⚠️خطا:\n\n" + error.message + ".\n➖➖➖➖➖➖➖➖➖➖\n👌 جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {
inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "پیکربندی سرور" }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت" }]
]
}
});
}