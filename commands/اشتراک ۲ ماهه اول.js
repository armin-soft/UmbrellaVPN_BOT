/*CMD
  command: اشتراک ۲ ماهه اول
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
let Client_ID = Bot.getProperty("Client_ID" + User_ID);

let User_Message = Full_Name === undefined ? "*🌹کاربر گرامی* [" + First_Name + "](tg://user?id=" + User_ID + ")" : "** [" + Full_Name + "](tg://user?id=" + User_ID + ")";

Bot.runCommand("تاریخ و زمان");
if (Robot_Status === "🔴خاموش") {
Api.editMessageText({
message_id: request.message.message_id,
text: User_Message + " *با عرض پوزش ربات در دسترس نمی باشد.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n⚠️علت:🤖🔴ربات جهت بروز رسانی خاموش می باشد\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📢👁مشاهده کانال اطلاع رسانی", url: Channel_Url}],
[{text: "🤖🔍بررسی دسترس بودن ربات", callback_data: "اشتراک ۲ ماهه اول"}]
]}
});
}

else {
let Money = Libs.ResourcesLib.userRes("Money");

function Format_Number(Number) {
const Currencys = ["تومان", "هزار تومان", "میلیون تومان", "میلیارد تومان", "بیلیون تومان", "بیلیارد تومان", "تریلیون تومان"];
const Currency = Math.abs(Number) < 1000 ? 0 : Math.floor(Math.log10(Math.abs(Number)) / 3);
const Formatted_Number = Replace_Digits(Number.toLocaleString().replace(/,/g, "،"));
return Formatted_Number + " " + Currencys[Currency];
}

function Replace_Digits(Number) {
return Number.replace(/[0-9]/g, function(Digit) {
const Persian_Digits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
return Persian_Digits[Digit];
});
}

let Amount = 1100000;
if (Money.value() < Amount) {
Api.editMessageText({
message_id: request.message.message_id,
text: User_Message + " *با عرض پوزش اعتبار حساب کاربری شما کافی نمی باشد.\n➖➖➖➖➖➖➖➖➖\n⚠️نکته:برای اشتراک ۲ ماهه به مبلغ ۱,۱۰۰,۰۰۰ تومان نیاز دارید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:" + Format_Number(Money.value()) + "*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "اشتراک من"}],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}]
]}
});
}

else {
if (request.data) {
let message_id = request.message.message_id;
let chat_id = request.message.chat.id;

Api.deleteMessage({
chat_id: chat_id,
message_id: message_id
});
}

Money.remove(Amount);
if (Client_ID == undefined) {
HTTP.post({
url: "https://user.umbrella-server.ir/gXKq7w9Gn0oEEbJa35nGkm/api/v2/admin/user/",
success: "اشتراک ۲ ماهه دوم",
body: {
name: Gender + " " + Full_Name,
usage_limit_GB: 999,
package_days: 60,
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

else {
Bot.runCommand("اشتراک ۲ ماهه سوم");
}
}
}