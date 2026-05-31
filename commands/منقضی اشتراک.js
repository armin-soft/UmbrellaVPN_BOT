/*CMD
  command: منقضی اشتراک
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let First_Name = user.first_name;
let User_ID = user.telegramid;
let Date_Time = Bot.getProperty("Date_Time");
let Full_Name = Bot.getProperty("Full_Name" + User_ID);
let Phone_Number = Bot.getProperty("Phone_Number" + User_ID);
let Subscription = Bot.getProperty("Subscription" + User_ID);
let Duration = Bot.getProperty("Duration" + User_ID);

let User_Message = Full_Name === undefined ? "*🌹کاربر گرامی* [" + First_Name + "](tg://user?id=" + User_ID + ")" : "** [" + Full_Name + "](tg://user?id=" + User_ID + ")";

if (Subscription == undefined) {
}

else {
Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: User_Message + " *اشتراک " + Subscription + " شما به اتمام رسید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته‌:اتصال شما از سرور ساعت ۲۳:۵۹ شب قطع می گردد.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup:{inline_keyboard:[
[{text: "💎تمدید اشتراک", callback_data: "اشتراک من"}],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}]
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
"message": Gender + " " + Full_Name + " اشتراک " + Subscription + " شما به اتمام رسید.\nنکته:اتصال شما از سرور ساعت ۲۳:۵۹ شب قطع می گردد.\n\nسرور آمبرلا",
"description": {
"summary": "description",
"count_recipient": "1"
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
}