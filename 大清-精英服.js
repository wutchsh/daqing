/*  
    作者:wuhtchsh@gmail.com
    游戏版本：我在大清当皇帝(v5.4)
    请勿用作商业用途，禁止用此脚本及衍生脚本盈利。
*/

auto();
images.requestScreenCapture();sleep(200);
var dir = "/sdcard/脚本/daqing";
var n = 0;
var acc = "";
var accid = "";
var Array = [];
var mode = 1;
var logurl = "";
var template = images.read(dir+"/temp.png");
var template1 = images.read(dir+"/daily.png");
var template2 = images.read(dir+"/weekly.png");
var template3 = images.read(dir+"/leichong.png");
var template4 = images.read(dir+"/richong.png");
var template5 = images.read(dir+"/hongbao.png");

if(mode == 0){
    acc = "csjyf";
    n0 = 0;
    N = 100;
    Array = [3,4,6,7,8,9,14,15,18,19,21,22,23,24,25,29,30,31,35,36,40];
}
else if(mode == 1){
    acc = "TaIzu";
    n0 = 1;
    N = 50;
    Array = [16,17,18,19,20,21,22];
}

function imgdect(temp,x,y,w,h){ 
    img0 = captureScreen();sleep(500);
    var point = images.findImage(img0, temp, {
        region: [x, y, w, h],
        threshold: 0.8
    });
    return point;
}

