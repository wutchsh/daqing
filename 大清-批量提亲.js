// 批量提亲-confirm
var id = 1138;
function tiqin(){
    press(540,860,10);sleep(200);
    press(740,1120,10);sleep(400);
    setText(0,id);sleep(200);
    press(540,660,10);sleep(500);
    press(340,1290,10);sleep(1900);
}
sleep(500);
for(i=0;i<16 ;i++){
    for(j=0;j<4;j++){
        press(920,528+318*j,10);sleep(500);
        tiqin(); 
    }
    swipe(540,1400,540,660,300);sleep(500);
    press(920,1220,10);sleep(200);
    tiqin();
    swipe(540,1400,540,660,300);sleep(500);
    press(920,1538,10);sleep(200);
    tiqin();
    press(960,1760,10);sleep(200);
}