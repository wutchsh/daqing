/*  
    作者:wuhtchsh@gmail.com
    游戏版本：我在大清当皇帝(v5.80)
    请勿用作商业用途，禁止用此脚本及衍生脚本盈利。
    后宫自动谈心生娃，达到指定数量后，跳转上书房
    自动取名，喂汤，一键培养
*/
  
auto();
images.requestScreenCapture();sleep(200);
device.setBrightness(0);
var N = 1;      // 定义上书房空位或者生几个娃进行一次培养
var M = 10;     // 循环M次，如果丹药足够，累计生娃M*N个，因此根据需要合理的设定M值


function tanxin(){
    var n = 0;                      //判断生娃是否到上书房最大数量
    var img;

    // 使用双子丹
    press(180,600,10);sleep(300);
    press(90,640,10);sleep(300);
    img = captureScreen();sleep(100);
    if(images.detectsColor(img, "#ff0d9e9f", 820,1090)){
        log("开始使用双子丹");
        press(820,1090,20);sleep(300);
        press(1015,650,20);sleep(300);
        // 循环检测双子丹界面是否退出失败
        while(images.detectsColor(captureScreen(), "#fff1f2dc", 840,1090)){
            log("双子丹界面退出失败，重新退出！");
            press(1015,650,20);sleep(300);
        }
        press(1030,55,20);sleep(300);
    }else if(images.detectsColor(img, "#fff1f2dc", 840,1090)){
        log("已使用双子丹！");
        press(1015,650,20);sleep(300);
        press(1030,55,20);sleep(300);
    }else{
        log("未检测到双子丹界面，停止运行");
        for(p=0;p<30;p++){
            device.vibrate(1000);sleep(500);
            device.cancelVibration();sleep(200);
        }
        Power();exit();
    }

    //平均3次谈心可获得一个娃娃，最多需要3*N次，极限7*N
    for(i=0;i<20*N;i++){
        press(890,1845,10);sleep(150);  //点击谈心
        press(890,1845,10);sleep(300);  //连续点击关闭弹出的妃子界面
        press(890,1845,10);sleep(2000);
        var stat = images.detectsColor(captureScreen(), "#fff1e7cb", 730,1180);
        if(stat){
            n += 2;
            log("当前皇子数量："+n);
            if(n >= N){
                press(540,1360,20);sleep(500);
                return;
            }
            else{
                press(720,1000,10);sleep(300);  //点击关闭皇子界面
                press(720,1000,10);sleep(100);
                press(720,1000,10);sleep(100);
                press(720,1000,10);sleep(100);
                press(720,1000,10);sleep(1500); //缩短皇子界面关闭后转入双子丹界面的停顿时间
                // 重新使用双子丹
                press(180,600,10);sleep(300);
                press(90,640,10);sleep(300);
                img = captureScreen();sleep(100);
                if(images.detectsColor(img, "#ff0d9e9f", 820,1090)){
                    log("开始使用双子丹");
                    press(820,1090,20);sleep(300);
                    press(1015,650,20);sleep(300);
                    press(1030,55,20);sleep(300);
                }else if(images.detectsColor(img, "#fff1f2dc", 840,1090)){
                    log("已使用双子丹！");
                    press(1015,650,20);sleep(300);
                    press(1030,55,20);sleep(300);
                }else{
                    log("未检测到双子丹界面，停止运行");
                    device.setBrightness(5);
                    for(p=0;p<30;p++){
                        device.vibrate(1000);sleep(500);
                        device.cancelVibration();sleep(200);
                    }
                    Power();exit();
                }
            }
        }
    }
    log("**精力丹使用完毕！\t\t<----------\n");sleep(200);
    for(p=0;p<30;p++){
        device.vibrate(1000);sleep(500);
        device.cancelVibration();sleep(200);
    }
    Power();exit();

}

