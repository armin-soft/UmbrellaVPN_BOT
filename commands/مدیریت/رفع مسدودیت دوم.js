/*CMD
  command: رفع مسدودیت دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: *👌آیدی عددی کاربر مورد نظر را وارد کنید.*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.sendChatAction({
chat_id: chat.chatid,
action: "typing"
});

function Convert_Persian_To_English_Number(Persian_Number) {
const Persian_Numbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const English_Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let English_Number = "";

for (let i = 0; i < Persian_Number.length; i++) {
const Index = Persian_Numbers.indexOf(Persian_Number[i]);
if (Index !== -1) {
English_Number += English_Numbers[Index];
}

else {
English_Number += Persian_Number[i];
}
}

return English_Number;
}

const English_Message = Convert_Persian_To_English_Number(message);

let Admin_Full_Name = User.getProperty("Admin_Full_Name");
let Admin_User_ID = Bot.getProperty("Admin_User_ID");
let Date_Time = Bot.getProperty("Date_Time");
let Full_Name = Bot.getProperty("Full_Name" + English_Message);
let Phone_Number = Bot.getProperty("Phone_Number" + English_Message);
var Chat_ID = Bot.getProperty("Chat_ID" + English_Message);

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "*✅مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *کاربر  " + Full_Name + " با موفقیت رفع مسدود گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "جرایم"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});
 
Bot.unblockChat(Chat_ID);
Api.sendMessage({
chat_id: English_Message,
text: "*✅* [" + Full_Name + "](tg://user?id=" + English_Message + ") *شما رفع مسدود شدید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:اتصال شما به سرور آزاد شده است*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📞🧑‍💻ارتباط با پشتیبانی (آرمین سافت)", url: "https://t.me/ARMIN_SOFT"}],
]}
});