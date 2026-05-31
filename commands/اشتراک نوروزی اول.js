/*CMD
  command: اشتراک نوروزی اول
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

Api.sendChatAction({
chat_id: chat.chatid,
action: "typing"
});

let First_Name = user.first_name;
let User_ID = user.telegramid;
let Date_Time = Bot.getProperty("Date_Time");
let Channel_Url = Bot.getProperty("Channel_Url");
let Robot_Status = Bot.getProperty("Robot_Status");
let Full_Name = Bot.getProperty("Full_Name" + User_ID);
let Phone_Number = Bot.getProperty("Phone_Number" + User_ID);

let User_Message = Full_Name === undefined ? "*🌹کاربر گرامی* [" + First_Name + "](tg://user?id=" + User_ID + ")" : "** [" + Full_Name + "](tg://user?id=" + User_ID + ")";

Bot.runCommand("تاریخ و زمان");
if (Robot_Status === "🔴خاموش") {
Api.editMessageText({
message_id: request.message.message_id,
text: User_Message + " *با عرض پوزش ربات در دسترس نمی‌باشد.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n⚠️علت: 🤖🔴ربات جهت بروزرسانی خاموش می‌باشد\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {
inline_keyboard: [
[{ text: "📢👁مشاهده کانال اطلاع رسانی", url: Channel_Url }],
[{ text: "🤖🔍بررسی دسترس بودن ربات", callback_data: "اشتراک نوروزی اول" }]
]
}
});
}

else {
if (!canRun()) return;
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄اشتراک نوروزی در حال بارگذاری می‌باشد...",
show_alert: false
});

Bot.setProperty("Subscription_Free" + User_ID, true, "boolean");

if (request.data) {
Api.deleteMessage({
chat_id: request.message.chat.id,
message_id: request.message.message_id
});
}

HTTP.post({
url: "https://user.umbrella-server.ir/gXKq7w9Gn0oEEbJa35nGkm/api/v2/admin/user/",
success: "اشتراک نوروزی دوم",
body: {
name: Gender + " " + Full_Name,
usage_limit_GB: 5,
package_days: 13,
comment: Phone_Number,
telegram_id: User_ID
},
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json',
'Hiddify-API-Key': 'b8de3a72-42d0-444f-af84-5d9c5d2dedb0'
}
});
}

function canRun() {
let Subscription_Free = Bot.getProperty("Subscription_Free" + User_ID);

if (Subscription_Free) {
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "❌کاربر گرامی " + First_Name + " با عرض پوزش شما قبلاً اشتراک نوروزی را دریافت کرده‌اید.",
show_alert: true
});
return false;
}

return true;
}