auto();
images.requestScreenCapture();sleep(200);
var n = 0;
var acc = "";
var accid = "";
var mode = 0;

if(mode == 0){
    acc = "wyxa";
    n0 = 1;
    N = 20;
}
else if(mode == 1){
    acc = "";
    n0 = 1;
    N = 10;
}

function base(){
    // 切换账号并进入珍宝阁道具界面
    account();sleep(1000);
    press(540,1600,10);sleep(600); // 登基&上朝，进入金銮殿界面
    press(540,1110,10);sleep(200);  //可能出现的领取充值礼包界面及VIP等级提升界面
    press(540,1110,10);sleep(50);
    press(540,1110,10);sleep(50);
    press(540,1110,10);sleep(4500); //默认5000
    newgamestart();sleep(2000);     // 进入新手引导流程
    press(90,100,10);sleep(1000);   // 点击头像
    press(880,1850,10);sleep(1000); // 选择区服
    // log("账号"+accid+"--OK");
}

function inputacc(){
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

function account(){
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


function newgamestart(){
    // 登基
    press(860,70,10);sleep(500);     //跳过
    press(860,70,10);sleep(500);
    press(130,1865,10);sleep(500);
    press(130,1865,10);sleep(100);
    press(540,880,10);sleep(100);
    press(540,880,10);sleep(8000);

    // 朝堂
    press(960,60,10);sleep(500);     //跳过
    press(960,60,10);sleep(1000);
    press(865,1425,10);sleep(500);      //奏章
    press(865,1425,10);sleep(500);

    press(540,750,10);sleep(500);

    press(960,60,10);sleep(500);     //跳过
    press(960,60,10);sleep(500);

    press(140,985,10);sleep(500);
    press(140,985,10);sleep(500);

    for(i=0;i<5;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);

    press(205,1425,10);sleep(500);
    press(205,1425,10);sleep(1200);

    press(220,1845,10);sleep(1000);      //一键征收
    for(i=0;i<5;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);

    press(1030,55,10);sleep(500);       //点叉关闭

    for(i=0;i<5;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);

    press(980,100,10);sleep(10);       //回宫
    press(980,100,10);sleep(800);

    press(990,1770,10);sleep(10);       //城郊
    press(990,1770,10);sleep(800); 

    //进入征战世界
    press(390,1340,10);sleep(10);
    press(390,1340,10);sleep(800);
    press(540,1275,10);sleep(10);
    press(540,1275,10);sleep(800);

    press(145,615,10);sleep(10);            //平壤
    press(145,615,10);sleep(500);

    for(j=0;j<3;j++){
        press(820,1650,10);sleep(10);           //3次开战
        press(820,1650,10);sleep(1000);
        for(i=0;i<10;i++){
            press(540,1600,10);sleep(100);
            press(540,1600,10);sleep(100);
        }
    sleep(2000);
    }

    press(205,800,10);sleep(10);            //首尔
    press(205,800,10);sleep(1000);
    for(i=0;i<5;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);

    press(540,960,10);sleep(10);                //BOSS
    press(540,960,10);sleep(3000);
    for(i=0;i<5;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);

    for(i=0;i<15;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);

    press(980,100,10);sleep(10);       //回宫
    press(980,100,10);sleep(500);

    press(100,1790,10);sleep(10);           //名臣
    press(100,1790,10);sleep(500);

    press(210,860,10);sleep(10);        //海兰察
    press(210,860,10);sleep(500);
    for(i=0;i<20;i++){                      //升级海兰察
        press(800,637,10);sleep(100);
        press(800,637,10);sleep(100);
    }
    sleep(2000);

    for(i=0;i<5;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);
    press(540,1810,10);sleep(10);       //前往战斗
    press(540,1810,10);sleep(500);

    press(205,800,10);sleep(10);            //首尔
    press(205,800,10);sleep(500);
    for(i=0;i<5;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);
    press(540,960,10);sleep(10);                //BOSS
    press(540,960,10);sleep(2000);
    for(i=0;i<5;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);

    press(1023,65,10);sleep(10);       //点叉关闭
    press(1023,65,10);sleep(500); 
    press(980,100,10);sleep(10);       //回宫
    press(980,100,10);sleep(500);

    for(i=0;i<5;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);

    press(275,1560,10);sleep(10);           //国家任务
    press(275,1560,10);sleep(500);
    for(i=0;i<5;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);
    press(870,780,10);sleep(10);
    press(870,780,10);sleep(500);
    for(i=0;i<10;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);

    press(215,1685,10);sleep(10);           //前往妃子谈心
    press(215,1685,10);sleep(500);
    for(i=0;i<5;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);

    press(1040,56,10);sleep(500);       //点叉关闭
    press(980,100,10);sleep(500);

    for(i=0;i<5;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);

    press(635,185,10);sleep(10);        //七日登陆
    press(635,185,10);sleep(500);

    for(i=0;i<5;i++){
        press(540,1624,10);sleep(100);
        press(540,1624,10);sleep(100);
    }
    sleep(2000);
    press(935,1220,10);sleep(500);

    for(i=0;i<10;i++){
        press(540,1624,10);sleep(100);
        press(540,1624,10);sleep(100);
    }
    sleep(2000);
}


function main(){
    device.setBrightness(0);
    for(n = n0;n <= N;n++){
        sleep(500);
        base();
        log("账号"+accid+"--OK");
    }
    // 运行结束关闭屏幕并循环震动通知
    device.setBrightness(5);
    for(k=0;k<20;k++){
        device.vibrate(600);sleep(400);
        device.cancelVibration();sleep(200);
    }
    Power();                    //Root权限
}

main();
