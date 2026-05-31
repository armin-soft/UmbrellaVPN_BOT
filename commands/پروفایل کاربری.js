/*CMD
  command: پروفایل کاربری
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
let Operator = Bot.getProperty("Operator" + User_ID);
let Phone_Number = Bot.getProperty("Phone_Number" + User_ID);
let Client_ID = Bot.getProperty("Client_ID" + User_ID);
let Package_Duration = Bot.getProperty("Package_Duration" + User_ID);
let Package_Start_Date = Bot.getProperty("Package_Start_Date" + User_ID);
let Current_Usage = Bot.getProperty("Current_Usage" + User_ID);
let Usage_Limit = Bot.getProperty("Usage_Limit" + User_ID);
let Total_Usage = Bot.getProperty("Total_Usage" + User_ID);
let Used_Usage = Bot.getProperty("Used_Usage" + User_ID);
let Remaining_Usage = Bot.getProperty("Remaining_Usage" + User_ID);
let Percent_Usage = Bot.getProperty("Percent_Usage" + User_ID);
let Remaining_Days = Bot.getProperty("Remaining_Days" + User_ID);
let Subscription = Bot.getProperty("Subscription" + User_ID);
let Expiration_Date = Bot.getProperty("Expiration_Date" + User_ID);
let Duration = Bot.getProperty("Duration" + User_ID);
let ED25519_Private_Key = Bot.getProperty("ED25519_Private_Key" + User_ID);
let ED25519_Public_Key = Bot.getProperty("ED25519_Public_Key" + User_ID);
let WireGuard_Private_Key = Bot.getProperty("WireGuard_Private_Key" + User_ID);
let WireGuard_Public_Key = Bot.getProperty("WireGuard_Public_Key" + User_ID);

let User_Message = Full_Name === undefined ? "*🌹کاربر گرامی* [" + First_Name + "](tg://user?id=" + User_ID + ")" : "** [" + Full_Name + "](tg://user?id=" + User_ID + ")";

Bot.runCommand("تاریخ و زمان");
if (Robot_Status == "🔴خاموش") {
Api.editMessageText({
message_id: request.message.message_id,
text: User_Message + " *با عرض پوزش ربات در دسترس نمی باشد.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n⚠️علت:🤖🔴ربات جهت بروز رسانی خاموش می باشد\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📢👁مشاهده کانال اطلاع رسانی", url: Channel_Url}],
[{text: "🤖🔍بررسی دسترس بودن ربات", callback_data: "پروفایل کاربری"}]
]}
});
}

else {
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄پروفایل کاربری در حال بار گذاری می باشد...",
show_alert: false
});

if (!Phone_Number) {
Api.editMessageText({
message_id: request.message.message_id,
text: User_Message + " *شما بدلیل عدم ثبت اطلاعات پروفایل کاربری مجاز ورود به این بخش نمی باشید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: { inline_keyboard: [
[{text: "📝👤ثبت اطلاعات پروفایل کاربری", callback_data: "ویرایش و ثبت پروفایل"}],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}]
]}
});
}

else if (!Subscription) {
Api.editMessageText({
message_id: request.message.message_id,
text: User_Message + " *به بخش پروفایل کاربری خوش آمدید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات پروفایل کاربری شما بدین شرح است:\n\n👤نام و نام خانوادگی:" + Full_Name + "\n📞شماره موبایل:" + Phone_Number + " (" + Operator + ")\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: { inline_keyboard: [
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}]
]}
});
}

else {
Api.editMessageText({
message_id: request.message.message_id,
text: User_Message + " *به بخش پروفایل کاربری خوش آمدید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات پروفایل کاربری شما بدین شرح است:\n\n👤نام و نام خانوادگی:" + Full_Name + "\n📞شماره موبایل:" + Phone_Number + " (" + Operator + ")\n➖➖➖➖➖➖➖➖➖➖\n🔰مشخصات اشتراک شما به شرح زیر است:\n\n💎اشتراک فعال + تاریخ و زمان منقضی:" + Subscription + " (" + Package_Duration + ")\n" + Expiration_Date + "\n\n⏱️تاریخ شروع:" + Package_Start_Date + "\n\n⏱️تاریخ انقضا:\n" + Expiration_Date + "\n➖➖➖➖➖➖➖➖➖➖\n📊حجم کل:" + Total_Usage + " گیگابایت\n📥حجم مصرف شده:" + Used_Usage + " گیگابایت\n📤حجم باقی مانده:" + Remaining_Usage + " گیگابایت\n📈درصد مصرف:" + Percent_Usage + " درصد\n➖➖➖➖➖➖➖➖➖➖\n🔐کلید خصوصی Ed25519:*\n`" + ED25519_Private_Key + "`\n*🔒کلیدعمومی Ed25519*\n`" + ED25519_Public_Key + "`\n\n*🔐کلید خصوصی وایرگاد:*\n`" + WireGuard_Private_Key + "`\n*🔒کلید عمومی وایرگارد:*\n`" + WireGuard_Public_Key + "`\n*🚀شناسه کلاینت:\n*`" + Client_ID + "`*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: { inline_keyboard: [
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}]
]}
});
}
}