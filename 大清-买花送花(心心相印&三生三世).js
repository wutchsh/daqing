
/*  
    作者:wuhtchsh@gmail.com
    游戏版本：我在大清当皇帝(v5.4)
    请勿用作商业用途，禁止用此脚本及衍生脚本盈利。
    买花送花
*/

auto();
images.requestScreenCapture();sleep(200);
var dir = "/sdcard/脚本/daqing";
var n = 0;
var acc = "";
var accid = "";
var she = "1138";
var Array = [];
var mode = 0;
var logurl = "";
var point1;
var point2;
var template1 = images.read(dir+"/xinxin.png");
var template2 = images.read(dir+"/sansheng.png");
var template3 = images.read(dir+"/xinxin1.png");
var template4 = images.read(dir+"/sansheng1.png");


if(mode == 0){
    acc = "csjyf";
    n0 = 0;
    N = 100;
    Array = [1,4,11,18,20,31,35,36,40,41,42,43,44,48,49,50,86,87,88,89,90,91,92,93,94];
}
else if(mode == 1){
    acc = "TaIzu";
    n0 = 1;
    N = 50;
    Array = [16,17,18,19,20,21,22];
}

main();

function main(){
    var date = new Date();
    var time = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    logurl = dir+"/log/买花送花_"+time+".txt"
    files.write(logurl, "", encoding = "utf-8");sleep(100);
    files.append(logurl, "\n********** "+time+" **********\n", encoding = 'utf-8');sleep(200);
    for(n = n0;n <= N;n++){
        sleep(500);
        base();
    }
    // 运行结束循环震动通知
    for(k=0;k<30;k++){
        device.vibrate(1000);sleep(500);
        device.cancelVibration();sleep(200);
    }
}

function base(){
    // 切换账号并进入珍宝阁道具界面
    account();sleep(1000);
    press(540,1600,10);sleep(500); // 登基&上朝，进入金銮殿界面
    press(540,1110,10);sleep(200);  //可能出现的领取充值礼包界面及VIP等级提升界面
    press(540,1110,10);sleep(200);
    press(540,1110,10);sleep(4000);
    press(540,980,10);sleep(100);
    press(540,980,10);sleep(100);
    press(540,980,10);sleep(100);
    press(540,980,10);sleep(100);
    press(540,980,10);sleep(600);
    press(1010,90,10);sleep(600);  // 回宫，回到主界面

    purchace();
    press(1010,90,10);sleep(600); 
    songhua();
    press(1010,90,10);sleep(600);

    press(90,100,10);sleep(600);   // 点击头像
    press(880,1850,10);sleep(600); // 选择区服
    log("----> 账号："+accid+",操作完成 <----");
}

function inputacc(){
    if(n < 10){
        accid = acc + "0"+ n;
    }
    else{
        accid = acc + n;
    }
    press(540,720,10);sleep(500); 
    setText(0,accid);sleep(200);
    press(540,180,10);sleep(300);
    press(540,1120,10);sleep(300);   //登录账号
}

function account(){
    sleep(500);
    press(990,1710,10);sleep(500); // 开始切换账号
    press(540,1040,10);sleep(500);  //按钮“切换账号”
    while(ofArray(Array,n)){
        log("**跳过该账号:"+n+"\t<--------\n\n");
        n += 1;
    }
    inputacc();
}

function ofArray(array,n){
    var m =array.length;
    for(i = 0;i < m;i++){
        if(n == array[i]){
            return true;
            break;
        }
    }
    return false;
}

function imgdect(temp,x,y,w,h){
    img0 = captureScreen();sleep(500);
    var point = images.findImage(img0, temp, {
        region: [x, y, w, h],
        threshold: 0.8
    });
    return point;
}

