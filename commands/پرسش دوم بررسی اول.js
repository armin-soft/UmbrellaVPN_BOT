/*CMD
  command: پرسش دوم بررسی اول
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *⁉️پرسش دوم:شماره موبایل معتبر خود را وارد کنید.*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.sendChatAction({
chat_id: chat.chatid,
action: "typing"
});

function Convert_Persian_To_English_Number(text) {
const persian = "۰۱۲۳۴۵۶۷۸۹";
const arabic = "٠١٢٣٤٥٦٧٨٩";

return String(text).replace(/[۰-۹٠-٩]/g, function(ch) {
let index = persian.indexOf(ch);

if (index !== -1) {
return index;
}

index = arabic.indexOf(ch);

if (index !== -1) {
return index;
}

return ch;
});
}

function Normalize_Phone_Number(phoneNumber) {
phoneNumber = Convert_Persian_To_English_Number(phoneNumber);
phoneNumber = String(phoneNumber).trim();
phoneNumber = phoneNumber.replace(/[^\d+]/g, "");

if (phoneNumber.startsWith("+98")) {
phoneNumber = "0" + phoneNumber.substring(3);
}

else if (phoneNumber.startsWith("0098")) {
phoneNumber = "0" + phoneNumber.substring(4);
}

else if (
phoneNumber.startsWith("98") &&
phoneNumber.length === 12
) {
phoneNumber = "0" + phoneNumber.substring(2);
}

phoneNumber = phoneNumber.replace(/\D/g, "");
return phoneNumber;
}

function Validate_Phone_Number(phoneNumber) {
phoneNumber = Normalize_Phone_Number(phoneNumber);
return /^09\d{9}$/.test(phoneNumber);
}

const PrefixMap = {
"0910": "همراه اول",
"0911": "همراه اول",
"0912": "همراه اول",
"0913": "همراه اول",
"0914": "همراه اول",
"0915": "همراه اول",
"0916": "همراه اول",
"0917": "همراه اول",
"0918": "همراه اول",
"0919": "همراه اول",
"0990": "همراه اول",
"0991": "همراه اول",
"0992": "همراه اول",
"0993": "همراه اول",
"0994": "همراه اول",

"0900": "ایرانسل",
"0901": "ایرانسل",
"0902": "ایرانسل",
"0903": "ایرانسل",
"0904": "ایرانسل",
"0905": "ایرانسل",
"0930": "ایرانسل",
"0933": "ایرانسل",
"0935": "ایرانسل",
"0936": "ایرانسل",
"0937": "ایرانسل",
"0938": "ایرانسل",
"0939": "ایرانسل",
"0941": "ایرانسل",

"0920": "رایتل",
"0921": "رایتل",
"0922": "رایتل",
"0923": "رایتل",

"0931": "اسپادان",
"0932": "تالیا",
"0934": "تله کیش",
"0955": "مبین نت",
"0998": "شاتل موبایل",
"0999": "اپراتور مجازی"
};

function Identify_Operator(phoneNumber) {
phoneNumber = Normalize_Phone_Number(phoneNumber);

if (!Validate_Phone_Number(phoneNumber)) {
return "شماره نامعتبر";
}

const prefix4 = phoneNumber.substring(0, 4);

if (PrefixMap[prefix4]) {
return PrefixMap[prefix4];
}

if (phoneNumber.substring(0, 3) === "099") {
return "اپراتور مجازی";
}

return "ناشناخته";
}

var Phone_Number = Normalize_Phone_Number(message);

if (Validate_Phone_Number(Phone_Number)) {
Bot.setProperty(
"Phone_Number" + user.telegramid,
Phone_Number
);

Bot.setProperty(
"Operator" + user.telegramid,
Identify_Operator(Phone_Number)
);

Bot.sendMessage(
"*🔄ربات در حال بررسی شماره موبایل وارد شده می باشد...*\n" + "➖➖➖➖➖➖➖➖➖➖\n" + "*⚠️نکته: این عملیات ممکن است کمی طول انجامد.*", {on_result: "پرسش دوم بررسی دوم",is_reply: true});
}

else {
Bot.sendMessage(
"*❌ شماره موبایل وارد شده معتبر نمی باشد.*",{on_result: "پرسش دوم بررسی چهارم",is_reply: true});
}