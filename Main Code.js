//Made by 트위치봇
//remake by Geonwoo1109

var g = "\u200d".repeat(500);
var f = "\0".repeat (500);

importClass(org.jsoup.Jsoup);

var 전체보기 = "\u200b".repeat(500);
var NN = "\n\n";
var KEY=""; //나이스에서 제공함. API
var bar = ("=").repeat(20);

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName)
{
 

  
var newtime = new Date().toISOString().replace (/-/g,"").slice (0,8); //새로운 날짜

var dateset = new Date();
var year = dateset.getFullYear (); //전체년도YYYY
var month = (dateset.getMonth() + 1); //달 0~11
var date3 = dateset.getDate(); // 일 1~31
var day = dateset.getDay(); // 요일 0~6
var 시간 = (year+""+month+""+date3);

var 날짜인듯 = ("♧ "+month+"월 "+date3+"일 급식");

var site1 = 'https://open.neis.go.kr/hub/mealServiceDietInfo?KEY='+KEY+'&Type=json&plndex=1&pSize=100';
var site_1 = '&ATPT_OFCDC_SC_CODE=G10&SD_SCHUL_CODE=7430030&MLSV_MYD=' + newtime;
var site_2 = '&MLSV_FROM_YMD=' + newtime + '&MLSV_TO_YMD=' +"20211231";
var gup = site1 + site_1 + site_2;

var res0 = Jsoup.connect(gup).get().text();
var res = JSON.stringify(JSON.parse(org.jsoup.Jsoup.connect(gup).ignoreContentType(true).ignoreHttpErrors(true).userAgent("Mozilla").get().text()), null, 4);
var res2 = JSON.parse(res0).mealServiceDietInfo[1].row[0].DDISH_NM.replace(/ /g, "\n");

var a=[];
for(i=0 ; i<6 ; i++) {
a.push(JSON.parse(res0).mealServiceDietInfo[1].row[i].MLSV_TO_YMD.substr (6) +"일_급식 "+bar+" "+ JSON.parse(res0).mealServiceDietInfo[1].row[i].DDISH_NM+" "+bar);
}
a.join("\n\n");



if(msg==('/급식')){
try{
if (day == 0 || day == 6) {
  replier.reply("월요일 급식\n"+bar+"\n"+res2+"\n"+bar);
} else {
  replier.reply(날짜인듯+"\n"+bar+"\n"+res2+"\n"+bar);
}
} catch (e) {
replier.reply(e);
}
}


if(msg.includes('/주간급식')){
try{
replier.reply("7일간 나올 급식입니다.\n전체보기를 눌러주세요!"+전체보기+NN+ a.join(NN).replace(/ /g, "\n"));
} catch(e){ 
  replier.reply(e);
  }
}

  if (msg == "/알레르기")
  {
    replier.reply ("1. 난류\n2. 우유\n3. 메밀\n4. 땅콩\n5. 대두\n6. 밀\n7. 고등어\n8. 게\n9. 새우\n10. 돼지고기\n11. 복숭아\n12. 토마토\n13. 아황산류\n14. 호두\n15. 닭고기\n16. 쇠고기\n17. 오징어\n18. 조개류(굴, 전복, 홍합 포함");
  }


}
}

