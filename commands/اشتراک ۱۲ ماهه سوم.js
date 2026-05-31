/*CMD
  command: اشتراک ۱۲ ماهه سوم
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
let Full_Name = Bot.getProperty("Full_Name" + User_ID);
let Phone_Number = Bot.getProperty("Phone_Number" + User_ID);
let Operator = Bot.getProperty("Operator" + User_ID);
let Client_ID = Bot.getProperty("Client_ID" + User_ID);

let User_Message = Full_Name === undefined ? "*🌹کاربر گرامی* [" + First_Name + "](tg://user?id=" + User_ID + ")" : "** [" + Full_Name + "](tg://user?id=" + User_ID + ")";

Bot.setProperty("Subscription" + User_ID, "۱۲ ماهه");
let Subscription = Bot.getProperty("Subscription" + User_ID);

Api.sendMessage({
text: "🎁" + User_Message + " درخواست تمدید اشراک" + Subscription + " به سرور ارسال گردید،منتظر تایید باشید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}],
]}
}); 

Api.sendMessage({
chat_id: Admin_User_ID,
text:"*🎁✅ لحظاتی پیش کاربر درخواست تمدید اشتراک " + Subscription + " را دارد.*\n\n" + "👤 **نام و نام خانوادگی:** " + Full_Name + "\n" + "📞 **شماره موبایل:** " + Phone_Number + " (" + Operator + ")\n\n" + "🚀 **شناسه کلاینت:** `" + Client_ID + "`\n\n" + "```json\n" + "{\n" + "\"telegram_id\": " + User_ID + ",\n" + "\"uuid\": \"" + Client_ID + "\"\n" + "}\n" + "```",
parse_mode: "Markdown",
reply_markup: { inline_keyboard: [
[{text: "🔄بروز رسانی داده های کاربران", callback_data: "بروز رسانی داده های کاربران اول"}]
]}
});