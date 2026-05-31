/*CMD
  command: پیکربندی سرور
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

Api.answerCallbackQuery({
callback_query_id:request.id,
text:"🔄پیکربندی سرور در حال بار گذاری می باشد...",
show_alert:false
})

Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text: "*🌹مدیریت گرامی* [" + Admin_Full_Name + "](tg://user?id=" + Admin_User_ID + ") *به بخش پیکربندی سرور خوش آمدید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard:[
[{text: "🔁بروز رسانی میزان استفاده کاربران", callback_data: "بروز رسانی میزان استفاده اول"}],
[{text: "🔄بروز رسانی داده های کاربران", callback_data: "بروز رسانی داده های کاربران اول"}],
[{text: "✅🛅فعالسازی کلاینت", callback_data: "فعالسازی کلاینت اول"},{text: "🚫🛅غیر فعالسازی کلاینت", callback_data: "غیر فعالسازی کلاینت اول"}],
[{text: "🗑👤حذف کاربر", callback_data: "حذف کاربر اول"}],
[{text: "⌛️💎منقضی اشتراک", callback_data: "منقضی اشتراک اول"}],
[{text: "🗣اطلاع رسانی", callback_data: "اطلاع رسانی اول"}],
[{text: "🔙بازگشت به منوی قبل", callback_data: "تنظیمات"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});