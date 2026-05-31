/*CMD
  command: اطلاع رسانی دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: *👌آیدی عددی کاربر مورد نظر را وارد کنید.*
  keyboard: 
  aliases: 
  group: 
CMD*/

Api.sendChatAction({
chat_id: chat.chatid,
action: "typing"
});

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

Bot.setProperty("User_ID_Notices", English_Message);
Bot.runCommand("اطلاع رسانی سوم");