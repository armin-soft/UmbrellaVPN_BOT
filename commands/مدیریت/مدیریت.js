/*CMD
  command: مدیریت
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

User.setProperty("Admin_Full_Name" , "آرمین اسکندری");
Bot.setProperty("Admin_User_ID", "592526230");

let Admin_Full_Name = User.getProperty("Admin_Full_Name");
let Admin_User_ID = Bot.getProperty("Admin_User_ID");
let Date_Time = Bot.getProperty("Date_Time");

if (request && request.data) {
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄مدیریت در حال بار گذاری می باشد...",
show_alert: false
});
  
if (request.message && request.message.message_id) {
let message_id = request.message.message_id;
let chat_id = request.message.chat.id;

Api.deleteMessage({
chat_id: chat_id,
message_id: message_id
});
}
}

let Admin_ID = parseInt(Admin_User_ID);
if (isNaN(Admin_ID)) { Admin_ID = 592526230; }
let isAdmin = (chat.chatid == Admin_ID);

if (isAdmin) {
let adminMessage = "*🌹مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *به بخش مدیریت خوش آمدید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*";
  
let adminKeyboard = {
inline_keyboard: [
[{text: "⚙️تنظیمات", callback_data: "تنظیمات"}],
[{text: "📊آمار کلی", callback_data: "آمار کلی"}],
[{text: "🚪🔑خروج مدیریت", callback_data: "خروج مدیریت"}]
]
};

Api.sendMessage({
text: adminMessage,
parse_mode: "Markdown",
reply_markup: adminKeyboard
});
}

else {
let firstName = user.first_name || "کاربر";
let userId = user.telegramid || chat.chatid;
  
let userMessage = "*⛔️کاربر گرامی* [" + firstName + "](tg://user?id=" + userId + ") *با عرض پوزش شما دسترسی به این بخش را ندارید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*";
let userKeyboard = {
inline_keyboard: [
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}]
]
};

Api.sendMessage({
text: userMessage,
parse_mode: "Markdown",
reply_markup: userKeyboard
});
}