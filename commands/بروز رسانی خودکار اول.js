/*CMD
  command: بروز رسانی خودکار اول
  help: 
  need_reply: false
  auto_retry_time: 86400
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let User_ID = user.telegramid;
let Client_ID = Bot.getProperty("Client_ID" + User_ID);

HTTP.get({
url: "https://user.umbrella-server.ir/gXKq7w9Gn0oEEbJa35nGkm/api/v2/admin/user/" + Client_ID + "/",
headers: {
"Accept": "application/json",
"Hiddify-API-Key": "b8de3a72-42d0-444f-af84-5d9c5d2dedb0"
},
success: 'بروز رسانی خودکار دوم',
background: true
});
return