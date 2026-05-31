/*CMD
  command: اطلاع رسانی سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: *👌متن اطلاع رسانی را وارد کنید.*

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
let User_ID_Notices = Bot.getProperty("User_ID_Notices");
let Full_Name = Bot.getProperty("Full_Name" + User_ID_Notices);
let Phone_Number = Bot.getProperty("Phone_Number" + User_ID_Notices);

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text:"*✅مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *اطلاع رسانی با موفقیت به کاربر " + Full_Name + " ارسال گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "پیکربندی سرور"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});

Api.sendMessage({
chat_id: User_ID_Notices,
text:"*✅* [" + Full_Name + "](tg://user?id=" + User_ID_Notices + ") *یک اطلاع رسانی برای شما ارسال شده است.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n🔔اطلاع رسانی:" + message + "*",
parse_mode: "Markdown"
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
"message": Full_Name + " " + message + "\n\nسرور آمبرلا",
"description": {
"summary": "description",
"count_recipient": "1"
}
}
});