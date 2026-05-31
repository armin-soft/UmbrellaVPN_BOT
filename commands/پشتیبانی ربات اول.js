/*CMD
  command: پشتیبانی ربات اول
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

let User_Message = Full_Name === undefined ? "*🌹کاربر گرامی* [" + First_Name + "](tg://user?id=" + User_ID + ")" : "** [" + Full_Name + "](tg://user?id=" + User_ID + ")";

Bot.runCommand("تاریخ و زمان");
if (Robot_Status === "🔴خاموش") {
Api.editMessageText({
message_id: request.message.message_id,
text: User_Message + " *با عرض پوزش ربات در دسترس نمی باشد.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n⚠️علت:🤖🔴ربات جهت بروز رسانی خاموش می باشد\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📢👁مشاهده کانال اطلاع رسانی", url: Channel_Url}],
[{text: "🤖🔍بررسی دسترس بودن ربات", callback_data: "پشتیبانی ربات اول"}]
]}
});
}

else {
Api.answerCallbackQuery({
callback_query_id:request.id,
text: "🔄پشتیبانی ربات در حال بار گذاری می باشد...",
show_alert: false
})

Api.editMessageText({
message_id:request.message.message_id,
text: User_Message + " *به بخش پشتیبانی ربات خوش آمدید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌لطفا پیام خود را بصورت کامل ارسال کنید.\n⚠️نکته:پیام ارسالی می تواند حاوی فایل و تصویر باشد.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard:[
[{text: "🔙بازگشت به منوی قبل", callback_data: "پشتیبانی آنلاین"}],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}]
]}
});

Bot.runCommand("پشتیبانی ربات دوم");
}