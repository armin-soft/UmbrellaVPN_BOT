/*CMD
  command: بروز رسانی داده های کاربران دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: *👌فرمت مورد نظر را وارد کنید.*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let Message_JSON = JSON.parse(message);
let User_ID = Message_JSON.telegram_id;
let Client_ID = Message_JSON.uuid;

Bot.setProperty("Updating_User_Data", User_ID);

HTTP.get({
url: "https://user.umbrella-server.ir/gXKq7w9Gn0oEEbJa35nGkm/api/v2/admin/user/" + Client_ID + "/",
headers: {
"Accept": "application/json",
"Hiddify-API-Key": "b8de3a72-42d0-444f-af84-5d9c5d2dedb0"
},
success: 'بروز رسانی داده های کاربران سوم',
background: true
});
return