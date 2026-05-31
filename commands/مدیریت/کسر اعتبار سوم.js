/*CMD
  command: کسر اعتبار سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: *👌مبلغ اعتبار را وارد کنید.*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.sendChatAction({
chat_id: chat.chatid,
action: "typing"
});

let Admin_FullName = User.getProperty("Admin_FullName");
let Admin_User_ID = Bot.getProperty("Admin_User_ID");
let Date_Time = Bot.getProperty("Date_Time");
let Credit_Deduction_User_ID = Bot.getProperty("Credit_Deduction_User_ID");

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
let Credit_Deduction_Money = parseFloat(English_Message);

if (isNaN(Credit_Deduction_Money) || Credit_Deduction_Money <= 0) {
Bot.sendMessage("❌ مبلغ وارد شده معتبر نمی باشد.");
return;
}

let Money = Libs.ResourcesLib.anotherUserRes("Money",Credit_Deduction_User_ID);

let FullName = Bot.getProperty("FullName" + Credit_Deduction_User_ID);

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

function Send_Admin_Message(text) {
Api.sendMessage({
text: text,
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "اعتبار حساب کاربری"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});
}

if (Money.value() < Credit_Deduction_Money) {
Send_Admin_Message("*❌مدیریت گرامی* [" + Admin_FullName + "](tg://user?id=" + Admin_User_ID + ") *اعتبار حساب کاربری کاربر " + FullName + " برای کسر این مبلغ کافی نمی باشد.\n\n🌏ارز کنونی کاربر:🇮🇷ایران - تومان\n💳اعتبار کنونی کاربر:" + Format_Number(Money.value()) + "\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*");
}

else {
Money.remove(Credit_Deduction_Money);
Send_Admin_Message("*✅مدیریت گرامی* [" + Admin_FullName + "](tg://user?id=" + Admin_User_ID + ") *مبلغ " + Format_Number(Credit_Deduction_Money) + " اعتبار حساب کاربری کاربر " + FullName + " با موفقیت کسر گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*");

Api.sendMessage({
chat_id: Credit_Deduction_User_ID,
text: "* [" + FullName + "](tg://user?id=" + Credit_Deduction_User_ID + ") *لحظاتی پیش مبلغ " + Format_Number(Credit_Deduction_Money) + " اعتبار حساب کاربری شما توسط مدیریت کسر گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی: " + Format_Number(Money.value()) + "*",
parse_mode: "Markdown"
});
}