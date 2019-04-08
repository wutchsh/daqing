
auto();
requestScreenCapture();sleep(500);
images.requestScreenCapture();sleep(200);
// var Array = [3,4,6,8,10,11,15,16,18,19,21,25,29,30,31,35,36,40];

// var img = captureScreen();sleep(500);
// var point = [840,1090];
// var c = images.pixel(img,point[0],point[1]);
// var msg = "";
// msg += colors.toString(c);
// toastLog(msg)
// press(point[0],point[1],1000);

// if(images.detectsColor(captureScreen(), "#ff227281", 247,1845)){
//     press(247,1845,20);sleep(1500);  //打开专人培养
//     // files.append(logurl, "打开专人培养！\n", encoding = 'utf-8');
//     log("打开专人培养");
// }


// 批量提亲-confirm
var id = 1138;
function tiqin(){
    press(540,860,10);sleep(200);
    press(740,1120,10);sleep(400);
    setText(0,id);sleep(500);
    press(540,660,10);sleep(500);
    press(340,1290,10);sleep(1800);
}
for(i=0;i<8;i++){
    for(j=0;j<4;j++){
        press(920,528+318*j,10);sleep(400);
        tiqin();
    }
    swipe(540,1400,540,660,300);sleep(500);
    press(920,1220,10);sleep(200);
    tiqin();
    swipe(540,1400,540,660,300);sleep(500);
    press(920,1538,10);sleep(200);
    tiqin();
    press(960,1760,10);sleep(200);
}


// // 批量买礼包-confirm
// var n = 49;
// press(910,730,10);sleep(100);
// swipe(300,980,900,980,50);sleep(100);
// press(750,1100,10);sleep(100);
// // 购买界面检测
// if(images.detectsColor(captureScreen(), "#ff0c8c93", 705,1080)){
//     press(870,1180,10);sleep(300);
//     press(755,1080,10);sleep(200);
// }
// for(i=0;i<n;i++){
//     press(910,730,10);sleep(100);
//     swipe(300,980,900,980,50);sleep(100);
//     press(750,1100,10);sleep(100);
//     press(1030,1110,10);sleep(100);
// }




// //亲密加点
// var p1 = [875,1190];
// var p2 = [380,1190];
// function tappoint(p,n){
//     for(i=0;i<n;i++){
//         press(p[0],p[1],5);sleep(15);
//     }
// }
// tappoint(p1,300000);





// var date = new Date();
// var time = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
// log(time);

// for(i=0;i<150;i++){
//     press(865,970,10);sleep(100);
// }

// press(235,1850,10);sleep(1500);  //打开专人培养
// press(895,488+295*0,10);sleep(50);


// files.append(logurl, "", encoding = 'utf-8');sleep(200);

// for(i=1;i<=50;i++){
//     press(920,770,10);sleep(50);press(920,770,10);sleep(200);
// }





// if(point3){
//     log("累充TRUE");
// }
// else{
//     log("累充FALSE");
//     exit();
// }
// if(point4){
//     log("日充TRUE");
// }
// else{
//     log("日充FALSE");
//     exit();
// }


// for(i=0;i<10;i++){
//     press(890,1845,10);sleep(150);  //点击谈心
//     log("i= "+ i);
//     press(890,1845,10);sleep(2000);  //连续点击关闭弹出的妃子界面
//     press(720,1000,10);sleep(100);
//     press(720,1000,10);sleep(100);
//     press(720,1000,10);sleep(100);
//     press(720,1000,10);sleep(200);
//     press(720,1000,10);sleep(600);
//     // 皇子检测(730,1180)
//     var n = 0;                      //判断生娃是否到上书房最大数量
//     if(images.detectsColor(captureScreen(), "#fff1e7cb", 730,1180)){
//         n += 1;
//         log("n= "+n);
//         if(n >= N){
//             press(540,790,10);sleep(500);
//             break;
//         }
//         else{
//             press(720,1000,10);sleep(300);  //点击关闭皇子界面
//             press(720,1000,10);sleep(500);
//         }
//     }
    
// }




