/*CMD
  command: عدم دسترسی
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
let Full_Name = Bot.getProperty("Full_Name" + User_ID);

let User_Message = Full_Name === undefined ? "*🌹کاربر گرامی* [" + First_Name + "](tg://user?id=" + User_ID + ")" : "** [" + Full_Name + "](tg://user?id=" + User_ID + ")";

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: User_Message + " *با عرض پوزش شما دسترسی به این بخش را ندارید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard:[
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}]
]}
});