function purchace(){
    sleep(1000);
    press(630,1830,10);sleep(500);  // 由主界面进入商城
    press(660,590,10);sleep(200);   //进入花市
    swipe(705,1600,705,1000,300);sleep(500);
    point1 = imgdect(template1,120, 1000, 850, 800);sleep(200);
    point2 = imgdect(template2,120, 1000, 850, 800);sleep(200);
    if(point1){
        sleep(150);
        press(point1.x+80,point1.y+290,10);sleep(600);
        swipe(300,980,900,980,200);sleep(300);
        press(755,1110,10);sleep(200);
        // 判断是否弹出购买确认界面
        var img = captureScreen();sleep(100);
        if(images.detectsColor(img, "#ff0c8c93", 705,1080)){
            press(870,1180,10);sleep(100);
            press(755,1080,10);sleep(200);
        }
        press(point1.x+80,point1.y+290,10);sleep(500);
    }
    else{
        log("\n账号:"+accid+" ，购买每周心心相印失败\t<--------\n");
    }
    if(point2){
        sleep(150);
        press(point2.x+80,point2.y+290,10);sleep(600);
        swipe(300,980,900,980,200);sleep(300);
        press(755,1110,10);sleep(200);
        // 判断是否弹出购买确认界面
        img = captureScreen();sleep(100);
        if(images.detectsColor(img, "#ff0c8c93", 705,1080)){
            press(870,1180,10);sleep(100);
            press(755,1080,10);sleep(200);
        }
        press(point2.x+80,point2.y+290,10);sleep(500);
    }
    else{
        log("\n账号:"+accid+" ，购买每周三生三世失败\t<--------\n");
        exit();
    }
    swipe(705,1000,705,1600,300);sleep(500);
    point1 = imgdect(template1,450, 630, 510, 300);sleep(200);
    point2 = imgdect(template2,450, 630, 510, 300);sleep(200);
    if(point1){
        sleep(150);
        press(point1.x+80,point1.y+290,10);sleep(600);
        press(755,1110,10);sleep(300);
        // 判断是否弹出购买确认界面
        img = captureScreen();sleep(100);
        if(images.detectsColor(img, "#ff0c8c93", 705,1080)){
            press(870,1180,10);sleep(100);
            press(755,1080,10);sleep(200);
        }
        press(point1.x+80,point1.y+290,10);sleep(500);
    }
    else{
        log("\n账号:"+accid+" ，购买每日心心相印失败\t<--------\n");
    }
    if(point2){
        sleep(150);
        press(point2.x+80,point2.y+290,10);sleep(600);
        press(755,1110,10);sleep(300);
        // 判断是否弹出购买确认界面
        img = captureScreen();sleep(100);
        if(images.detectsColor(img, "#ff0c8c93", 705,1080)){
            press(870,1180,10);sleep(100);
            press(755,1080,10);sleep(200);
        }
        press(point2.x+80,point2.y+290,10);sleep(500);
    }
    else{
        log("\n账号:"+accid+" ，购买每日三生三世失败\t<--------\n");
    }

    sleep(1000);
}

