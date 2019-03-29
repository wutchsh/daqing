/*  
    作者:wuhtchsh@gmail.com
    游戏版本：我在大清当皇帝(v5.4)
    请勿用作商业用途，禁止用此脚本及衍生脚本盈利。
*/

auto();
requestScreenCapture();sleep(200);
var template = images.read("/sdcard/脚本/daqing/hongbao.png");

function imgdect(temp,x,y,w,h){
    img0 = captureScreen();sleep(200);
    var point = images.findImage(img0, temp, {
        region: [x, y, w, h],
        threshold: 0.8
    });
    return point;
}

function hbstatus(){
    if(images.detectsColor(captureScreen(), "#fffec54e", 570,670)){
        log("红包界面退出失败！重新关闭！");sleep(200);
        press(845,625,10);sleep(300);
    }
    else if(images.detectsColor(captureScreen(), "#fffac14b", 570,715)){
        log("打开了已抢过的红包！重新关闭！");sleep(200);
        press(845,670,10);sleep(300);
    }
    else if(images.detectsColor(captureScreen(), "#ffeaca67", 540,750)){
        log("红包已经被抢光！关闭红包界面！");sleep(200);
        press(845,625,10);sleep(300);
    }
}

while(true){
    press(540,1700,10);sleep(200);
    hbstatus();
    if(images.detectsColor(captureScreen(), "#fffcfae2", 540,850)){
        log("检测到连接失败！");
        press(540,1070,10);sleep(200);
    }
    var point = imgdect(template, 150, 250, 900, 1500);
    if(point){
        press(point.x+270,point.y+150,10);sleep(1000);
        press(845,625,10);sleep(300);
        hbstatus();
        press(1010,90,10);sleep(500);
    }
    else{
        press(1010,90,10);sleep(500);
    }
}