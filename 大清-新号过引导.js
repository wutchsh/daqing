/*  
    作者:wuhtchsh@gmail.com
    游戏版本：我在大清当皇帝(v5.80)
    请勿用作商业用途，禁止用此脚本及衍生脚本盈利。
*/

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
    acc = "wulei0";
    n0 = 1;
    N = 30;
}

function base(){
    // 切换账号并进入珍宝阁道具界面
    account();sleep(1000);
    press(540,1600,10);sleep(400);          // 登基&上朝，进入金銮殿界面
    press(540,1110,10);sleep(200);          //可能出现的领取充值礼包界面及VIP等级提升界面
    press(540,1110,10);sleep(200);
    press(540,1110,10);sleep(200);
    press(540,1110,10);sleep(6000);         //默认5000
    newgamestart();                         // 进入新手引导流程
    press(90,100,10);sleep(800);            // 点击头像
    press(880,1850,10);sleep(800);          // 选择区服
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
    press(540,1120,10);sleep(500);          //登录账号
}

function account(){
    sleep(500);
    press(990,1710,10);sleep(500);          // 开始切换账号
    press(540,1040,10);sleep(500);          //按钮“切换账号”
    inputacc();
    while(images.detectsColor(captureScreen(), "#fff7f2d3", 250,925)){
        log("**账号:"+ accid +"：该账号未注册！\n");sleep(500);
        n += 1;
        inputacc();
    }
}

function newgamestart(){
    // 登基
    press(860,70,10);sleep(500);            //跳过
    press(860,70,10);sleep(500);
    press(130,1865,10);sleep(500);
    press(130,1865,10);sleep(100);
    press(540,880,10);sleep(100);
    press(540,880,10);sleep(8000);

    // 朝堂
    press(960,60,10);sleep(50);             //跳过
    press(960,60,10);sleep(1000);
    press(865,1425,10);sleep(50);           //奏章
    press(865,1425,10);sleep(500);

    press(540,750,10);sleep(500);

    press(960,60,10);sleep(50);             //跳过
    press(960,60,10);sleep(500);

    press(140,985,10);sleep(50);
    press(140,985,10);sleep(500);

    for(i=0;i<5;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(1000);

    press(205,1425,10);sleep(50);
    press(205,1425,10);sleep(1200);

    press(220,1845,10);sleep(1000);         //一键征收
    for(i=0;i<5;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);

    press(1030,55,10);sleep(500);           //点叉关闭

    for(i=0;i<5;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);

    press(980,100,10);sleep(10);            //回宫
    press(980,100,10);sleep(800);

    press(990,1770,10);sleep(10);           //城郊
    press(990,1770,10);sleep(800); 

    //进入征战世界
    press(530,1345,10);sleep(20);
    press(530,1345,10);sleep(800);
    press(540,1280,10);sleep(20);
    press(540,1280,10);sleep(800);

    press(145,615,10);sleep(10);            //平壤
    press(145,615,10);sleep(500);
    for(j=0;j<3;j++){
        press(820,1650,10);sleep(10);       //3次开战
        press(820,1650,10);sleep(1000);
        for(i=0;i<8;i++){
            press(540,1600,10);sleep(100);
            press(540,1600,10);sleep(100);
        }
    sleep(2000);
    }

    press(205,800,10);sleep(10);            //首尔
    press(205,800,10);sleep(500);
    for(i=0;i<4;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(1000);
    press(540,960,10);sleep(20);            //第一次挑战BOSS
    press(540,960,10);sleep(3000);
    for(i=0;i<20;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(1000);

    press(980,100,10);sleep(10);            //回宫
    press(980,100,10);sleep(500);
    press(90,1700,10);sleep(20);            //名臣
    press(90,1700,10);sleep(800);
    press(210,860,10);sleep(10);            //海兰察
    press(210,860,10);sleep(500);
    for(i=0;i<20;i++){                      //升级海兰察
        press(800,637,10);sleep(100);
        press(800,637,10);sleep(100);
    }
    sleep(2000);
    for(i=0;i<15;i++){
        press(540,1600,10);sleep(50);
        press(540,1600,10);sleep(50);
    }
    sleep(1000);
    press(540,1810,10);sleep(10);           //前往战斗
    press(540,1810,10);sleep(500);

    press(205,800,10);sleep(10);            //首尔
    press(205,800,10);sleep(1000);
    press(540,960,10);sleep(20);            //第二次挑战BOSS
    press(540,960,10);sleep(2000);
    for(i=0;i<8;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);

    press(1023,65,10);sleep(10);            //点叉关闭
    press(1023,65,10);sleep(800); 
    for(i=0;i<5;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);

    //国运任务
    press(275,1560,10);sleep(10);
    press(275,1560,10);sleep(800);
    for(i=0;i<4;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(1200);
    press(235,1645,10);sleep(20);           //国运任务等级奖励
    press(235,1645,10);sleep(1500);

    for(i=0;i<8;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);
    press(840,435,10);sleep(50);            //前往妃子谈心
    press(840,435,10);sleep(800);
    for(i=0;i<5;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);
    press(1040,56,10);sleep(800);           //点叉关闭
    press(990,1760,10);sleep(800);          //从后宫返回
    for(i=0;i<2;i++){
        press(540,1600,10);sleep(100);
        press(540,1600,10);sleep(100);
    }
    sleep(2000);

    //七日登陆
    press(635,185,10);sleep(10);
    press(635,185,10);sleep(800);
    for(i=0;i<10;i++){
        press(750,1500,10);sleep(50);
        press(750,1500,10);sleep(50);
    }
    sleep(1200);
    press(935,1220,10);sleep(1200);
    for(i=0;i<20;i++){
        press(750,1400,10);sleep(50);
        press(750,1400,10);sleep(50);
    }
    sleep(1200);
    press(980,100,10);sleep(10);            //回宫
    press(980,100,10);sleep(1500);
}


function main(){
    device.setBrightness(0);
    log("当前电量:"+device.getBattery()+"%");sleep(100);
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
    Power();                                //Root权限
}

main();
