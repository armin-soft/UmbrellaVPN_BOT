/*CMD
  command: بروز رسانی میزان استفاده اول
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

Api.sendChatAction({
chat_id: chat.chatid,
action: "typing"
});

Api.answerCallbackQuery({
callback_query_id:request.id,
text:"🔄بروز رسانی میزان استفاده کاربران در حال بار گذاری می باشد...",
show_alert:false
})

if(request.data){
let message_id = request.message.message_id
let chat_id = request.message.chat.id

Api.deleteMessage({
chat_id:chat_id,
message_id:message_id
})
}

HTTP.get({
url: "https://user.umbrella-server.ir/gXKq7w9Gn0oEEbJa35nGkm/api/v2/admin/update_user_usage/",
headers: {
"Accept": "application/json",
"Hiddify-API-Key": "b8de3a72-42d0-444f-af84-5d9c5d2dedb0"
},
success: 'بروز رسانی میزان استفاده دوم',
background: true
});
return