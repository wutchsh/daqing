/*  
    作者:wuhtchsh@gmail.com
    游戏版本：我在大清当皇帝(v5.6.1)
    请勿用作商业用途，禁止用此脚本及衍生脚本盈利。
*/
auto();
images.requestScreenCapture();sleep(200);
var stat;
var dir = "/sdcard/脚本/daqing";
var template = images.read(dir+"/rank.png");
var template1 = images.read(dir+"/xianshi.png");
var template2 = images.read(dir+"/xsjiangli.png");
var template3 = images.read(dir+"/reddot.png");
var mailimg = images.read(dir+"/mail.png");
var mailimg1 = images.read(dir+"/mailimg1.png");    //"领取"模板
var mailimg2 = images.read(dir+"/mailimg2.png");    //"朕知道了"模板
var jsfuben = images.read(dir+"/jsfuben.png");  // 僵尸副本入口


main();
function main(){
    mobai();
    huangzi();
    taizi();
    junjichu();
    hougong();
    guojiarenwu();
    jiangshi();
    canglong();
    xianshi();
    mail();
    log("全部处理完成！")
}

function imgdect(temp,x,y,w,h){ 
    img0 = captureScreen();sleep(500);
    var point = images.findImage(img0, temp, {
        region: [x, y, w, h],
        threshold: 0.8
    });
    return point;
}

function mobai(){
    var point = imgdect(template,10,200,180,700);sleep(20);
    if(point){
        press(point.x+70,point.y+70,10);sleep(800);
        for(i=0;i<3;i++){
            for(j=0;j<40;j++){
                press(895,1730,10);sleep(15);
                press(540,1170,10);sleep(15);
            }
            swipe(900,1200,600,1200,200);sleep(300);
        }
    }
    press(1010,90,10);sleep(1000);  // 返回金銮殿
    press(1010,90,10);sleep(1000);  // 返回主界面
    log("膜拜完成！");sleep(500);
}

function huangzi(){
    swipe(100,280,1000,300,300);sleep(100);
    swipe(100,280,1000,300,300);sleep(300);
    press(500,480,10);sleep(1500);
    press(690,1825,10);sleep(1500);
    press(540,1000,10);sleep(100);
    press(540,1000,10);sleep(500);
    press(690,1825,10);sleep(1500);
    press(540,1000,10);sleep(100);
    press(540,1000,10);sleep(2000);
    press(1020,90,10);sleep(1000);   // 回宫
    log("上书房皇子培养完成！");sleep(500);
}

function taizi(){
    swipe(100,280,1000,300,300);sleep(100);
    swipe(100,280,1000,300,300);sleep(300);
    press(200,680,10);sleep(800);
    press(770,1800,10);sleep(200);
    press(875,715,10);sleep(1200);
    press(540,930,10);sleep(100);
    press(540,930,10);sleep(100);
    press(540,930,10);sleep(300);
    press(1020,90,10);sleep(1000);
    stat = images.detectsColor(captureScreen(), "#ff4e4742", 900,380);
    while(stat){
        sleep(1000);
        press(540,930,10);sleep(300);
        press(1030,55,10);sleep(200);   // 按钮“X”
        stat = images.detectsColor(captureScreen(), "#ff4e4742", 900,380);
    }
    press(585,1800,10);sleep(100);
    press(420,220,10);sleep(100);
    press(390,1690,10);sleep(1200);
    press(540,930,10);sleep(100);
    press(540,930,10);sleep(100);
    press(540,930,10);sleep(300);
    press(1030,55,10);sleep(500);
    stat = images.detectsColor(captureScreen(), "#ff2e2c2c", 900,380);
    while(stat){
        sleep(1000);
        press(540,930,10);sleep(300);
        press(1030,55,10);sleep(500);
        stat = images.detectsColor(captureScreen(), "#ff2e2c2c", 900,380);
    }
    press(1020,90,10);sleep(1000);   // 回宫
    log("东宫太子培养完成！");sleep(500);
}

function junjichu(){
    swipe(100,280,1000,300,300);sleep(100);
    swipe(100,280,1000,300,300);sleep(300);
    press(400,1120,10);sleep(1500);
    stat = images.detectsColor(captureScreen(), "#ff2b2726", 540,1500);
    while(!stat){
        press(110,1180,10);sleep(1000);
        stat = images.detectsColor(captureScreen(), "#ff2b2726", 540,1500);sleep(300);
    }
    press(986,45,10);sleep(800);
    press(1020,90,10);sleep(1000);
    stat = images.detectsColor(captureScreen(), "#ff5095a2", 650,1300);
    while(stat){
        sleep(1000);
        press(1020,90,10);sleep(1000);
        stat = images.detectsColor(captureScreen(), "#ff5095a2", 650,1300);
    }
    log("军机处理政完成！");sleep(500);
}

function hougong(){
    swipe(100,280,1000,300,300);sleep(100);
    swipe(100,280,1000,300,300);sleep(300);
    press(740,680,10);sleep(800);
    swipe(100,280,1000,300,300);sleep(100);
    swipe(100,280,1000,300,300);sleep(100);
    press(740,860,10);sleep(800);
    press(540,1825,10);sleep(2000);
    press(720,1100,10);sleep(100);
    press(720,1100,10);sleep(100);
    press(720,1100,10);sleep(200);
    press(540,1825,10);sleep(2000);
    press(720,1100,10);sleep(100);
    press(720,1100,10);sleep(100);
    press(720,1100,10);sleep(200);
    press(1030,55,10);sleep(200);
    if(!images.detectsColor(captureScreen(), "#ff2b211a", 715,1800)){
        sleep(1000);press(1030,55,10);sleep(200);
    }
    press(1020,50,10);sleep(1000);
    log("后宫一键谈心完成！");sleep(500);
}