// 判断日志文件是否存在，不存在则创建
function logfile(){
    if(!files.exists(logurl)){
        files.create(logurl);sleep(1000);
    }
    else{
        log("日志文件已经存在！");sleep(100);
    }
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

//临时领取福利邮件
function mail(){
    if(images.detectsColor(captureScreen(), "#ffea4837", 1045,1485)){
        log("检测到未读邮件！");
        press(1000,1530,10);sleep(400);
        var mailimg = images.read(dir+"/mail.png");
        var mailpoint = imgdect(mailimg, 50, 330, 250, 200);
        if(mailpoint){
            log("已定位未读邮件！");
            press(mailpoint.x+80,mailpoint.y+80,10);sleep(200);
            var lingquimg = images.read(dir+"/lingqu.png");
            var lingqupoint = imgdect(lingquimg, 400, 600, 280, 1100);
            if(lingqupoint){
                press(lingqupoint.x+110,lingqupoint.y+35,10);sleep(100);
                press(lingqupoint.x+110,lingqupoint.y+35,10);sleep(300);
                press(lingqupoint.x+110,lingqupoint.y+35,10);sleep(200);
                log("领取邮件成功");sleep(100);
            }
        }
    }else{
        log("未检测到未读邮件！");sleep(200);
    }
}


// 每日资源（元宝红包、升爵套装、升星碎片）
function daily(){
    sleep(1000);
    press(630,1830,10);sleep(500);  // 由主界面进入商城
    var point1 = imgdect(template1, 450, 630, 510, 300);
    if(point1){
        sleep(150);
        press(point1.x+80,point1.y+290,10);sleep(300);
        // 判断是否弹出购买确认界面
        img = captureScreen();sleep(100);
        if(images.detectsColor(img, "#ff0c8c93", 705,1080)){
            press(870,1180,10);sleep(100);
            press(755,1080,10);sleep(200);
        }
        press(point1.x+80,point1.y+290,10);sleep(300);

        point1 = imgdect(template1, 120, 630, 510, 300);
        if(point1){
            sleep(300);
            press(point1.x+80,point1.y+290,10);sleep(100);
            press(point1.x+80,point1.y+290,10);sleep(600);
        }
        swipe(700,1600,700,900,400);sleep(200);
        press(870,820,10);sleep(200);
        press(870,820,10);sleep(300);
        press(210,1290,10);sleep(300);  // 淸帝碎片
        press(210,1290,10);sleep(300);
        press(540,1290,10);sleep(200);
        press(540,1290,10);sleep(300);
        press(870,1290,10);sleep(200);
        press(870,1290,10);sleep(300);
        press(210,1760,10);sleep(200);
        press(210,1760,10);sleep(400);

        files.append(logurl, "账号:"+ accid + ",每日资源-OK！\n", encoding = 'utf-8');sleep(1000);
    }
    else{
        files.append(logurl, "**账号:"+ accid + ",每日资源已被领取！\t<----------\n", encoding = 'utf-8');sleep(1000);
    }
}

function weekly(){
    swipe(700,1800,700,600,400);sleep(200);
    var point2 = imgdect(template2, 120, 630, 840, 950)
    if(point2){
        sleep(300);
        press(point2.x+80,point2.y+290,10);sleep(200);
        // 判断是否弹出购买确认界面
        img = captureScreen();sleep(200);
        if(images.detectsColor(img, "#ff0c8c93", 705,1080)){
            press(870,1180,10);sleep(300);
            press(755,1080,10);sleep(200);
        }
        press(point2.x+80,point2.y+290,10);sleep(200);
        files.append(logurl, "账号:"+ accid + ",每周资源-OK！\n", encoding = 'utf-8');sleep(1000);
    }
    else{
        files.append(logurl, "**账号:"+ accid + ",每周资源已被领取！\n", encoding = 'utf-8');sleep(1000);
    }
}

// 定义查找元宝红包并使用红包函数
function yuanbao() {
    sleep(1000);
    press(450,1830,10);sleep(1000);  // 由主界面进入珍宝阁
    press(420,230,10);sleep(500);   // 道具
    var point0 = imgdect(template, 80, 300, 920, 1200);
    if(point0){
        sleep(300);
        press(point0.x+90,point0.y+90,10);sleep(500);
        press(880,point0.y+450,10);sleep(400);
        swipe(300,1060,900,1060,100);sleep(600);
        press(760,1230,10);sleep(400);
        press(540,980,10);sleep(100);
        press(540,980,10);sleep(500);
        files.append(logurl, "账号:"+ accid + ",使用元宝红包-OK！\n", encoding = 'utf-8');sleep(1000);
    }
    else{
        swipe(540,1300,540,300,300);sleep(200);
        point0 = imgdect(template, 80, 300, 920, 1200);
        if(point0){
            sleep(300);
            press(point0.x+90,point0.y+90,10);sleep(500);
            press(880,point0.y+450,10);sleep(400);
            swipe(300,1060,900,1060,100);sleep(600);
            press(760,1230,10);sleep(400);
            press(540,980,10);sleep(200);
            press(540,980,10);sleep(500);
            files.append(logurl, "账号:"+ accid + ",使用元宝红包-OK！\n", encoding = 'utf-8');sleep(1000);
        }
        else{
            files.append(logurl, "**账号:"+ accid + ",未找到元宝红包！  \t<----------\n", encoding = 'utf-8');sleep(1000);
        }
    }
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

function saveimg(){
    files.ensureDir(dir+"/imgtemp/");sleep(200);
    img = images.clip(captureScreen(),250,110,250,50);sleep(200);
    var stat = ofArray(Array,n);
    if(stat && mode == 0){
        images.save(img, dir+"/imgtemp/"+accid+"-大娃.png", format = "png", quality = 100);sleep(200);
    }
    else if(stat && mode == 1){
        images.save(img, dir+"/imgtemp/"+accid+"-已赠出.png", format = "png", quality = 100);sleep(200);
    }
    else{
        images.save(img, dir+"/imgtemp/"+accid+".png", format = "png", quality = 100);sleep(200);
    }
    sleep(200);
    files.append(logurl, "账号:"+ accid + ",元宝截图-OK！\n\n", encoding = 'utf-8');sleep(200);
}

function vip(){
    press(980,200,10);sleep(2000);
    swipe(220,1720,850,1720,500);sleep(500);
    press(950,1800,10);sleep(200);
    var point3 = imgdect(template3,20,1700,800,200);sleep(20);
    var point4 = imgdect(template4,20,1700,800,200);sleep(20);

    // 领取累充奖励
    if(point3){
        press(point3.x+70,point3.y+70,10);sleep(200);
        for(i=1;i<=60;i++){     //  默认60
            press(920,770,10);sleep(10);press(920,770,10);sleep(20);
            press(920,1170,10);sleep(10);press(920,1170,10);sleep(20);
            press(920,1590,10);sleep(10);press(920,1590,10);sleep(20);
        }
        files.append(logurl, "账号:"+ accid + ",领取累充成功！\n", encoding = 'utf-8');sleep(200);
    }
    else{
        files.append(logurl, "账号:"+ accid + ",检测累充失败！    \t<----------\n", encoding = 'utf-8');sleep(200);
    }
    // 领取日充奖励
    if(point4){
        press(point4.x+70,point4.y+70,10);sleep(500);
        for(i=1;i<=70;i++){     //  默认70
            press(920,725,10);sleep(10);press(920,725,10);sleep(20);
            press(920,1345,10);sleep(10);press(920,1345,10);sleep(10);
            press(920,1325,10);sleep(10);press(920,1345,10);sleep(15);
        }
        files.append(logurl, "账号:"+ accid + ",领取日充成功！\n\n", encoding = 'utf-8');sleep(200);
    }
    else{
        files.append(logurl, "账号:"+ accid + ",检测日充失败！    \t<----------\n\n", encoding = 'utf-8');sleep(200);
    }
    // 领取每周充值礼包
    press(point4.x+280,point4.y+70,10);sleep(500);
    press(920,700,10);sleep(100);
    press(920,700,10);sleep(100);
    press(920,700,10);sleep(50);
    press(920,700,10);sleep(1200);
}

//尚衣监
function shangyijian(){
    sleep(300);
    for(i=0;i<4;i++){
        press(540,350,10);sleep(300);
    }
    sleep(300);
    for(i=0;i<20;i++){
        press(630,780,10); sleep(50);
        press(630,780,10); sleep(100);
    }    
}


function base(){
    // 切换账号并进入珍宝阁道具界面
    account();sleep(1000);
    press(540,1600,10);sleep(500); // 登基&上朝，进入金銮殿界面
    press(540,1110,10);sleep(200);  //可能出现的领取充值礼包界面及VIP等级提升界面
    press(540,1110,10);sleep(200);
    press(540,1110,10);sleep(4500); //默认5000
    press(540,980,10);sleep(100);
    press(540,980,10);sleep(100);
    press(540,980,10);sleep(100);
    press(540,980,10);sleep(100);
    press(540,980,10);sleep(2000);
    press(1010,90,10);sleep(1000);  // 回宫，回到主界面

    // 领取每日资源、每周资源
    daily();
    weekly();
    press(1010,90,10);sleep(2000);
    
    // // 领取VIP充值礼包，需要时打开该功能
    // vip();
    // press(1010,90,10);sleep(1000);

    // 使用元宝红包
    yuanbao();
    saveimg();
    press(1010,90,10);sleep(1000);

    // shangyijian();
    // press(1010,90,10);sleep(1000);

    // // 领取邮件福利
    // mail();
    // press(1010,90,10);sleep(1000);

    press(90,100,10);sleep(1000);   // 点击头像
    press(880,1850,10);sleep(1000); // 选择区服
    log("账号"+accid+"--OK");
}

function main(){
    var date = new Date();
    var time = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    logurl = dir+"/log/log_"+time+".txt"
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


main();