/*CMD
  command: حذف کاربر سوم
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
let User_ID_Delete_User = Bot.getProperty("User_ID_Delete_User");
let Full_Name = Bot.getProperty("Full_Name" + User_ID_Delete_User);
let Client_ID = Bot.getProperty("Client_ID" + User_ID_Delete_User);

try {
var Json = JSON.parse(content);
if (Json.status == 200) {
Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "*🌹مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *به بخش حذف کاربر خوش آمدید.\n\n" + Date_Time + "\n\n👤کاربر ( " + Full_Name + " با شناسه کلاینت " + Client_ID + ") با موفقیت از سرور حذف گردید.\n➖➖➖➖➖➖➖➖➖➖\n👌 جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {
inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "پیکربندی سرور" }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت" }]
]
}
});
}

else {
Api.sendMessage({
text: "*🌹مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *به بخش حذف کاربر خوش آمدید.\n\n" + Date_Time + "\n\n❌حذف کاربر از سرور انجام نگردید.\n⚠️علت:ممکن است از قبل حذف شده باشد\n➖➖➖➖➖➖➖➖➖➖\n👌 جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {
inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "پیکربندی سرور" }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت" }]
]
}
});
}

Bot.setProperty("Full_Name" + User_ID_Delete_User, "", false); 
Bot.setProperty("Operator" + User_ID_Delete_User, "", false); 
Bot.setProperty("Phone_Number" + User_ID_Delete_User, "", false); 
Bot.setProperty("Client_ID" + User_ID_Delete_User, "", false); 
Bot.setProperty("Package_Duration" + User_ID_Delete_User, "", false);
Bot.setProperty("Current_Usage" + User_ID_Delete_User, "", false); 
Bot.setProperty("Usage_Limit" + User_ID_Delete_User, "", false);
Bot.setProperty("Package_Start_Date" + User_ID_Delete_User, "", false);
Bot.setProperty("Last_Connection_Time" + User_ID_Delete_User, "", false);
Bot.setProperty("Total_Usage" + User_ID_Delete_User, "", false);
Bot.setProperty("Used_Usage" + User_ID_Delete_User, "", false);
Bot.setProperty("Remaining_Usage" + User_ID_Delete_User, "", false);
Bot.setProperty("Percent_Usage" + User_ID_Delete_User, "", false);
Bot.setProperty("Remaining_Days" + User_ID_Delete_User, "", false);
Bot.setProperty("Subscription" + User_ID_Delete_User, "", false);
Bot.setProperty("Expiration_Date" + User_ID_Delete_User, "", false);
Bot.setProperty("Duration" + User_ID_Delete_User, "", false);
Bot.setProperty("ED25519_Private_Key" + User_ID_Delete_User, "", false);
Bot.setProperty("ED25519_Public_Key" + User_ID_Delete_User, "", false);
Bot.setProperty("WireGuard_Private_Key" + User_ID_Delete_User, "", false);
Bot.setProperty("WireGuard_Public_Key" + User_ID_Delete_User, "", false);
}

catch (error) {
Api.sendMessage({
text: "*🌹مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *به بخش بروز حذف کاربر خوش آمدید.\n\n" + Date_Time + "⚠️خطا:\n\n" + error.message + ".\n➖➖➖➖➖➖➖➖➖➖\n👌 جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {
inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "پیکربندی سرور" }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت" }]
]
}
});
}