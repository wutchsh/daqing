
auto();
requestScreenCapture();sleep(100);
var dir = "/sdcard/脚本/daqing";



// ***************************************  工 具 相 关  *************************************** //


// 模板图片检测
function imgdect(temp,x,y,w,h){ 
    img0 = captureScreen();sleep(500);
    var point = images.findImage(img0, temp, {
        region: [x, y, w, h],
        threshold: 0.8
    });
    return point;
}

// // 定点色彩识别
// stat = images.detectsColor(captureScreen(), "#ffe5e2ce", 540,1135)
// var img = captureScreen();sleep(500);
// var point = [770,1355];
// var c = images.pixel(img,point[0],point[1]);
// var msg = "";
// msg += colors.toString(c);
// toastLog(msg)
// press(point[0],point[1],1000);


// device.setBrightness(5);



// ***************************************  副 本 相 关  *************************************** //


// // 僵尸王
// while(images.detectsColor(captureScreen(), "#ff5d5d5d", 764,1480)){
//     press(1020,60,10);sleep(100);
//     press(880,1295,10);sleep(200);
// }
// press(764,1480,10);sleep(50);
// press(764,1480,10);sleep(1500);  //控制延迟时间
// while(true){
//     press(800,1440,10);sleep(10);
// }


// // 四海打海盗
// while(true){
//     press(920,1690,10);sleep(10);
//     press(445,880,10);sleep(50);
//     press(830,690,10);sleep(50);
//     press(540,1845,10);sleep(50)
//     press(810,1110,10);sleep(50)
// }


// // 打倭寇！
// press(540,930,10);sleep(100);
// press(540,930,10);sleep(100);
// press(540,930,10);sleep(100);
// press(540,930,10);sleep(100);
// press(540,1200,10);sleep(200);
// if(images.detectsColor(captureScreen(), "#fff4c8bd", 800,360)){
//     press(800,360,10);sleep(500);
//     press(760,1140,10);sleep(100)
// }
// press(800,360,10);sleep(20);
// press(800,360,10);sleep(100);
// press(540,930,10);sleep(10);
// while(true){
//     // press(540,930,10);sleep(10);
//     press(870,1056,10);sleep(50);
// }

// // 刷新倭寇BOSS血量
// while(true){
//     press(1010,60,10);sleep(100);
//     press(890,470,10);sleep(400);   // 第一个讨伐按钮
// }


// // 挑战总督-俞大猷 543,1472
// var stat = images.detectsColor(captureScreen(), "#ff747474", 543,1472)
// while(stat){
//     press(1030,55,10);sleep(150);
//     press(870,950,10);sleep(10);
//     press(870,950,10);sleep(380);
//     stat = images.detectsColor(captureScreen(), "#ff747474", 543,1472);
// }
// for(n=0;n<6;n++){
//     press(543,1472,10);
//     press(543,1700,10);
// }


// // 推图
// while(true){
//     press(880,1670,10);sleep(10);
//     press(750,1120,10);sleep(10);
//     press(720,1440,10);sleep(10);
//     press(790,850,10);sleep(10);
// }


// // 使用文明点
// var point = [790,450];
// for(i=0;i<20;i++){
//     for(j=0;j<5;j++){
//         press(point[0],point[1]+300*j,10);sleep(50);
//         press(point[0],point[1]+300*j,10);sleep(500);
//     }
// }



// ***************************************  后 宫 相 关  *************************************** //


// // 批量提亲-confirm
// var id = 770;
// function tiqin(){
//     press(540,860,10);sleep(200);
//     press(740,1120,10);sleep(400);
//     setText(0,id);sleep(200);
//     press(540,660,10);sleep(500);
//     press(340,1290,10);sleep(1900);
// }
// sleep(500);
// for(i=0;i<17 ;i++){
//     for(j=0;j<4;j++){
//         press(920,528+318*j,10);sleep(500);
//         tiqin(); 
//     }
//     swipe(540,1400,540,660,300);sleep(500);
//     press(920,1220,10);sleep(200);
//     tiqin();
//     swipe(540,1400,540,660,300);sleep(500);
//     press(920,1538,10);sleep(200);
//     tiqin();
//     press(960,1760,10);sleep(200);
// }


// // 批量联姻 
// while(true){
//     press(880,525,10);sleep(500);
//     press(340,780,10);sleep(200);
//     press(340,1250,10);sleep(100);
//     for(i=0;i<5;i++){
//         press(540,800,10);sleep(100);
//     }
// }


// //亲密加点-confirm
// var p1 = [875,1190];
// // var p1 = [875,885];
// var p2 = [380,1190];
// function tappoint(p,n){
//     for(i=0;i<n;i++){
//         press(p[0],p[1],5);sleep(15);
//         if(i%20000 == 0){
//             log(i);
//             if(images.detectsColor(captureScreen(), "#ff7f7f7f", p[0],p[1])){
//                 for(p=0;p<30;p++){
//                     device.vibrate(1000);sleep(500);
//                     device.cancelVibration();sleep(200);
//                 }
//                 exit();
//             }
//         }
//     }
// }
// tappoint(p2,20000);