// 一个屏幕内的娃娃循环取名
function name(m){
    for(i=0;i<m;i++){
        press(895,385+295*i,10);sleep(200);
        press(810,870,10);sleep(100);   //随机取名
        press(540,1070,10);sleep(200);
        // 敏感词检测优先
        while(images.detectsColor(captureScreen(), "#ffce4727", 540,1085)){
            log("**检测到敏感词汇，重新随机命令！\t<----------\n");
            press(540,1085,10);sleep(200);
            press(810,870,10);sleep(200);
            press(540,1070,10);sleep(20);
            press(540,1070,10);sleep(250);
        }
        // 重名检测
        while(images.detectsColor(captureScreen(), "#ff432920", 540,700)){
            log("**检测到重名，重新随机命令！\t<----------\n");sleep(1000);
            press(810,870,10);sleep(200);
            press(540,1070,10);sleep(20);
            press(540,1070,10);sleep(200);
            while(images.detectsColor(captureScreen(), "#ffce4727", 540,1085)){
                log("**检测到敏感词汇，重新随机命令！\t<----------\n");
                press(540,1085,10);sleep(200);
                press(810,870,10);sleep(200);
                press(540,1070,10);sleep(20);
                press(540,1070,10);sleep(250);
            }
        }
        if(images.detectsColor(captureScreen(), "#ff504844", 810,485+295*i)){
            log("\t取名失败！\t<--------");
            for(i=0;i<10;i++){
                press(810,870,10);sleep(50);
            }
            log("\t重新取名");
        }else{
            log("\t取名成功！");
        }
        sleep(800);     // 取名间隔
    }
    log("批量取名完成");
}

// 加速、一键培养以及封爵
function jiasu(m){

    // 检测是否勾选专人培养
    if(images.detectsColor(captureScreen(), "#ff227281", 247,1822)){
        press(247,1822,20);sleep(1500);  //打开专人培养
        log("打开专人培养!");
    }
    if(images.detectsColor(captureScreen(), "#ff227281", 247,1822)){
        log("已打开专人培养失败！");
    }

    // press(685,1850,10);sleep(1500);  // 一键培养

    // 循环快捷培养
    for(i=0;i<m;i++){
        if(images.detectsColor(captureScreen(), "#ff656565", 810,488)){
            log("**活力丹用完了！\t\t<----------");
            Power();exit();
        }
        // 循环检测培养是否成功
        while(!images.detectsColor(captureScreen(), "#ff4e4743", 810,488+295*i)){
            press(895,488+295*i,10);sleep(50);
            press(895,488+295*i,10);sleep(200);
            press(755,1110,10);sleep(3000);
        }
    }
    log("批量快捷培养完成！");

    // 循环封爵
    for(i=0;i<m;i++){
        press(895,445,10);sleep(1000);
        press(895,445,10);sleep(1000);
    }
    log("批量封爵完成！");
}

function peiyang(N){
    if(N <= 5){
        name(N);sleep(500);
        jiasu(N);sleep(500);
    }
    else{
        name(5);sleep(500);
        jiasu(5);sleep(1500);
        name(N-5);sleep(500);
        jiasu(N-5);sleep(500);
    }
    log("批量培养(取名/培养/封爵)完成！");
}

function main(){
    device.setBrightness(0);
    var date = new Date();
    var time = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    log("****** "+time+" ******\n");
    // 在谈心界面运行脚本
    for(j=0;j<M;j++){
        tanxin();
        peiyang(N);
        var k = j+1;
        sleep(600);
        while(images.detectsColor(captureScreen(), "#ff2b2726", 540,1150)){
            press(690,1020,20);sleep(1200);  // 直接返回谈心界面
        }
        log("###### 第 "+k+" 轮循环完成 ######\n");
    }
    log("批量生娃完成，累计生娃："+ M*N +"\n");
    device.setBrightness(5);
    for(p=0;p<30;p++){
        device.vibrate(1000);sleep(500);
        device.cancelVibration();sleep(200);
    }
    device.setBrightness(10);
    Power();
}

main();