// while(images.detectsColor(captureScreen(), "#fff6f0dd", 540,1160)){
//     var img = captureScreen();sleep(100);
//     var stat = images.detectsColor(img, "#ff676767", 710,760) 
//         && images.detectsColor(img, "#ff676767", 710,1030);
//     if(stat){
//         log("婴儿汤用完了！");
//         exit();
//     }
//     press(780,1030,10);sleep(100);
//     press(780,760,10);sleep(200);
// }

// while(images.detectsColor(captureScreen(), "#fff6f0dd", 540,1160)){
//     press(780,1030,10);sleep(100);
//     press(780,760,10);sleep(200);
// }

// // // 重名检测
// press(540,1070,10);sleep(20);
// press(540,1070,10);sleep(200);
// // 敏感词检测优先
// while(images.detectsColor(captureScreen(), "#ffce4727", 540,1085)){
//     log("检测到敏感词汇，重新随机命令！");
//     press(540,1085,10);sleep(200);
//     press(810,870,10);sleep(200);
//     press(540,1070,10);sleep(20);
//     press(540,1070,10);sleep(200);
// }
// // 重名检测
// while(images.detectsColor(captureScreen(), "#ff432920", 540,700)){
//     sleep(500);
//     press(810,870,10);sleep(200);
//     press(540,1070,10);sleep(20);
//     press(540,1070,10);sleep(200);
//     log("1");
//     while(images.detectsColor(captureScreen(), "#ffce4727", 540,1085)){
//         log("检测到敏感词汇，重新随机命令！");
//         press(810,870,10);sleep(200);
//         press(540,1070,10);sleep(20);
//         press(540,1070,10);sleep(200);
//     }
// }


// var logurl = images.read("/sdcard/脚本/daqing/log.txt");
// var msg = "sdjkn";
// files.write(logurl, msg);

// for(i=0;i<62;i++){
//     press(910,1230,10);sleep(100);
//     swipe(300,980,900,980,50);sleep(100);
//     press(750,1110,10);sleep(100);
//     press(1030,1110,10);sleep(100);
// }

// swipe(700,1600,700,900,400);sleep(200);
// press(870,820,10);sleep(100);
// press(870,820,10);sleep(100);
// press(210,1290,10);sleep(200);  // 淸帝碎片
// press(210,1290,10);sleep(200);
// press(540,1290,10);sleep(100);
// press(540,1290,10);sleep(100);
// press(870,1290,10);sleep(100);
// press(870,1290,10);sleep(100);
// press(210,1760,10);sleep(100);
// press(210,1760,10);sleep(400);
// swipe(700,1800,700,600,400);sleep(200);





// let dawa = [3,4,6,8,10,11,15,16,18,19,21,25,29,30,31,35,36,40];
// var n = 100;
// function ofArray(array,n){
//     var m =array.length;
//     for(i = 0;i < m;i++){
//         if(n == array[i]){
//             return true;
//             break;
//         }
//     }
//     return false;
// }
// if(ofArray(dawa,n)){
//     log("TRUE");
// }
// else{
//     log("FALSE");
// }


// var img0;
// log("标记点4");
// img0 = captureScreen();sleep(200);
// log("标记点5");
// var img = images.clip(img0, 250, 110, 250, 50);sleep(200);
// log("开始判断n");


// if(images.detectsColor(captureScreen(), "#fffec54e", 570,670)){
//     log("红包界面退出失败！重新关闭！");sleep(200);
//     press(845,625,10);sleep(300);
// }
// else if(images.detectsColor(captureScreen(), "#fffac14b", 570,715)){
//     log("打开了已抢过的红包！");sleep(200);
//     press(845,670,10);sleep(300);
// }
// press(1010,90,10);sleep(500);

// var n=41;
// var accid = "";
// function inputacc(){
//     accid = "sdfhjis"+n;
//     click(540,720);sleep(300);
//     setText(0,accid);sleep(200);
//     press(540,180,10);sleep(500);
//     press(540,1120,10);sleep(300);   //登录账号
// }
//     inputacc();
//     var img = captureScreen();sleep(300);
//     while(images.detectsColor(img, "#ff013f40", 250,960)){
//         log(accid +"：该账号未注册！");
//         n += 1;
//         inputacc();
//     }