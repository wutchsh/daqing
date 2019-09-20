/*  
    作者:wuhtchsh@gmail.com
    游戏版本：我在大清当皇帝(v5.80)
    请勿用作商业用途，禁止用此脚本及衍生脚本盈利。
*/

auto();
images.requestScreenCapture();sleep(200);
var dir = "/sdcard/脚本/daqing";
var battle = images.read(dir+"/battle.png");
var stat;

function imgdect(temp,x,y,w,h){ 
    img0 = captureScreen();sleep(500);
    var point = images.findImage(img0, temp, {
        region: [x, y, w, h],
        threshold: 0.8
    });
    return point;
}

tuitu();
function tuitu(){
    var point = imgdect(battle,40,400,1000,900);sleep(50);      //检测据点
    var stat0 = images.detectsColor(captureScreen(), "#ffbf3a1e", 940,1690);sleep(200); //检测快捷推图
    var stat2 = images.detectsColor(captureScreen(), "#ff0d9a9d", 620,1810);sleep(200); //检测1-5完成后即将进入尚衣监

    while(true){
        if(stat0){
            while(stat0){
                log("开始循环快捷推图!");sleep(100);
                while(stat0){
                    log("继续快捷推图!");
                    for(j=0;j<5;j++){
                        press(860,1690,10);sleep(200);
                        press(755,1115,10);sleep(200);
                        for(i=0;i<30;i++){
                            press(540,1450,10);sleep(50);
                        }
                    }
                    stat0 = images.detectsColor(captureScreen(), "#ffbf3a1e", 940,1690);sleep(200);
                }
                for(i=0;i<40;i++){
                    press(540,1450,10);sleep(100);
                }
                if(images.detectsColor(captureScreen(), "#ffc43e21", 670,1440)){
                    log("检测到'已阅'!");sleep(100);
                    press(720,1440,10);sleep(1000);
                }
                stat0 = images.detectsColor(captureScreen(), "#ffbf3a1e", 940,1690);sleep(200);
            }
        }
        else if(point && stat2){
            log("1-5完毕，即将进入尚衣监!");
            press(540,1810,10);sleep(1000);
            for(i=0;i<60;i++){
                press(540,1450,10);sleep(50);
            }
            press(1010,90,10);sleep(1200);
            press(990,1770,10);sleep(1500);
            swipe(100,280,1000,300,300);sleep(100);
            swipe(100,280,1000,300,300);sleep(300);
            press(650,1400,10);sleep(800);
            log("从尚衣监重新返回征战世界界面!");
        }
        else if(! stat0 && ! point){
            log("第一章1-10完毕,进入第二章!");sleep(100);
            press(540,1300,10);sleep(300);
        }
        else{
            log("未检测到快捷战斗，即将进入每个据点!");
            point = imgdect(battle,40,400,1000,900);sleep(50);
            if(point){
                press(point.x+30,point.y+30,10);sleep(300);
                var stat1 = images.detectsColor(captureScreen(), "#ffc33e21", 870,1650);sleep(200);  //检测开战
                while(stat1){
                    for(i=0;i<10;i++){
                        press(820,1650,10);sleep(200);
                        press(820,1650,10);sleep(200);
                    }
                    sleep(1500);
                    for(i=0;i<10;i++){
                        press(540,1450,10);sleep(200);
                    }
                    stat1 = images.detectsColor(captureScreen(), "#ffc33e21", 870,1650);sleep(200);
                }
                point = imgdect(battle,40,400,1000,900);sleep(50);
                if(!point){
                    for(i=0;i<20;i++){
                        press(540,1450,10);sleep(200);
                    }
                    if(images.detectsColor(captureScreen(), "#ffc43e21", 670,1440)){
                        log("1-1完毕,开始快捷推图!");
                        press(720,1440,10);sleep(500);
                    }
                }
            }
        }
        point = imgdect(battle,40,400,1000,900);sleep(50);
        stat0 = images.detectsColor(captureScreen(), "#ffbf3a1e", 940,1690);sleep(200);
        stat2 = images.detectsColor(captureScreen(), "#ff0d9a9d", 620,1810);sleep(200);
    }
}