// // 元宝恢复习礼次数快速升妃位
// for(i=0;i<8;i++){
//     while(images.detectsColor(captureScreen(), "#ffcf4727", 790,1505)){
//         for(k=0;k<10;k++){
//             press(790,1500,10);sleep(20);
//         }
//     }
//     press(540,1390,10);sleep(200);
//     press(800,1030,10);sleep(200);
//     press(755,1145,10);sleep(400);
// }
// while(images.detectsColor(captureScreen(), "#ffcf4727", 790,1505)){
//     for(k=0;k<10;k++){
//         press(790,1500,10);sleep(20);
//     }
// }



// ***************************************  大 臣 相 关  *************************************** //


// // 升级大臣
// var x = device.width*797/1080;
// var y = device.height*640/1920;
// var n = 20;
// function upgrade(){
//     for(i=0;i<2000000;i++){
//         press(x,y,n);
//         sleep(n);
//     }
// }
// upgrade();


// // 喂果子
// while(true){
//     press(880,1675,10);sleep(10);
// }


// //淸帝强化配点
// var point = [830,970];
// for(i=0;i<5;i++){
//     press(point[0],point[1],10);sleep(20);
//     press(point[0],point[1],10);sleep(400);
//     if(images.detectsColor(captureScreen(), "#ff0fa0a2", 540,1380)){
//         press(540,1380,10);sleep(200);
//         press(755,1110,10);sleep(400);
//         press(540,1000,10);sleep(20);
//         press(540,1000,10);sleep(20);
//         press(540,1000,10);sleep(400);
//         press(755,1195,10);sleep(200);
//         press(856,1053,10);sleep(300);
//         swipe(300,965,900,965,200);sleep(200);
//         press(755,1130,10);sleep(200);
//         press(770,1280,10);sleep(200);
//         press(755,1110,10);sleep(50);
//         press(540,1380,10);sleep(200);
//     }else{
//         log("道具不足！");
//         exit();
//     }
// }


// // 升级技能
// var N = 10;     // 升级星数
// point = [180,1130];
// for(i=0;i<4;i++){
//     press(point[0]+235*i,point[1],10);sleep(20);
//     press(point[0]+235*i,point[1],10);sleep(500);
//     for(k=0;k<N;k++){
//         press(340,1415,10);sleep(200);
//         swipe(300,1125,900,1125,200);sleep(200);
//         press(740,1260,10);sleep(200);
//         press(540,1415,10);sleep(200);
//     }
//     press(1000,470,10);sleep(800);
// }


// // 成长点加点
// threads.start(function(){
//     while(true){
//         press(340,1130,10);sleep(50);
//     }
// });
// threads.start(function(){
//     while(true){
//         press(340,1360,10);sleep(50);
//     }
// });
// threads.start(function(){
//     while(true){
//         press(800,1130,10);sleep(50);
//     }
// });
// threads.start(function(){
//     while(true){
//         press(800,1360,10);sleep(50);
//     }
// });



// ***************************************  福 利 相 关  *************************************** //


// // 循环领取邮件奖励
// var mailimg = images.read(dir+"/mail.png");
// var mailpoint = imgdect(mailimg, 50, 330, 250, 200);
// while(mailpoint){
//     log("\t已定位未读邮件！");
//     press(mailpoint.x+80,mailpoint.y+80,10);sleep(200);
//     var mailimg1 = images.read(dir+"/mailimg1.png");    //"领取"模板
//     var mailimg2 = images.read(dir+"/mailimg2.png");    //"朕知道了"模板
//     var mailpoint1 = imgdect(mailimg1, 400, 600, 280, 1100);
//     var mailpoint2 = imgdect(mailimg2, 400, 600, 280, 1100);
//     if(mailpoint1){
//         press(mailpoint1.x+110,mailpoint1.y+35,10);sleep(100);
//         press(mailpoint1.x+110,mailpoint1.y+35,10);sleep(300);
//         press(mailpoint1.x+110,mailpoint1.y+35,10);sleep(200);
//         log("\t领取邮件成功");sleep(100);
//     }else if(mailpoint2){
//         press(mailpoint2.x+110,mailpoint2.y+35,10);sleep(20);
//         press(mailpoint2.x+110,mailpoint2.y+35,10);sleep(300);
//         log("\t没有可领取资源");sleep(100);
//     }
//     press(420,220,10);sleep(400);
//     press(180,220,10);sleep(500);
//     mailpoint = imgdect(mailimg, 50, 330, 250, 200);
// }


// 批量买礼包-confirm
// var n = 45;
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


// // 小活动
// while(true){
//     press(760,1469,10);
// }

// // 固定点点击
// p1 = [210,1008];
// p2 = [540,1008];
// p3 = [870,1008];
// p = p3;
// while(true){
//     press(p[0],p[1],10);
// }