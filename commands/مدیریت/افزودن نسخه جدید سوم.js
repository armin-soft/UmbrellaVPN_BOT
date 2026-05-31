/*CMD
  command: افزودن نسخه جدید سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: *👌تغیرات جدید ربات را وارد کنید.*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.sendChatAction({
chat_id: chat.chatid,
action: "typing"
});

Bot.setProperty("Robot_Changes", message);

let Admin_Full_Name = User.getProperty("Admin_Full_Name");
let Admin_User_ID = Bot.getProperty("Admin_User_ID");
let Date_Time = Bot.getProperty("Date_Time");
let Robot_Version = Bot.getProperty("Robot_Version");
let Robot_Changes = Bot.getProperty("Robot_Changes");

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "*✅مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *ربات با موفقیت به نسخه جدید بروز رسانی گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "بروز رسانی"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});

let Message_Length = "*✅سلام کاربرای گرامی ربات با موفقیت بروز رسانی گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات بروز رسانی جدید بدین شرح است:\n\n🔄نسخه جدید ربات:" + Robot_Version + "\n\n" + Robot_Changes + "*";

if (Message_Length.length <= 1024) {
Api.sendPhoto({
chat_id: -1001833514833,
photo: "https://i.ibb.co/cXtDxdFX/bfe076a14421.jpg",
caption: Message_Length,
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "👈🤖ورود به ربات (فیلترشکن آمبرلا)🤖👉", url: "https://t.me/UmbrellaVPN_BOT"}],
[{text: "🧑‍💻ارتباط با توسعه دهنده (آرمین سافت)♥️", url: "https://t.me/ARMIN_SOFT"}]
]}
});
}

else if (Message_Length.length <= 4096) {
Api.sendMessage({
chat_id: -1001833514833,
text: Message_Length,
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "👈🤖ورود به ربات (فیلترشکن آمبرلا)🤖👉", url: "https://t.me/UmbrellaVPN_BOT"}],
[{text: "🧑‍💻ارتباط با توسعه دهنده (آرمین سافت)♥️", url: "https://t.me/ARMIN_SOFT"}]
]}
});
}

else {
let messages = [];
for (let i = 0; i < Message_Length.length; i += 4096) {
messages.push(Message_Length.substring(i, i + 4096));
}

for (let message of messages) {
Api.sendMessage({
chat_id: -1001833514833,
text: message,
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "👈🤖ورود به ربات (فیلترشکن آمبرلا)🤖👉", url: "https://t.me/UmbrellaVPN_BOT"}],
[{text: "🧑‍💻ارتباط با توسعه دهنده (آرمین سافت)♥️", url: "https://t.me/ARMIN_SOFT"}]
]}
});
}
}