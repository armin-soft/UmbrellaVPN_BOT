/*CMD
  command: پرسش دوم بررسی سوم
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
var Edit = User.getProperty("msgid");
let Full_Name =  Bot.getProperty("Full_Name" + User_ID);
let Operator = Bot.getProperty("Operator" + User_ID);

let User_Message = Full_Name === undefined ? "*🌹کاربر گرامی* [" + First_Name + "](tg://user?id=" + User_ID + ")" : "** [" + Full_Name + "](tg://user?id=" + User_ID + ")";

Bot.editMessage("*✔️شماره موبایل وارد شده صحیح و مربوط به اپراتور " + Operator + " می باشد.*", Edit);

Api.sendMessage({
text: User_Message + " *ویرایش و ثبت پروفایل با موفقیت انجام گردید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "💎اشتراک من", callback_data: "اشتراک من"}],
[{text: "🔙بازگشت به منوی قبل", callback_data: "پروفایل کاربری"}],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}],
]}
});