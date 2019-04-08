auto();
requestScreenCapture();sleep(100);

function _TiQin(){
    // 批量提亲-confirm
    var id = 661;
    function tiqin(){
        press(540,860,10);sleep(200);
        press(740,1120,10);sleep(400);
        setText(0,id);sleep(500);
        press(540,660,10);sleep(500);
        press(340,1290,10);sleep(1800);
    }
    for(i=0;i<3;i++){
        for(j=0;j<4;j++){
            press(920,528+318*j,10);sleep(400);
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
}

function _LiBao(){
    // 批量买礼包-confirm
    var n = 49;
    press(910,730,10);sleep(100);
    swipe(300,980,900,980,50);sleep(100);
    press(750,1100,10);sleep(100);
    // 购买界面检测
    if(images.detectsColor(captureScreen(), "#ff0c8c93", 705,1080)){
        press(870,1180,10);sleep(300);
        press(755,1080,10);sleep(200);
    }
    for(i=0;i<n;i++){
        press(910,730,10);sleep(100);
        swipe(300,980,900,980,50);sleep(100);
        press(750,1100,10);sleep(100);
        press(1030,1110,10);sleep(100);
    }
}

function _YiFu(){
    //亲密加点-confirm
    var p1 = [875,1190];
    var p2 = [380,1190];
    function tappoint(p,n){
        for(i=0;i<n;i++){
            press(p[0],p[1],5);sleep(15);
        }
    }
    tappoint(p1,100000);
}

