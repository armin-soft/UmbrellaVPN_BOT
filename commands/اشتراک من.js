/*CMD
  command: اشتراک من
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
let Subscription = Bot.getProperty("Subscription" + User_ID);
let WireGuard_Public_Key = Bot.getProperty("WireGuard_Public_Key" + User_ID);
let Money = Libs.ResourcesLib.userRes("Money");

let User_Message = Full_Name === undefined ? "*🌹کاربر گرامی* [" + First_Name + "](tg://user?id=" + User_ID + ")" : "** [" + Full_Name + "](tg://user?id=" + User_ID + ")";

if(request.data){
let message_id = request.message.message_id
let chat_id = request.message.chat.id

Api.deleteMessage({
chat_id:chat_id,
message_id:message_id
})
}

Bot.runCommand("تاریخ و زمان");
if (Robot_Status === "🔴خاموش") {
Api.sendMessage({
text: User_Message + " *با عرض پوزش ربات در دسترس نمی باشد.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n⚠️علت:🤖🔴ربات جهت بروز رسانی خاموش می باشد\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📢👁مشاهده کانال اطلاع رسانی", url: Channel_Url}],
[{text: "🤖🔍بررسی دسترس بودن ربات", callback_data: "اشتراک من"}]
]}
});
}

else {
Api.answerCallbackQuery({
callback_query_id:request.id,
text:"🔄اشتراک من در حال بار گذاری می باشد...",
show_alert:false
})

if (Phone_Number == undefined) {
Api.sendMessage({
text: User_Message + " *شما بدلیل عدم ثبت اطلاعات پروفایل کاربری مجاز به دریافت اشتراک نمی باشید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: { inline_keyboard: [
[{text: "📝👤ثبت اطلاعات پروفایل کاربری", callback_data: "ویرایش و ثبت پروفایل"}],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}]
]}
});
}

else {
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

if (Subscription == undefined) {
Api.sendMessage({
text: User_Message + " *به بخش اشتراک من خوش آمدید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n🌏ارز کنونی:🇮🇷ایران - تومان\n💳اعتبار کنونی:" + Format_Number(Money.value()) + "\n➖➖➖➖➖➖➖➖➖➖\n💎وضعیت اشتراک:❌ندارید\n\n⚠️نکته اول:سیستم هر ۵ دقیقه وضعیت اتصال کلاینت را بررسی می کند.\n⚠️نکته دوم:همه اشتراک ها ۱ کاربره و حجم نامحدود می باشد.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard:[
//[{text: "🎁اشتراک رایگان نوروز ۱۴۰۶ (۱۳ روزه با حجم نا محدود)", callback_data:"اشتراک نوروزی اول"}],
[{text: "🎁🪅اشتراک رایگان ۱ روزه (۱ گیگابایت حجم)", callback_data:"اشتراک رایگان اول"}],
[{text: "💎اشتراک ۱ ماهه = 💰(۵۵۰,۰۰۰ تومان)", callback_data:"اشتراک ۱ ماهه اول"}],
[{text: "💎اشتراک ۲ ماهه = 💰(۱,۱۰۰,۰۰۰ تومان)", callback_data:"اشتراک ۲ ماهه اول"}],
[{text: "💎اشتراک ۳ ماهه = 💰(۱,۶۵۰,۰۰۰ تومان)", callback_data:"اشتراک ۳ ماهه اول"}],
[{text: "💎اشتراک ۶ ماهه = 💰(۳,۳۰۰,۰۰۰ تومان)", callback_data:"اشتراک ۶ ماهه اول"}],
[{text: "💎اشتراک ۱۲ ماهه = 💰(۶,۶۰۰,۰۰۰ تومان)", callback_data:"اشتراک ۱۲ ماهه اول"}],
[{text: "🔄💳بروز رسانی اعتبار حساب کاربری", callback_data:"اشتراک من"}],
[{text: "🏠بازگشت به منوی اصلی", callback_data:"منوی خدمات ربات"}]
]}
});
}

else {
if (WireGuard_Public_Key == undefined) {
Api.sendMessage({
text: User_Message + " *داده های سرور با داده های ربات همخوانی نداردگزارش مشکل به مدیریت ارسال گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🏠بازگشت به منوی اصلی", callback_data:"منوی خدمات ربات"}]
]}
});
}

else {
Bot.runCommand("اشتراک من فعال");
}
}
}
}