/*  
    作者:wuhtchsh@gmail.com
    游戏版本：我在大清当皇帝(v5.5)
    请勿用作商业用途，禁止用此脚本及衍生脚本盈利。
*/

auto();
images.requestScreenCapture();sleep(200);
var dir = "/sdcard/脚本/daqing";
var n = 0;
var acc = "";
var accid = "";
var Array = [];
var mode = 0;
var logurl = "";
var template1 = images.read(dir+"/xianshi.png");
var template2 = images.read(dir+"/xsjiangli.png");
var template3 = images.read(dir+"/reddot.png");


if(mode == 0){
    acc = "csjyf";
    n0 = 1;
    N = 15;
    // Array = [35,36,40];
}
else if(mode == 1){
    acc = "dyw0";
    n0 = 0;
    N = 10;
    // Array = [];
}

function imgdect(temp,x,y,w,h){ 
    img0 = captureScreen();sleep(500);
    var point = images.findImage(img0, temp, {
        region: [x, y, w, h],
        threshold: 0.8
    });
    return point;
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

function xianshi(){
    var point1 = imgdect(template1,880,200,180,800);sleep(100);
    if(point1){
        press(point1.x+70,point1.y+70,10);sleep(500);
        var point2 = imgdect(template2,530,330,500,1450);sleep(100);
        if(point2){
            press(point2.x+320,point2.y+180,10);sleep(500);
            var point3 = imgdect(template3,220,200,60,1630);sleep(100);
            while(point3){
                press(540,point3.y+100,10);sleep(500);
                press(540,1850,10);sleep(20);
                press(540,1850,10);sleep(100);
                press(540,1850,10);sleep(300);
                press(1030,50,10);sleep(500);
                point3 = imgdect(template3,220,200,60,1630);sleep(100);
            }
            log("账号"+accid+"：领取限时奖励完成！");sleep(500)
        }
    }
    press(1010,50,10);sleep(500);  // 返回金銮殿
    press(1010,50,10);sleep(500);
}


function base(){
    // 切换账号并进入珍宝阁道具界面
    account();sleep(1000);
    press(540,1600,10);sleep(500); // 登基&上朝，进入金銮殿界面
    press(540,1110,10);sleep(200);  //可能出现的领取充值礼包界面及VIP等级提升界面
    press(540,1110,10);sleep(200);
    press(540,1110,10);sleep(3000); //默认5000
    press(540,980,10);sleep(100);
    press(540,980,10);sleep(200);

    xianshi();sleep(500);

    press(90,100,10);sleep(1000);   // 点击头像
    press(880,1850,10);sleep(1000); // 选择区服
    log("账号"+accid+"--OK");
}

function main(){
    device.setBrightness(0);
    for(n = n0;n <= N;n++){
        sleep(500);
        base();
    }
    // 运行结束关闭屏幕并循环震动通知
    Power();                    //Root权限
    device.setBrightness(5);
    for(k=0;k<10;k++){
        device.vibrate(600);sleep(400);
        device.cancelVibration();sleep(200);
    }
}

main();