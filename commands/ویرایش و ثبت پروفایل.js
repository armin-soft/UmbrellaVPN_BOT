/*CMD
  command: ویرایش و ثبت پروفایل
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
text: User_Message + " *با عرض پوزش ربات در دسترس نمی‌باشد.\n\n" + Date_Time +
"\n➖➖➖➖➖➖➖➖➖➖\n⚠️علت: 🤖🔴ربات جهت بروزرسانی خاموش می‌باشد\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {
inline_keyboard: [
[{ text: "📢👁مشاهده کانال اطلاع رسانی", url: Channel_Url }],
[{ text: "🤖🔍بررسی دسترس بودن ربات", callback_data: "ویرایش پروفایل" }]
]
}
});
return;
}

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄ویرایش و ثبت پروفایل در حال بارگذاری می‌باشد...",
show_alert: false
});

Api.editMessageText({
message_id: request.message.message_id,
text: User_Message + " *به بخش ویرایش و ثبت پروفایل خوش آمدید.\n\n" + Date_Time + "\n\n🙇‍♂️لطفا به پرسش‌هایی که از شما پرسیده می‌شود به درستی پاسخ دهید.\n\n⚠️نکته:وارد کردن اطلاعات کاربری تنها یک بار مجاز می باشد و دیگر امکان ویرایش آن وجود ندارد،پس از صحت آن اطمینان حاصل فرمایید*",
parse_mode: "Markdown",
});

Bot.runCommand("پرسش اول بررسی اول");