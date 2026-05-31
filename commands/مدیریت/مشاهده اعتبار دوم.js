/*CMD
  command: مشاهده اعتبار دوم
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
const Persian_Numbers = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
const English_Numbers = ["0","1","2","3","4","5","6","7","8","9"];
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
let View_Credit = English_Message.trim();

if (!/^\d+$/.test(View_Credit)) {
Bot.sendMessage("❌ شناسه کاربر معتبر نمی باشد.");
return;
}

let Money = Libs.ResourcesLib.anotherUserRes("Money",View_Credit);

let Full_Name = Bot.getProperty("Full_Name" + View_Credit) || "نا مشخص";

function Replace_Digits(Number) {
return String(Number).replace(/[0-9]/g, function(Digit) {
const Persian_Digits = [
"۰","۱","۲","۳","۴",
"۵","۶","۷","۸","۹"
];

return Persian_Digits[Digit];
});
}

function Format_Number(Number) {

if (!Number || Number <= 0) {
return "۰ تومان";
}

const Currencys = [
"تومان",
"هزار تومان",
"میلیون تومان",
"میلیارد تومان",
"بیلیون تومان",
"بیلیارد تومان",
"تریلیون تومان"
];

const Currency = Math.min(
Math.floor(Math.log10(Math.abs(Number)) / 3),
Currencys.length - 1
);

const Value = Currency === 0
? Number.toLocaleString()
: (Number / Math.pow(1000, Currency)).toFixed(2);

const Formatted_Number = Replace_Digits(
Value.replace(/,/g, "،")
);

return Formatted_Number + " " + Currencys[Currency];
}

Bot.runCommand("تاریخ و زمان");
Date_Time = Bot.getProperty("Date_Time");

Api.sendMessage({
text:"*✅مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *اعتبار حساب کاربر " + Full_Name + " بدین شرح است.\n\n🌏ارز کنونی کاربر:🇮🇷ایران - تومان\n💳اعتبار کنونی کاربر:" + Format_Number(Money.value()) + "\n➖➖➖➖➖➖➖➖➖➖\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode:"Markdown",
reply_markup:{inline_keyboard:[
[{text: "🔙بازگشت به منوی قبل", callback_data: "اعتبار حساب کاربری"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});