auto();
requestScreenCapture();sleep(100);

function _TiQin(){
    // 批量提亲-confirm
    var id = 467;
    sleep(500);
    function tiqin(){
        press(540,860,10);sleep(200);
        press(740,1120,10);sleep(400);
        setText(0,id);sleep(500);
        press(540,660,10);sleep(500);
        press(340,1290,10);sleep(1800);
    }
    for(i=0;i<10;i++){
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

function _LianYin(){
    // 批量循环联姻
    while(true){
        press(135,1750,10);sleep(10);
        press(135,1750,10);sleep(50);
        press(880,525,10);sleep(500);
        press(340,780,10);sleep(200);
        press(340,1250,10);sleep(100);
        for(i=0;i<5;i++){
            press(540,800,10);sleep(100);
        }
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
    // 使用衣服加亲密
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
    // 图片指定区域检测特定模板
    img0 = captureScreen();sleep(500);
    var point = images.findImage(img0, temp, {
        region: [x, y, w, h],
        threshold: 0.8
    });
    return point;
}

function _inputacc(){
    // 账号输入
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
    // 账号切换
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

function _tuitu(){
    // 快速推图
    while(true){
        press(880,1670,10);sleep(10);
        press(750,1120,10);sleep(10);
        press(720,1440,10);sleep(10);
        press(790,850,10);sleep(10);
    }
}

function _huachuan(){
    //龙舟(端午)小活动自动划船
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
        sleep(65000);toastLog("划船结束！");
    }
    
    main();
}

function _QiangHua(){
    // 淸帝强化配点
    var point = [830,970];      //待强化淸帝坐标
    for(i=0;i<5;i++){
        press(point[0],point[1],10);sleep(20);
        press(point[0],point[1],10);sleep(400);
        if(images.detectsColor(captureScreen(), "#ff0fa0a2", 540,1380)){
            press(540,1380,10);sleep(200);
            press(755,1110,10);sleep(400);
            press(540,1000,10);sleep(20);
            press(540,1000,10);sleep(20);
            press(540,1000,10);sleep(400);
            press(755,1195,10);sleep(200);
            press(856,1053,10);sleep(300);
            swipe(300,965,900,965,200);sleep(200);
            press(755,1130,10);sleep(200);
            press(770,1280,10);sleep(200);
            press(755,1110,10);sleep(50);
            press(540,1380,10);sleep(200);
        }else{
            log("道具不足！");
            exit();
        }
    }
}

function _ShengJi(){
    // 升级大臣
    var x = device.width*797/1080;
    var y = device.height*640/1920;
    var n = 20;
    function upgrade(){
        for(i=0;i<2000000;i++){
            press(x,y,n);
            sleep(n);
        }
    }
    upgrade();
}

function _JiangShiwang(){
    // 僵尸王
    while(images.detectsColor(captureScreen(), "#ff5d5d5d", 764,1480)){
        press(1020,60,10);sleep(100);
        press(880,945,10);sleep(200);
    }
    press(764,1480,10);sleep(50);
    press(764,1480,10);sleep(100);
    while(true){
        press(800,1440,10);sleep(10);
    }
}

function _JiNeng(){
    // 技能升星
    var N = 10;     // 升级星数
    point = [180,1130];
    for(i=0;i<4;i++){
        press(point[0]+235*i,point[1],20);sleep(50);
        press(point[0]+235*i,point[1],20);sleep(300);
        for(k=0;k<N;k++){
            press(340,1415,10);sleep(100);
            swipe(300,1125,900,1125,100);sleep(100);
            press(740,1260,10);sleep(200);
            press(540,1415,10);sleep(200);
        }
        press(1000,470,10);sleep(500);
    }
}

function _chengzhang(){
    // 成长点加点
    threads.start(function(){
        while(true){
            press(340,1130,10);sleep(50);
        }
    });
    threads.start(function(){
        while(true){
            press(340,1360,10);sleep(50);
        }
    });
    threads.start(function(){
        while(true){
            press(800,1130,10);sleep(50);
        }
    });
    threads.start(function(){
        while(true){
            press(800,1360,10);sleep(50);
        }
    });
}

function _FeiWei(){
    // 使用元宝恢复习礼次数快速升妃位
    for(i=0;i<10;i++){
        while(images.detectsColor(captureScreen(), "#ffcf4727", 790,1505)){
            for(k=0;k<10;k++){
                press(790,1500,10);sleep(20);
            }
        }
        press(540,1390,10);sleep(200);
        press(800,1030,10);sleep(200);
        press(755,1145,10);sleep(400);
    }
}