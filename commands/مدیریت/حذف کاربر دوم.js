/*CMD
  command: حدف کاربر دوم
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

Bot.setProperty("User_ID_Delete_User", message);
let Client_ID = Bot.getProperty("Client_ID" + message);

HTTP.delete({
url: "http://user.umbrella-server.ir/gXKq7w9Gn0oEEbJa35nGkm/api/v2/admin/user/" + Client_ID + "/",
headers: {
"Accept": "application/json",
"Hiddify-API-Key": "b8de3a72-42d0-444f-af84-5d9c5d2dedb0"
},
success: 'حذف کاربر سوم',
background: true
});
return;