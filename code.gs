function myFunction() {
  var WEBHOOK_URL = "https://discord.com/api/webhooks/123456789/aaaaaaaaaaaaaaaaa";
  //webhookのURL

  var gobiArray = ["なの!","まる","スラ"];
  //語尾のリスト
  var gobi = gobiArray[Math.floor(Math.random() * gobiArray.length)];
  var iconArray = ["https://st2.depositphotos.com/1004590/5317/i/600/depositphotos_53177321-stock-photo-old-clock-face.jpg","https://illustimage.com/photo/11732.png"];
  //Iconのリスト
  var icon = iconArray[Math.floor(Math.random() * iconArray.length)];
  const payload = {
    "username": "おはよう"+gobi,
    "avatar_url": icon,
    "content": "@everyone おはよう"+gobi+"\n起きる"+gobi,
  };

  UrlFetchApp.fetch(WEBHOOK_URL, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
  });
}
function setTrigger(){
  var time = new Date();
  time.setHours(7);//時
  time.setMinutes(0);//分
  ScriptApp.newTrigger('myFunction').timeBased().at(time).create();
}
//これを7時前に実行する
//7時後に実行する場合は"time"の日を1日進める
