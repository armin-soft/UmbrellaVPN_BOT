/*CMD
  command: اشتراک من فعال
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

if(request.data){
let message_id = request.message.message_id
let chat_id = request.message.chat.id

Api.deleteMessage({
chat_id:chat_id,
message_id:message_id
})
}

let First_Name = user.first_name;
let User_ID = user.telegramid;
let Date_Time = Bot.getProperty("Date_Time");
let Client_Status = Bot.getProperty("Client_Status" + User_ID);
let Message_Temporary_Client_Deactivation = Bot.getProperty("Message_Temporary_Client_Deactivation" + User_ID);
let Full_Name = Bot.getProperty("Full_Name" + User_ID);
let Client_ID = Bot.getProperty("Client_ID" + User_ID);
let Package_Duration = Bot.getProperty("Package_Duration" + User_ID);
let Package_Start_Date = Bot.getProperty("Package_Start_Date" + User_ID);
let Total_Usage = Bot.getProperty("Total_Usage" + User_ID);
let Used_Usage = Bot.getProperty("Used_Usage" + User_ID);
let Remaining_Usage = Bot.getProperty("Remaining_Usage" + User_ID);
let Percent_Usage = Bot.getProperty("Percent_Usage" + User_ID);
let Subscription = Bot.getProperty("Subscription" + User_ID);
let Expiration_Date = Bot.getProperty("Expiration_Date" + User_ID);

let User_Message = Full_Name === undefined ? "*🌹کاربر گرامی* [" + First_Name + "](tg://user?id=" + User_ID + ")" : "** [" + Full_Name + "](tg://user?id=" + User_ID + ")";

if (Client_Status == "🚫غیر فعال") {
Api.sendMessage({
text: User_Message + " *به بخش اشتراک من خوش آمدید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n⛔️با عرض پوزش کلاینت شما در سرور غیر فعال شده است.\n⚠️علت:" + Message_Temporary_Client_Deactivation + "*",
parse_mode:"Markdown",
reply_markup:{inline_keyboard:[
[{text:"🔄برررسی مجدد", callback_data:"اشتراک من"}],
[{text: "👨‍💻ارتباط با توسعه دهنده (آرمین سافت)", url:"https://t.me/ARMIN_SOFT"}],
[{text:"🏠بازگشت به منوی اصلی", callback_data:"منوی خدمات ربات"}]
]}
});
}

else {
Api.sendMessage({
text: User_Message + " *به بخش اشتراک من خوش آمدید.\n\n" + Date_Time + "\n➖➖➖➖➖➖➖➖➖➖\n🔰مشخصات اشتراک شما به شرح زیر است:\n\n🎁نوع اشتراک:" + Subscription + " معادل (" + Package_Duration + ")\n\n⏱️تاریخ شروع:" + Package_Start_Date + "\n\n⏱️تاریخ انقضا:\n" + Expiration_Date + "\n\n📊حجم کل:" + Total_Usage + " گیگابایت\n📥حجم مصرف شده:" + Used_Usage + " گیگابایت\n📤حجم باقی مانده:" + Remaining_Usage + " گیگابایت\n📈درصد مصرف:" + Percent_Usage + " درصد\n➖➖➖➖➖➖➖➖➖➖\n🔰مشخضات اتصال شما به شرح زیر است:\n🔌خودکار:*\n`https://user.umbrella-server.ir/1C9gh78javsskcaIpes3z/" + Client_ID + "/auto/?asn=unknown# " + Full_Name + "`\n*🔌ایکس ری کامل:*\n`https://user.umbrella-server.ir/1C9gh78javsskcaIpes3z/" + Client_ID + "/xray/# " + Full_Name + "`\n*🔌لینک اشتراک:*\n`https://user.umbrella-server.ir/1C9gh78javsskcaIpes3z/" + Client_ID + "/sub/?asn=unknown# " + Full_Name + "`\n*🔌لینک اشتراک ۶۴:*\n`https://user.umbrella-server.ir/1C9gh78javsskcaIpes3z/" + Client_ID + "/sub64/?asn=unknown# " + Full_Name + "`\n*🔌سینگ باکس کامل:*\n`https://user.umbrella-server.ir/1C9gh78javsskcaIpes3z/" + Client_ID + "/singbox/?asn=unknown# " + Full_Name + "`\n*🔌سینگ باکس معمولی:*\n`https://user.umbrella-server.ir/1C9gh78javsskcaIpes3z/" + Client_ID + "/singbox-ssh/?asn=unknown# " + Full_Name + "`\n*🔌کلش متا:*\n`https://user.umbrella-server.ir/1C9gh78javsskcaIpes3z/" + Client_ID + "/clashmeta/?asn=unknown# " + Full_Name + "`\n*🔌کلش:*\n`https://user.umbrella-server.ir/1C9gh78javsskcaIpes3z/" + Client_ID + "/clash/?asn=unknown# " + Full_Name + "`\n*🔌وایرگارد:*\n`https://user.umbrella-server.ir/1C9gh78javsskcaIpes3z/" + Client_ID + "/wireguard/# " + Full_Name + "`\n*➖➖➖➖➖➖➖➖➖➖\n🤞نکته اول:داده های بالا هر ۲۴ ساعت یک بار بروز رسانی می شود.\n🤞نکته دوم:روی لینک هر کدام کلاینت ها کلیک کنید خودکار در کلیپ بورد شما ذخیره می شود.\n🤞نکته سوم:بخش وب اپلیکیشن اطلاعات کامل اشتراک کلاینت و نرم افزار و اپلیکیشن را دارا هست.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.*",
parse_mode:"Markdown",
reply_markup:{inline_keyboard:[
[{text: "🔄💎بروز رسانی اشتراک من", callback_data:"اشتراک من"}],
[{text: "🌐📱وب اپلیکیشن کامل", web_app: {url: "https://armin-soft.ir/Tools/Umbrella-VPN/User?UU-ID=" + Client_ID + ""}}],
[{text: "👨‍💻ارتباط با توسعه دهنده (آرمین سافت)", url:"https://t.me/ARMIN_SOFT"}],
[{text: "🏠بازگشت به منوی اصلی", callback_data:"منوی خدمات ربات"}]
]}
});
}