function songhua(){
    sleep(1000);
    press(450,1830,10);sleep(500);  // 由主界面进入珍宝阁
    press(420,230,10);sleep(300);   // 道具
    point1 = imgdect(template3,80, 300, 920, 1140);sleep(100);
    point2 = imgdect(template4,80, 300, 920, 1140);sleep(100);
    if(point1 && point2){
        sleep(300);
        press(point1.x+90,point1.y+90,10);sleep(600);
        press(880,point1.y+500,10);sleep(400);
        press(540,790,20);sleep(300);
        setText(0,she);sleep(200);
        press(540,900,10);sleep(500);
        swipe(340,1400,900,1400,100);sleep(200);
        press(540,1490,10);sleep(200);
        press(540,1490,10);sleep(200);
        press(point1.x+90,point1.y+90,10);sleep(600);

        sleep(300);
        press(point2.x+90,point2.y+90,10);sleep(600);
        press(880,point2.y+500,10);sleep(400);
        press(540,790,20);sleep(300);
        setText(0,she);sleep(200);
        press(540,900,10);sleep(500);
        swipe(340,1400,900,1400,100);sleep(200);
        press(540,1490,10);sleep(200);
        press(540,1490,10);sleep(200);
        press(point2.x+90,point2.y+90,10);sleep(600);
    }
    else if(point1 || point2){
        var point;
        if(point1){
            point = point1;
        }else{
            point = point2;
        }
        sleep(300);
        press(point.x+90,point.y+90,10);sleep(600);
        press(880,point.y+500,10);sleep(400);
        press(540,790,20);sleep(300);
        setText(0,she);sleep(200);
        press(540,900,10);sleep(500);
        swipe(340,1400,900,1400,100);sleep(200);
        press(540,1490,10);sleep(200);
        press(540,1490,10);sleep(200);
        press(point.x+90,point.y+90,10);sleep(600);

        swipe(540,1500,540,400,300);sleep(300);
        point1 = imgdect(template3,80, 300, 920, 1140);sleep(100);
        point2 = imgdect(template4,80, 300, 920, 1140);sleep(100);
        if(point1){
            point = point1;
        }else{
            point = point2;
        }
        sleep(300);
        press(point.x+90,point.y+90,10);sleep(600);
        press(880,point.y+500,10);sleep(400);
        press(540,790,20);sleep(300);
        setText(0,she);sleep(200);
        press(540,900,10);sleep(500);
        swipe(340,1400,900,1400,100);sleep(200);
        press(540,1490,10);sleep(200);
        press(540,1490,10);sleep(200);
        press(point.x+90,point.y+90,10);sleep(600);
        return;
    }
    else{
        swipe(540,1500,540,400,300);sleep(300);
        point1 = imgdect(template3,80, 300, 920, 1140);sleep(100);
        point2 = imgdect(template4,80, 300, 920, 1140);sleep(100);
        if(point1 && point2){
            sleep(300);
            press(point1.x+90,point1.y+90,10);sleep(600);
            press(880,point1.y+500,10);sleep(400);
            press(540,790,20);sleep(300);
            setText(0,she);sleep(200);
            press(540,900,10);sleep(500);
            swipe(340,1400,900,1400,100);sleep(200);
            press(540,1490,10);sleep(200);
            press(540,1490,10);sleep(200);
            press(point1.x+90,point1.y+90,10);sleep(600);

            sleep(300);
            press(point2.x+90,point2.y+90,10);sleep(600);
            press(880,point2.y+500,10);sleep(400);
            press(540,790,20);sleep(300);
            setText(0,she);sleep(200);
            press(540,900,10);sleep(500);
            swipe(340,1400,900,1400,100);sleep(200);
            press(540,1490,10);sleep(200);
            press(540,1490,10);sleep(200);
            press(point2.x+90,point2.y+90,10);sleep(600);
        }
        else if(point1 || point2){
            var point;
            if(point1){
                point = point1;
            }else{
                point = point2;
            }
            sleep(300);
            press(point.x+90,point.y+90,10);sleep(600);
            press(880,point.y+500,10);sleep(400);
            press(540,790,20);sleep(300);
            setText(0,she);sleep(200);
            press(540,900,10);sleep(500);
            swipe(340,1400,900,1400,100);sleep(200);
            press(540,1490,10);sleep(200);
            press(540,1490,10);sleep(200);
            press(point.x+90,point.y+90,10);sleep(600);
    
            swipe(540,1500,540,400,300);sleep(300);
            point1 = imgdect(template3,80, 300, 920, 1140);sleep(100);
            point2 = imgdect(template4,80, 300, 920, 1140);sleep(100);
            if(point1){
                point = point1;
            }else{
                point = point2;
            }
            sleep(300);
            press(point.x+90,point.y+90,10);sleep(600);
            press(880,point.y+500,10);sleep(400);
            press(540,790,20);sleep(300);
            setText(0,she);sleep(200);
            press(540,900,10);sleep(500);
            swipe(340,1400,900,1400,100);sleep(200);
            press(540,1490,10);sleep(200);
            press(540,1490,10);sleep(200);
            press(point.x+90,point.y+90,10);sleep(600);
            return;
        }
        else{
            swipe(540,1500,540,400,300);sleep(300);
            point1 = imgdect(template3,80, 300, 920, 1140);sleep(100);
            point2 = imgdect(template4,80, 300, 920, 1140);sleep(100);
            if(point1 && point2){
                sleep(300);
                press(point1.x+90,point1.y+90,10);sleep(600);
                press(880,point1.y+500,10);sleep(400);
                press(540,790,20);sleep(300);
                setText(0,she);sleep(200);
                press(540,900,10);sleep(500);
                swipe(340,1400,900,1400,100);sleep(200);
                press(540,1490,10);sleep(200);
                press(540,1490,10);sleep(200);
                press(point1.x+90,point1.y+90,10);sleep(600);
    
                sleep(300);
                press(point2.x+90,point2.y+90,10);sleep(600);
                press(880,point2.y+500,10);sleep(400);
                press(540,790,20);sleep(300);
                setText(0,she);sleep(200);
                press(540,900,10);sleep(500);
                swipe(340,1400,900,1400,100);sleep(200);
                press(540,1490,10);sleep(200);
                press(540,1490,10);sleep(200);
                press(point2.x+90,point2.y+90,10);sleep(600);
            }
            else if(point1 || point2){
                var point;
                if(point1){
                    point = point1;
                }else{
                    point = point2;
                }
                sleep(300);
                press(point.x+90,point.y+90,10);sleep(600);
                press(880,point.y+500,10);sleep(400);
                press(540,790,20);sleep(300);
                setText(0,she);sleep(200);
                press(540,900,10);sleep(500);
                swipe(340,1400,900,1400,100);sleep(200);
                press(540,1490,10);sleep(200);
                press(540,1490,10);sleep(200);
                press(point.x+90,point.y+90,10);sleep(600);
        
                swipe(540,1500,540,400,300);sleep(300);
                point1 = imgdect(template3,80, 300, 920, 1140);sleep(100);
                point2 = imgdect(template4,80, 300, 920, 1140);sleep(100);
                if(point1){
                    point = point1;
                }else{
                    point = point2;
                }
                sleep(300);
                press(point.x+90,point.y+90,10);sleep(600);
                press(880,point.y+500,10);sleep(400);
                press(540,790,20);sleep(300);
                setText(0,she);sleep(200);
                press(540,900,10);sleep(500);
                swipe(340,1400,900,1400,100);sleep(200);
                press(540,1490,10);sleep(200);
                press(540,1490,10);sleep(200);
                press(point.x+90,point.y+90,10);sleep(600);
                return;
            }
            else{
                log("账号:"+accid+",未找到花！\t<--------\n\n");sleep(200);
            }
        }
    }
}
