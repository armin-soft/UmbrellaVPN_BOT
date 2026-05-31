/*CMD
  command: منقضی اشتراک دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
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

Bot.setProperty("User_ID_Subscription_Expired", English_Message);

let User_ID_Subscription_Expired = Bot.getProperty("User_ID_Subscription_Expired");
let Full_Name = Bot.getProperty("Full_Name" + User_ID_Subscription_Expired);
let Phone_Number = Bot.getProperty("Phone_Number" + User_ID_Subscription_Expired);
let Subscription = Bot.getProperty("Subscription" + User_ID_Subscription_Expired);
let Duration = Bot.getProperty("Duration" + User_ID_Subscription_Expired);

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text:"*✅مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *اشتراک کاربر  " + Full_Name + " منقضی گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "پیکربندی سرور"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
chat_id: User_ID_Subscription_Expired,
text:"*⏳* [" + Full_Name + "](tg://user?id=" + User_ID_Subscription_Expired + ") *اشتراک " + Subscription + " شما به اتمام رسید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته‌:اتصال شما از سرور ساعت ۲۳:۵۹ شب قطع می گردد.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup:{inline_keyboard:[
[{text: "💎تمدید اشتراک", callback_data: "اشتراک من"}],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}]
]}
});

let E164_Phone_Number = Phone_Number;

if (E164_Phone_Number.startsWith("09")) {
E164_Phone_Number = "+98" + E164_Phone_Number.substring(1);
}

HTTP.post({
url: "https://api2.ippanel.com/api/v1/sms/send/panel/single",
success: "منقضی اشتراک سوم",
headers: {
"Content-Type": "application/json",
"Authorization": "Zh0CWhURvAImMGnO3B0FryQloS5U5ENZd3TP96oOJvE="
},
body: {
"sending_type": "webservice",
"from_number": "+983000505",
"message": Full_Name + " اشتراک " + Subscription + " شما به اتمام رسید.\nنکته: اتصال شما از سرور ساعت ۲۳:۵۹ شب قطع می گردد.\n\nسرور آمبرلا",
"params": {
"recipients": [E164_Phone_Number]
}
}
});

Bot.setProperty("Package_Duration" + User_ID_Subscription_Expired, "", false);
Bot.setProperty("Current_Usage" + User_ID_Subscription_Expired, "", false); 
Bot.setProperty("Usage_Limit" + User_ID_Subscription_Expired, "", false);
Bot.setProperty("Package_Start_Date" + User_ID_Subscription_Expired, "", false);
Bot.setProperty("Last_Connection_Time" + User_ID_Subscription_Expired, "", false);
Bot.setProperty("Total_Usage" + User_ID_Subscription_Expired, "", false);
Bot.setProperty("Used_Usage" + User_ID_Subscription_Expired, "", false);
Bot.setProperty("Remaining_Usage" + User_ID_Subscription_Expired, "", false);
Bot.setProperty("Percent_Usage" + User_ID_Subscription_Expired, "", false);
Bot.setProperty("Remaining_Days" + User_ID_Subscription_Expired, "", false);
Bot.setProperty("Subscription" + User_ID_Subscription_Expired, "", false);
Bot.setProperty("Expiration_Date" + User_ID_Subscription_Expired, "", false);
Bot.setProperty("Duration" + User_ID_Subscription_Expired, "", false);
Bot.setProperty("ED25519_Private_Key" + User_ID_Subscription_Expired, "", false);
Bot.setProperty("ED25519_Public_Key" + User_ID_Subscription_Expired, "", false);
Bot.setProperty("WireGuard_Private_Key" + User_ID_Subscription_Expired, "", false);
Bot.setProperty("WireGuard_Public_Key" + User_ID_Subscription_Expired, "", false);