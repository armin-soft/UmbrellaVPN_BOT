/*CMD
  command: اشتراک رایگان دوم
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

let User_ID = user.telegramid;
let First_Name = user.first_name;
let Date_Time = Bot.getProperty("Date_Time");
let Admin_User_ID = Bot.getProperty("Admin_User_ID");

function To_Persian_Number(str) {
return str
.toString()
.replace(/[0-9]/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

function Get_Time_Period(hour) {
if (hour >= 0 && hour < 3) return {Name:'نیمه شب', Emoji:'🌌'};
if (hour >= 3 && hour < 5) return {Name:'پیش سحر', Emoji:'🌃'};
if (hour >= 5 && hour < 6) return {Name:'سحر', Emoji:'🕌'};
if (hour >= 6 && hour < 7) return {Name:'طلوع آفتاب', Emoji:'🌅'};
if (hour >= 7 && hour < 9) return {Name:'صبح', Emoji:'🌄'};
if (hour >= 9 && hour < 12) return {Name:'پیش از ظهر', Emoji:'🌞'};
if (hour >= 12 && hour < 13) return {Name:'ظهر', Emoji:'☀️'};
if (hour >= 13 && hour < 15) return {Name:'بعد از ظهر', Emoji:'🌤'};
if (hour >= 15 && hour < 17) return {Name:'عصر', Emoji:'🌇'};
if (hour >= 17 && hour < 19) return {Name:'غروب', Emoji:'🌆'};
if (hour >= 19 && hour < 20) return {Name:'اوایل شب', Emoji:'🌉'};
if (hour >= 20 && hour < 22) return {Name:'شب', Emoji:'🌃'};
return {Name:'انتهای شب', Emoji:'🌙'};
}

function Get_Season_Jalali(jMonth) {
if (jMonth >= 1 && jMonth <= 3) return {Name:'بهار', Emoji:'🌸'};
if (jMonth >= 4 && jMonth <= 6) return {Name:'تابستان', Emoji:'☀️'};
if (jMonth >= 7 && jMonth <= 9) return {Name:'پاییز', Emoji:'🍂'};
return {Name:'زمستان', Emoji:'⛄️'};
}

function Get_Subscription_Type(days) {
days = Number(days);

if (days === 1) return "۱ روزه";
if (days === 30) return "۱ ماهه";
let months = Math.floor(days / 30);
if (months >= 2) return To_Persian_Number(months) + " ماهه";
return To_Persian_Number(days) + " روزه";
}

function Package_Days_Explain(days) {
days = Number(days);

if (days < 7) return To_Persian_Number(days) + " روز";
let months = Math.floor(days / 30.4375);
let remainingDays = days - Math.floor(months * 30.4375);
let weeks = Math.floor(remainingDays / 7);
let extraDays = remainingDays % 7;

let parts = [];
if (months > 0) parts.push(To_Persian_Number(months) + " ماه");
if (weeks > 0) parts.push(To_Persian_Number(weeks) + " هفته");
if (extraDays > 0) parts.push(To_Persian_Number(extraDays) + " روز");
return parts.join(" و ");
}

function Format_Jalali_Expiration(dateObj) {
let h = To_Persian_Number(dateObj.getHours());
let m = To_Persian_Number(dateObj.getMinutes());
let s = To_Persian_Number(dateObj.getSeconds());
let Time_Period = Get_Time_Period(dateObj.getHours());
let gYear = dateObj.getFullYear();
let gMonth = dateObj.getMonth() + 1;
let gDay = dateObj.getDate();
let raw = Gregorian_To_Jalali(`${gYear}-${gMonth}-${gDay}`);
raw = To_Persian_Number(raw);

return (
"📆تاریخ: " + raw + "\n" +
"🕰زمان: " + h + ":" + m + ":" + s + " " + Time_Period.Emoji + " " + Time_Period.Name
);
}

function Get_Operator(Phone_Number) {
if (/^09(1|0)/.test(Phone_Number)) return "همراه اول";
if (/^09(3|0)/.test(Phone_Number)) return "ایرانسل";
if (/^092/.test(Phone_Number)) return "رایتل";
return "نا مشخص";
}

function Round_GB(Value) {
return To_Persian_Number(Number(Value).toFixed(3));
}

function Gregorian_To_Jalali(Date_String, Include_Time = false) {
var g = Date_String.split(" ");
var d = g[0].split("-");
var gy = parseInt(d[0]);
var gm = parseInt(d[1]);
var gd = parseInt(d[2]);
var g_days_in_month = [31,28,31,30,31,30,31,31,30,31,30,31];
var j_days_in_month = [31,31,31,31,31,31,30,30,30,30,30,29];
var gy2 = (gm > 2) ? (gy + 1) : gy;
var days = 355666 + (365 * gy) + parseInt((gy2 + 3) / 4) -
parseInt((gy2 + 99) / 100) + parseInt((gy2 + 399) / 400) + gd;
for (var i = 0; i < gm - 1; ++i) days += g_days_in_month[i];
var jy = -1595 + 33 * parseInt(days / 12053);
days %= 12053;
jy += 4 * parseInt(days / 1461);
days %= 1461;
if (days > 365) {
jy += parseInt((days - 1) / 365);
days = (days - 1) % 365;
}

var jm = 0;
for (; jm < 11 && days >= j_days_in_month[jm]; ++jm) {
days -= j_days_in_month[jm];
}

var jd = days + 1;
const Weekdays = ["یکشنبه","دوشنبه","سه‌ شنبه","چهارشنبه","پنج‌ شنبه","جمعه","شنبه"];
let Weekday = Weekdays[new Date(Date_String).getDay()];
let MonthNames = ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"];
let Shamsi_Date =
Weekday + " " +
To_Persian_Number(jd) + " " +
MonthNames[jm] + " " +
To_Persian_Number(jy);

if (Include_Time) {
Shamsi_Date += " - " + To_Persian_Number(g[1]);
}

return Shamsi_Date;
}

function Remaining_Days_Explain(Expire_Time_Stamp) {
let now = Date.now();
let remainingDays = Math.ceil((Expire_Time_Stamp - now) / 86400000);
if (remainingDays < 0) remainingDays = 0;
let months = Math.floor(remainingDays / 30.4375);
let remaining = remainingDays - Math.floor(months * 30.4375);
let weeks = Math.floor(remaining / 7);
let days = remaining % 7;

let parts = [];
if (months > 0) parts.push(To_Persian_Number(months) + " ماه");
if (weeks > 0) parts.push(To_Persian_Number(weeks) + " هفته");
if (days > 0) parts.push(To_Persian_Number(days) + " روز");
return To_Persian_Number(remainingDays) + " روز (" + parts.join(" و ") + ")";
}

var Json = JSON.parse(content);
if (Json.lang == "fa") {
let Full_Name = Json.name;
let Phone_Number = To_Persian_Number(Json.comment);
let Operator = Get_Operator(Json.comment);
let Package_Days = Json.package_days;
let Subscription = Get_Subscription_Type(Package_Days);
let Expire_Time_Stamp = Date.now() + (Package_Days * 86400000);
let Expire_DateObj = new Date(Expire_Time_Stamp);
let Expiration_Date_Text = Format_Jalali_Expiration(Expire_DateObj);
let Current_Usage = Round_GB(Json.current_usage_GB);
let Package_Duration = Package_Days_Explain(Json.package_days);
let Total_Usage = To_Persian_Number(Json.usage_limit_GB);
let Used_Usage = Current_Usage;
let Remaining_Usage = To_Persian_Number((Json.usage_limit_GB - Json.current_usage_GB).toFixed(3));
let Percent_Usage = To_Persian_Number(Math.floor((Json.current_usage_GB / Json.usage_limit_GB) * 100));
let Remaining_Days = Remaining_Days_Explain(Expire_Time_Stamp);

Bot.setProperty("Full_Name" + User_ID, Full_Name);
Bot.setProperty("Operator" + User_ID, Operator);
Bot.setProperty("Phone_Number" + User_ID, Phone_Number);
Bot.setProperty("Client_ID" + User_ID, Json.uuid);
Bot.setProperty("Package_Duration" + User_ID, Package_Duration);
Bot.setProperty("Current_Usage" + User_ID, Current_Usage);
Bot.setProperty("Usage_Limit" + User_ID, Total_Usage);
Bot.setProperty("Total_Usage" + User_ID, Total_Usage);
Bot.setProperty("Used_Usage" + User_ID, Used_Usage);
Bot.setProperty("Remaining_Usage" + User_ID, Remaining_Usage);
Bot.setProperty("Percent_Usage" + User_ID, Percent_Usage);
Bot.setProperty("Remaining_Days" + User_ID, Remaining_Days);
Bot.setProperty("Subscription" + User_ID, Subscription);
Bot.setProperty("Expiration_Date" + User_ID, Expiration_Date_Text);
Bot.setProperty("Duration" + User_ID, Expire_Time_Stamp);
Bot.setProperty("ED25519_Private_Key" + User_ID, Json.ed25519_private_key);
Bot.setProperty("ED25519_Public_Key" + User_ID, Json.ed25519_public_key);
Bot.setProperty("WireGuard_Private_Key" + User_ID, Json.wg_pk);
Bot.setProperty("WireGuard_Public_Key" + User_ID, Json.wg_pub);

let User_Message = Full_Name === undefined ? "*🌹کاربر گرامی* [" + First_Name + "](tg://user?id=" + User_ID + ")" : "** [" + Full_Name + "](tg://user?id=" + User_ID + ")";

Api.sendMessage({
text: "🎁" + User_Message + " *اشتراک " + Subscription + " رایگان شما با موفقیت فعال گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "👁مشاهده اشتراک ", callback_data: "اشتراک من"}],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}],
]}
}); 

Api.sendMessage({
chat_id: Admin_User_ID,
text: "*🎁✅لحظاتی پیش اشتراک " + Subscription + " رایگان فعال گردید.\n\n👤نام و نام خانوادگی:" + Full_Name + "\n📞شماره موبایل:" + Phone_Number + " (" + Operator + ")\n🆔آیدی عددی:*`" + To_Persian_Number(User_ID) + "`\n*🚀شناسه کلاینت:*\n`" + Json.uuid + "`\n*➖➖➖➖➖➖➖➖➖➖\n📆تاریخ و زمان منقضی:\n\n" + Expiration_Date_Text + "*",
parse_mode: "Markdown",
reply_markup: { inline_keyboard: [
[{text: "👁👤مشاهده کاربر (" + First_Name + ")", url: "tg://user?id=" + User_ID}]
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
"message": Full_Name + " اشتراک " + Subscription + " رایگان شما با موفقیت فعال گردید.\n\nتاریخ و زمان منقضی:\n\n" + Expiration_Date_Text + "\n\nسرور آمبرلا",
"description": {
"summary": "description",
"count_recipient": "1"
}
}
});

Bot.run({
command: "منقضی اشتراک",
run_after: Expire_Time_Stamp
});
}

else {
Api.sendMessage({
text: User_Message + " *اشتراک " + Subscription + " رایگان شما فعال نگردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: { inline_keyboard: [
[{text: "📞🧑‍💻ارتباط با پشتیبانی (آرمین سافت)", url: "https://t.me/ARMIN_SOFT"}],
[{text: "🔄تلاش مجدد", callback_data: "ایجاد کلاینت"}],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}]
]}
});

Bot.setProperty("Package_Duration" + User_ID, "", false);
Bot.setProperty("Current_Usage" + User_ID, "", false); 
Bot.setProperty("Usage_Limit" + User_ID, "", false);
Bot.setProperty("Package_Start_Date" + User_ID, "", false);
Bot.setProperty("Last_Connection_Time" + User_ID, "", false);
Bot.setProperty("Total_Usage" + User_ID, "", false);
Bot.setProperty("Used_Usage" + User_ID, "", false);
Bot.setProperty("Remaining_Usage" + User_ID, "", false);
Bot.setProperty("Percent_Usage" + User_ID, "", false);
Bot.setProperty("Remaining_Days" + User_ID, "", false);
Bot.setProperty("Subscription" + User_ID, "", false);
Bot.setProperty("Expiration_Date" + User_ID, "", false);
Bot.setProperty("Duration" + User_ID, "", false);
Bot.setProperty("ED25519_Private_Key" + User_ID, "", false);
Bot.setProperty("ED25519_Public_Key" + User_ID, "", false);
Bot.setProperty("WireGuard_Private_Key" + User_ID, "", false);
Bot.setProperty("WireGuard_Public_Key" + User_ID, "", false);
}