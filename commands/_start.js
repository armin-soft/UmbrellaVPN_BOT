/*CMD
  command: /start
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
let Get_Chat_ID = chat.id;
let Date_Time = Bot.getProperty("Date_Time");
let Admin_User_ID = Bot.getProperty("Admin_User_ID");
let Channel_Url = Bot.getProperty("Channel_Url");
let WebService_Membership_Check = Bot.getProperty("WebService_Membership_Check");
let Robot_Status = Bot.getProperty("Robot_Status");
let Full_Name = Bot.getProperty("Full_Name" + User_ID);

Bot.setProperty("Chat_ID" + User_ID, Get_Chat_ID);

let User_Message = Full_Name === undefined ? "*🌹کاربر گرامی* [" + First_Name + "](tg://user?id=" + User_ID + ")" : "*[" + Full_Name + "](tg://user?id=" + User_ID + ")*";

Bot.runCommand("تاریخ و زمان");
if (Robot_Status === "🔴خاموش") {
Api.sendMessage({
text: User_Message + " *با عرض پوزش ربات در دسترس نمی باشد.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n⚠️علت:🤖🔴ربات جهت بروز رسانی خاموش می باشد\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📢👁️مشاهده کانال اطلاع رسانی", url: Channel_Url}],
[{text: "🤖🔍بررسی دسترس بودن ربات", callback_data: "/start"}]
]}
});
}

else {
if (!content) {
Bot.runCommand("تاریخ و زمان");
HTTP.get({
url: WebService_Membership_Check + "&User_ID=" + User_ID,
success: '/start'
});
return;
}

let Json = JSON.parse(content);
if (Json.Result.Code === 200) {
if (!User.getProperty("Statistics_Robot")) {
Bot.setProperty("Total_User", (Bot.getProperty("Total_User", "0") * 1) + 1, "text");
User.setProperty("Statistics_Robot", true, "boolean");

Api.sendMessage({
chat_id: Admin_User_ID,
text: "*✅لحظاتی پیش کاربر جدیدی عضو ربات گردید.\n\n👤نام:* [" + First_Name + "](tg://user?id=" + User_ID + ")\n*🆔آیدی عددی:* `" + User_ID + "`\n\n*" + Date_Time + "*",
parse_mode: "Markdown"
});
}

Api.sendMessage({
text: User_Message + " *به ربات فیلترشکن آمبرلا خوش آمدید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🤖📋منوی خدمات ربات", callback_data: "منوی خدمات ربات"}]
]}
});
}

else {
Api.sendMessage({
text: User_Message + " *جهت استفاده از امکانات ربات باید عضو کانال شوید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📢عضویت در کانال", url: Channel_Url}],
[{text: "📢🔍بررسی عضویت بودن کانال", callback_data: "/start"}]
]}
});
}
}