function guojiarenwu(){
    press(220,1535,10);sleep(1000);
    if(!images.detectsColor(captureScreen(), "#fff7f1d9", 1000,400)){
        press(220,1535,10);sleep(500);
    }
    press(865,780,10);sleep(1000);
    press(540,1300,10);sleep(500);
    press(1020,50,10);sleep(1000);
    log("获取国家奖励元宝完成！");sleep(500);
}

// 僵尸一键讨伐
function jiangshi(){
    press(990,1770,10);sleep(800);
    swipe(100,280,1000,300,300);sleep(100);
    swipe(100,280,1000,300,300);sleep(300);
    press(915,1020,10);sleep(800);
    var point = imgdect(jsfuben,560,360,420,1460);
    if(point){
        press(point.x+300,point.y+240,10);sleep(800);
        if(!images.detectsColor(captureScreen(), "#ffbf3a1d", 847,820)){
            sleep(1000);
            press(point.x+300,point.y+240,10);sleep(800);
        }
        press(847,820,10);sleep(1200);
        log("僵尸军团扫荡界面！");sleep(200);
        press(540,1440,10);sleep(3000);
        press(540,300,10);sleep(500);
        press(1020,50,10);sleep(500);
        press(1020,50,10);sleep(500);
    }else{
        log("僵尸检测失败！");
    }
    press(1020,90,10);sleep(1000);
    press(990,1770,10);sleep(800);
    log("僵尸任务完成!");sleep(500);
}

// 苍龙七宿
function canglong(){
    press(990,1770,10);sleep(800);
    swipe(100,280,1000,300,300);sleep(100);
    swipe(100,280,1000,300,300);sleep(300);
    press(630,540,10);sleep(500);
    for(k=0;k<20;k++){
        press(540,1240,10);sleep(100);
    }
    sleep(500);
    press(920,1750,10);sleep(2000);
    if(images.detectsColor(captureScreen(), "#fffdfabc", 938,1769)){
        log("需要重新配置大臣!");sleep(500)
        press(530,1780,10);sleep(1500);
        for(i=0;i<5;i++){
            if(images.detectsColor(captureScreen(), "#ff4d4641", 900,445+285*i)){
                press(900,445+285*i,10);sleep(600);
                press(815,425,10);sleep(200);
            }  
        }
        press(940,1820,10);sleep(1000);
        press(1030,55,10);sleep(200);
        press(920,1750,10);sleep(2000);
    }
    log("进入苍龙七宿战斗界面！");sleep(3500);
    press(950,1770,10);sleep(200);
    press(950,1770,10);sleep(10000);
    press(1040,75,10);sleep(500);
    var stat = images.detectsColor(captureScreen(), "#fffdfabc", 938,1769);
    while(!stat){
        press(900,950,10);sleep(5000);
        press(1040,75,10);sleep(500) ;
        stat = images.detectsColor(captureScreen(), "#fffdfabc", 938,1769);
    }
    log("苍龙七宿战斗完成！");sleep(200);
    press(1020,90,10);sleep(1000);
    press(990,1770,10);sleep(1200);
    log("苍龙七宿获取元宝及自动进攻完成！");sleep(500);
}

function xianshi(){
    var point1 = imgdect(template1,540,200,520,800);sleep(100);
    if(point1){
        log("检测到限时任务界面！");sleep(200);
        press(point1.x+70,point1.y-30,10);sleep(500);
        var point2 = imgdect(template2,530,330,500,1450);sleep(100);
        if(point2){
            press(point2.x+320,point2.y+180,10);sleep(800);
            var point3 = imgdect(template3,220,250,60,1400);sleep(100);
            while(point3){
                press(540,point3.y+100,10);sleep(200);
                press(540,1850,10);sleep(10);
                press(540,1850,10);sleep(200);
                press(770,1000,10);sleep(10);
                press(770,1000,10);sleep(200);
                press(1030,50,10);sleep(1300);
                point3 = imgdect(template3,220,250,60,1400);sleep(100);
            }
            log("领取限时奖励完成！");sleep(1000)
        }
    }
    press(1010,50,10);sleep(800);
    press(1010,50,10);sleep(1000);
}

//临时领取福利邮件
function mail(){
    sleep(500);
    press(1000,1530,10);sleep(1000);
    var mailpoint = imgdect(mailimg, 50, 330, 250, 200);
    while(mailpoint){
        log("已定位未读邮件！");
        press(mailpoint.x+80,mailpoint.y+80,10);sleep(500);
        var mailpoint1 = imgdect(mailimg1, 400, 600, 280, 1100);
        if(mailpoint1){
            press(mailpoint1.x+110,mailpoint1.y+35,10);sleep(300);
            press(mailpoint1.x+110,mailpoint1.y+35,10);sleep(500);
            press(mailpoint1.x+110,mailpoint1.y+35,10);sleep(300);
            log("领取邮件成功");sleep(100);
        }
        else{
            var mailpoint2 = imgdect(mailimg2, 400, 600, 280, 1100);
            press(mailpoint2.x+110,mailpoint2.y+35,10);sleep(20);
            press(mailpoint2.x+110,mailpoint2.y+35,10);sleep(300);
            log("没有可领取资源\t<--------");sleep(100);
        }
        press(420,220,10);sleep(500);
        press(180,220,10);sleep(1000);
        mailpoint = imgdect(mailimg, 50, 330, 250, 200);
    }
    press(1010,90,10);sleep(500);
    log("领取邮件完成！");
    sleep(1000);
}