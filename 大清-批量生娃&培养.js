/*  
    作者:wuhtchsh@gmail.com
    游戏版本：我在大清当皇帝(v5.4)
    请勿用作商业用途，禁止用此脚本及衍生脚本盈利。
    后宫自动谈心生娃，达到指定数量后，跳转上书房
    自动取名，喂汤，一键培养
*/

auto();
images.requestScreenCapture();sleep(200);
var N = 5;      // 定义上书房空位或者生几个娃进行一次培养
var M = 4;     // 循环M次，如果丹药足够，累计生娃M*N个，因此根据需要合理的设定M值
function tanxin(){
    var n = 0;                      //判断生娃是否到上书房最大数量
    //平均3次谈心可获得一个娃娃，最多需要3*N次，极限7*N
    for(i=0;i<7*N;i++){
        press(890,1845,10);sleep(150);  //点击谈心
        press(890,1845,10);sleep(300);
        press(890,1845,10);sleep(2000);  //连续点击关闭弹出的妃子界面
        press(720,1000,10);sleep(1200);
        var stat = images.detectsColor(captureScreen(), "#fff1e7cb", 730,1180);
        if(stat){
            sleep(400);
            n += 1;
            if(n >= N){
                press(540,1360,10);sleep(500);
                return;
            }
            else{
                press(720,1000,10);sleep(300);  //点击关闭皇子界面
                press(720,1000,10);sleep(100);
                press(720,1000,10);sleep(100);
                press(720,1000,10);sleep(100);
                press(720,1000,10);sleep(500);
            }
        }
    }
    files.append(logurl, "**精力丹使用完毕！\t\t<----------\n", encoding = 'utf-8');sleep(200);
    exit();

}

// 一个屏幕内的娃娃循环取名
function name(m){
    for(i=0;i<m;i++){
        press(895,385+295*i,10);sleep(200);
        press(810,870,10);sleep(100);   //随机取名
        // 重名检测
        press(540,1070,10);sleep(20);
        press(540,1070,10);sleep(200);
        // 敏感词检测优先
        while(images.detectsColor(captureScreen(), "#ffce4727", 540,1085)){
            files.append(logurl, "**检测到敏感词汇，重新随机命令！\t<----------\n", encoding = 'utf-8');
            press(810,870,10);sleep(200);
            press(540,1070,10);sleep(20);
            press(540,1070,10);sleep(200);
        }
        // 重名检测
        while(images.detectsColor(captureScreen(), "#ff432920", 540,700)){
            files.append(logurl, "**检测到重名，重新随机命令！\t<----------\n", encoding = 'utf-8');sleep(500);
            press(810,870,10);sleep(200);
            press(540,1070,10);sleep(20);
            press(540,1070,10);sleep(200);
            while(images.detectsColor(captureScreen(), "#ffce4727", 540,1085)){
                files.append(logurl, "**检测到敏感词汇，重新随机命令！\t<----------\n", encoding = 'utf-8');
                press(810,870,10);sleep(200);
                press(540,1070,10);sleep(20);
                press(540,1070,10);sleep(200);
            }
        }
    }
    files.append(logurl, "批量取名完成\n", encoding = 'utf-8');
}

// 加速、一键培养以及封爵
function jiasu(m){
    // 循环加速婴儿过渡期
    for(i=0;i<m;i++){
        press(895,488+295*i,10);sleep(200);
        // 循环使用婴儿汤
        while(images.detectsColor(captureScreen(), "#fff6f0dd", 540,1160)){
            sleep(200);
            var img = captureScreen();sleep(100);
            var stat = images.detectsColor(img, "#ff676767", 710,760) 
                && images.detectsColor(img, "#ff676767", 710,1030);
            if(stat){
                files.append(logurl, "婴儿汤用完了！\t\t<----------\n", encoding = 'utf-8');
                exit();
            }
            press(780,1030,10);sleep(100);
            press(780,760,10);sleep(200);
        }
    }
    files.append(logurl, "批量加速婴儿过渡期完成！\n", encoding = 'utf-8');
    
    press(685,1850,10);sleep(200);  //一键培养
    // 检测是否勾选专人培养
    if(images.detectsColor(captureScreen(), "#ff227281", 247,1844)){
        press(235,1850,10);sleep(1500);  //打开专人培养
        files.append(logurl, "打开专人培养！\n", encoding = 'utf-8');
    }
    // 循环快捷培养
    for(i=0;i<m;i++){
        if(images.detectsColor(captureScreen(), "#ff656565", 810,488)){
            files.append(logurl, "**活力丹用完了！\t\t<----------\n", encoding = 'utf-8');
            exit();
        }
        press(895,488+295*i,10);sleep(50);
        press(895,488+295*i,10);sleep(200);
        press(755,1110,10);sleep(3000);
    }
    files.append(logurl, "批量快捷培养完成！\n", encoding = 'utf-8');
    // 循环封爵
    for(i=0;i<m;i++){
        press(895,445,10);sleep(1000);
        press(895,445,10);sleep(500);
    }
    files.append(logurl, "批量封爵完成！\n", encoding = 'utf-8');
}

function peiyang(N){
    if(N <= 5){
        name(N);sleep(500);
        jiasu(N);sleep(500);
    }
    else{
        name(5);sleep(500);
        jiasu(5);sleep(500);
        name(N-5);sleep(500);
        jiasu(N-5);sleep(500);
    }
    files.append(logurl, "批量培养(取名、加速、培养、封爵)完成！\n", encoding = 'utf-8');
}

function main(){
    var date = new Date();
    var time = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    logurl = "/sdcard/脚本/daqing/log_"+time+".txt";
    files.write(logurl, "", encoding = "utf-8");sleep(100);
    files.append(logurl, "********** "+time+" **********\n\n", encoding = 'utf-8');sleep(200);
    // 从后宫进入三宫六院再进入谈心界面
    swipe(200,1050,800,1050,300);sleep(200);
    press(730,830,10);sleep(500);
    for(j=0;j<M;j++){
        tanxin();
        peiyang(N);
        var k = j+1;
        press(690,1020,10);sleep(200);  // 直接返回谈心界面
        files.append(logurl, "#####第 "+k+" 轮循环完成#####\n\n", encoding = 'utf-8');
    }
    files.append(logurl, "批量生娃完成，累计生娃："+ M*N +"\n\n", encoding = 'utf-8');
}

main();


