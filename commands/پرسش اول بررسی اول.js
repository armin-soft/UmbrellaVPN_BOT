/*CMD
  command: پرسش اول
   بررسی اول
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*⁉️پرسش اول:نام و نام خانوادگی خود را وارد کنید.
➖➖➖➖➖➖➖➖➖➖
⚠️نکته:نام و نام خانوادگی باید حروف فارسی باشد.*
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

function Normalize_Text(text) {
return String(text || "")
.trim()
.replace(/\s+/g, " ")
.replace(/[‌‍ـ]/g, "")
.replace(/ي/g, "ی")
.replace(/ك/g, "ک");
}

function Validate_Full_Name(fullName) {
fullName = Normalize_Text(fullName);

const Forbidden_Words = [
"کیر","کیری","کون","آب کیر","آشغال","آلت تناسلی","ابله","احمق","اسکل",
"الاغ","انگل","اوسکل","اوسگل","بدبخت","تخمم","بیشعور","بیناموس","جاکش",
"جنده","حرومزاده","حشری","خایه","خرفت","خفه شو","دخترجنده","دیوث","زباله",
"زن جنده","زنازاده","سکس","سکسی","شاش","عن","عوضی","فاحشه","قرمساق",
"لاشی","لخت","مادرجنده","مادرسگ","مشروب","منگل","نعشه","پفیوز","کثافت",
"کس","کص","کون","پدر سگ"
];

const namePattern = /^[\u0600-\u06FF]+(?:\s+[\u0600-\u06FF]+)+$/;

if (!namePattern.test(fullName)) {
return false;
}

const lower = fullName.toLowerCase();

for (let i = 0; i < Forbidden_Words.length; i++) {
if (lower.includes(Forbidden_Words[i])) {
return false;
}
}

return true;
}

let Full_Name = Normalize_Text(message);
let Review_Message = "*🔄ربات در حال بررسی نام و نام خانوادگی وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است کمی طول انجامد.*";

if (Validate_Full_Name(Full_Name)) {
Bot.setProperty("Full_Name" + User_ID, Full_Name);

Bot.sendMessage(Review_Message, {
on_result: "پرسش اول بررسی دوم",
is_reply: true
});
}

else {
Bot.sendMessage(Review_Message, {
on_result: "پرسش اول بررسی چهارم",
is_reply: true
});
}