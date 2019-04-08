auto();
images.requestScreenCapture();sleep(200);
var n = 0;
var acc = "";
var accid = "";
Array = [3,4,6,8,10,11,15,16,18,19,21,25,29,30,31,35,36,40];

function libao(){
    sleep(1000);
    press(630,1839,10);sleep(300);  // 由主界面进入商城
    press(420,580,10);sleep(200);
    swipe(540,1800,540,100,300);sleep(100); 
    press(910,1230,10);sleep(100);
    swipe(300,980,900,980,50);sleep(100);
    press(750,1100,10);sleep(100);
    // 购买界面检测
    if(images.detectsColor(img, "#ff0c8c93", 705,1080)){
        press(870,1180,10);sleep(300);
        press(755,1080,10);sleep(200);
    }
    for(i=0;i<60;i++){
        press(910,1230,10);sleep(100);
        swipe(300,980,900,980,50);sleep(100);
        press(750,1100,10);sleep(100);
        press(1030,1110,10);sleep(100);
    }
}

function inputacc(){
    if(n < 10){
        accid = acc + "0"+ n;
    }
    else{
        accid = acc + n;
    }
    click(540,720);sleep(500);
    setText(0,accid);sleep(500);
    press(540,180,10);sleep(500);
    press(540,1120,10);sleep(500);   //登录账号
}

function account(){
    sleep(500);
    press(990,1710,10);sleep(500); // 开始切换账号
    press(540,1040,10);sleep(500);  //按钮“切换账号”
    inputacc();
    while(images.detectsColor(captureScreen(), "#ff013f40", 250,960)){
        log(accid +"：该账号未注册！");sleep(500);
        n += 1;
        inputacc();
    }
}

function base(){
    // 切换账号并进入珍宝阁道具界面
    account();sleep(1000);
    press(540,1540,10);sleep(5000); // 登基&上朝，进入金銮殿界面
    press(540,980,10);sleep(200);
    press(540,980,10);sleep(200);
    press(540,980,10);sleep(2000);
    press(1010,90,10);sleep(1000);  // 回宫，回到主界面
    
    libao();
    press(1010,90,10);sleep(1000);
    press(90,100,10);sleep(1000);   // 点击头像
    press(880,1850,10);sleep(1000); // 选择区服
}

function main(){
    for(n = n0;n <= N;n++){
        sleep(500);
        base();
    }
}

main();