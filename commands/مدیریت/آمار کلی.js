/*CMD
  command: آمار کلی
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

Api.sendChatAction({
chat_id: chat.chatid,
action: "typing"
});

let Admin_Full_Name = User.getProperty("Admin_Full_Name");
let Admin_User_ID = Bot.getProperty("Admin_User_ID");
let Date_Time = Bot.getProperty("Date_Time");
let Statistics_Robot = Bot.getProperty("Total_User", "0") * 1;
let Photo = "https://quickchart.io/chart?c=%7B%0Atype%3A%20%27bar%27%2C%0Adata%3A%20%7B%0Alabels%3A%20%5B%27@UmbrellaVPN_BOT%27%5D%2C%0Adatasets%3A%20%5B%0A%7B%0Alabel%3A%20%27Total%20User%27%2C%0Adata%3A%20%5B" + Statistics_Robot + "%5D%2C%0AbackgroundColor%3A%20%27%231C8500%27%2C%0AborderColor%3A%20%27%23000000%27%2C%0AborderWidth%3A%202%2C%0A%7D%2C%0A%5D%2C%0A%7D%2C%0A%7D";

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄آمار کلی در حال بار گذاری می باشد...",
show_alert: false
});

function Replace_Digits(Number) {
const Persian_Digits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
return String(Number).replace(/[0-9]/g, function(Digit) {
return Persian_Digits[Digit];
});
}

if (request.data) {
let message_id = request.message.message_id;
let chat_id = request.message.chat.id;

Api.deleteMessage({
chat_id: chat_id,
message_id: message_id
});
}

Api.sendPhoto({
photo: Photo,
caption: "*🌹مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *به بخش آمار کلی خوش آمدید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n🔰آمار کلی بدین شرح است:\n\n👥تعداد کل:" + Replace_Digits(Statistics_Robot) + " نفر*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});