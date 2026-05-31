/*CMD
  command: فعالسازی کلاینت دوم
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

let Admin_Full_Name = User.getProperty("Admin_Full_Name");
let Admin_User_ID = Bot.getProperty("Admin_User_ID");
let Date_Time = Bot.getProperty("Date_Time");

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

Bot.setProperty("User_ID_Client_Activation", English_Message);

let User_ID_Client_Activation = Bot.getProperty("User_ID_Client_Activation");
let Full_Name = Bot.getProperty("Full_Name" + User_ID_Client_Activation);
let Phone_Number = Bot.getProperty("Phone_Number" + User_ID_Client_Activation);

Bot.setProperty("Client_Status" + User_ID_Client_Activation, "✅فعال");

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text:"*✅مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *کلاینت کاربر  " + Full_Name + " در سرور فعال گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "پیکربندی سرور"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});

Api.sendMessage({
chat_id: User_ID_Client_Activation,
text:"*✅* [" + Full_Name + "](tg://user?id=" + User_ID_Client_Activation + ") *کلاینت شما در سرور فعال گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:قوانین مانیتورینگ سرور را رعایت فرمایید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "💎اشتراک من", callback_data: "اشتراک من"}],
]}
});

HTTP.post({
url: "https://api2.ippanel.com/api/v1/sms/send/panel/single",
headers: {
'Content-Type': 'application/json',
'apikey': 'Zh0CWhURvAImMGnO3B0FryQloS5U5ENZd3TP96oOJvE='
},
body: {
"recipient": [Phone_Number],
"sender": "3000505",
"message": Full_Name + " کلاینت شما در سرور فعال گردید.\nنکته:قوانین مانیتورینگ سرور را رعایت فرمایید.\n\nسرور آمبرلا",
"description": {
"summary": "description",
"count_recipient": "1"
}
}
});