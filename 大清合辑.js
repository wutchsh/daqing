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
    var n = 60;
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

function _Qinmi(){
    var p1 = [875,1190];
    var p2 = [380,1190];
    function tappoint(p,n){
        for(i=0;i<n;i++){
            press(p[0],p[1],5);sleep(15);
            if(i%2000 == 0){
                log(i);
                if(images.detectsColor(captureScreen(), "#ff7f7f7f", p[0],p[1])){
                    for(p=0;p<20;p++){
                        device.vibrate(1000);sleep(500);
                        device.cancelVibration();sleep(200);
                    }
                    exit();
                }
            }
        }
    }
    tappoint(p1,500000);
    for(p=0;p<20;p++){
        device.vibrate(1000);sleep(500);
        device.cancelVibration();sleep(200);
    }
}

function _imgdect(temp,x,y,w,h){
    img0 = captureScreen();sleep(500);
    var point = images.findImage(img0, temp, {
        region: [x, y, w, h],
        threshold: 0.8
    });
    return point;
}

function _inputacc(){
    if(n < 10){
        accid = acc + "0"+ n;
    }
    else{
        accid = acc + n;
    }
    click(540,720);sleep(1000); 
    setText(0,accid);sleep(500);
    press(540,180,10);sleep(500);
    press(540,1120,10);sleep(500);   //登录账号
}

function _account(){
    sleep(500);
    press(990,1710,10);sleep(500); // 开始切换账号
    press(540,1040,10);sleep(500);  //按钮“切换账号”
    inputacc();
    while(images.detectsColor(captureScreen(), "#fff7f2d3", 250,925)){
        files.append(logurl, "**账号:"+ accid +"：该账号未注册！\n\n", encoding = 'utf-8');sleep(500);
        n += 1;
        inputacc();
    }
}

// _tuitu();
function _tuitu(){
    while(true){
        press(880,1670,10);sleep(10);
        press(750,1120,10);sleep(10);
        press(720,1440,10);sleep(10);
        press(790,850,10);sleep(10);
    }
}

function _huachuan(){
    function main() {
        press(785,1580,10);sleep(300);
        press(755,1115,10);sleep(300);
        toastLog("即将开始划船！");sleep(500);
        threads.start(function() {
            tap(400, 1750, 10);
        });
        threads.start(function() {
            tap(640, 1750, 10);
        });
        threads.start(function() {
            tap(890, 1750, 10);
        });
        threads.start(function() {
            tap(150, 1750, 10);
        });
        threads.start(function() {
            sleep(70000);
            threads.shutDownAll();
        });
        sleep(70000);toastLog("划船结束！");
    }
    
    main();
}