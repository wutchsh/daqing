/*  
    作者:wuhtchsh@gmail.com
    游戏版本：我在大清当皇帝(v5.80)
    请勿用作商业用途，禁止用此脚本及衍生脚本盈利。
*/

auto();
images.requestScreenCapture();sleep(200);
var dir = "/sdcard/脚本/daqing";
var n = 0;
var acc = "";
var accid = "";
var Array = [];
var mode = 0;
var template = images.read(dir+"/temp.png");
var template1 = images.read(dir+"/daily.png");
var template2 = images.read(dir+"/weekly.png");
var template3 = images.read(dir+"/leichong.png");
var template4 = images.read(dir+"/richong.png");
var template5 = images.read(dir+"/hongbao.png");
var template6 = images.read(dir+"/libao.png");
var template7 = images.read(dir+"/rank.png");
var template8 = images.read(dir+"/newversion.png");
var template9 = images.read(dir+"/lingqu.png");
var template10 = images.read(dir+"/shouchong.png");
var mailimg = images.read(dir+"/mail.png");
var mailimg1 = images.read(dir+"/mailimg1.png");    //"领取"模板
var mailimg2 = images.read(dir+"/mailimg2.png");    //"朕知道了"模板

if(mode == 0){
    acc = "wyxa";
    n0 = 1;
    N = 20;
    // Array = [35,36,40];
}
else if(mode == 1){
    acc = "";
    n0 = 1;
    N = 10;
    // Array = [];
}

function base(){
    account();sleep(1000);
    press(540,1600,10);sleep(600); // 登基&上朝，进入金銮殿界面
    press(540,1110,10);sleep(200);  //可能出现的领取充值礼包界面及VIP等级提升界面
    press(540,1110,10);sleep(50);
    press(540,1110,10);sleep(50);
    press(540,1110,10);sleep(4500); //默认5000
    press(540,980,10);sleep(100);
    press(540,980,10);sleep(100);
    press(540,980,10);sleep(100);
    press(540,980,10);sleep(100);
    press(540,980,10);sleep(2000);
    libao();sleep(200);
    mobai();sleep(200);
    press(1010,90,10);sleep(6000);  // 回宫，回到主界面

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

    // // 过新增剧情
    // shangyijian();
    // press(1010,90,10);sleep(1000);

    // 领取邮件福利
    mail();
    press(1010,90,10);sleep(1000);

    press(90,100,10);sleep(1200);   // 点击头像
    press(880,1825,10);sleep(1200); // 选择区服
}

function imgdect(temp,x,y,w,h){ 
    img0 = captureScreen();sleep(500);
    var point = images.findImage(img0, temp, {
        region: [x, y, w, h],
        threshold: 0.8
    });
    return point;
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
        log("**账号:"+ accid +"：该账号未注册！\n\n");sleep(500);
        n += 1;
        inputacc();
    }
}

function yueka(){
    var point9 = imgdect(template9,550,1280,400,140);sleep(50);
    if(point9){
        press(point9.x+180,point9.y+50,10);sleep(20);
        press(point9.x+180,point9.y+50,10);sleep(50);
        press(540,1100,10);sleep(10);
        press(540,1100,10);sleep(10);
        press(540,1100,10);sleep(10);
        press(540,1100,10);sleep(500);
        log("账号:"+ accid +",已领取月卡！");sleep(100);
    }
    else if(images.detectsColor(captureScreen(), "#fff3f0e6", 770,1355)){
        log("账号:"+ accid +",已领取月卡！");sleep(100);
    }
    else{
        log("账号:"+ accid +",未激活月卡！<--------");sleep(100);
    }
    press(770,1800,10);sleep(600);
    point9 = imgdect(template9,550,1280,400,140);sleep(50);
    if(point9){
        press(point9.x+180,point9.y+50,10);sleep(20);
        press(point9.x+180,point9.y+50,10);sleep(50);
        press(540,1100,10);sleep(10);
        press(540,1100,10);sleep(10);
        press(540,1100,10);sleep(10);
        press(540,1100,10);sleep(500);
        log("账号:"+ accid +",已领取至尊月卡！");sleep(100);
    }
    else if(images.detectsColor(captureScreen(), "#ffe1bfea", 770,1355)){
        log("账号:"+ accid +",已领取至尊月卡！");sleep(100);
    }
    else{
        log("账号:"+ accid +",未激活至尊月卡！<--------");sleep(100);
    }
}

function libao(){
    press(100,300,10);sleep(600);
    yueka();sleep(800);             // 月卡(含至尊月卡)领取
    swipe(900,1750,150,1750,300);sleep(500);
    var point6 = imgdect(template6,640,1700,420,200);sleep(50);
    var point8 = imgdect(template8,850,1700,200,200);sleep(50);
    if(point6){
        press(point6.x+70,point6.y+70,10);sleep(500);
        press(540,1340,10);sleep(20)
        press(540,1340,10);sleep(20)
        press(540,1340,10);sleep(200)
        press(540,1340,10);sleep(1000)
    }
    if(point8){
        press(point8.x+80,point8.y+80,10);sleep(500);
        press(540,1490,10);sleep(20);
        press(540,1490,10);sleep(100);
        press(540,1490,10);sleep(200);
        press(540,1490,10);sleep(500);
    }
    press(1010,90,10);sleep(1000);  // 返回金銮殿
}
function mobai(){
    var point7 = imgdect(template7,10,200,180,700);sleep(20);
    if(point7){
        press(point7.x+70,point7.y+70,10);sleep(800);
        for(i=0;i<3;i++){
            for(j=0;j<40;j++){
                press(895,1730,10);sleep(15);
                press(540,1170,10);sleep(15);
            }
            swipe(900,1200,600,1200,200);sleep(300);
        }
        press(1010,90,10);sleep(1000);  // 返回金銮殿
    }
    else{
        log("当日已膜拜！");
    }
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
            press(mailpoint1.x+110,mailpoint1.y+35,10);sleep(800);
            press(mailpoint1.x+110,mailpoint1.y+35,10);sleep(800);
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

// 每日资源（元宝红包、升爵套装、升星碎片）
function daily(){
    sleep(1000);
    press(630,1710,10);sleep(800);  // 由主界面进入商城
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
        press(point1.x+80,point1.y+290,10);sleep(300);

        point1 = imgdect(template1, 120, 630, 510, 300);
        if(point1){
            sleep(300);
            press(point1.x+80,point1.y+290,10);sleep(100);
            press(point1.x+80,point1.y+290,10);sleep(300);
            press(point1.x+80,point1.y+290,10);sleep(600);
        }
        swipe(700,1600,700,900,400);sleep(800);
        press(540,1290,10);sleep(300);  // 淸帝碎片
        press(540,1290,10);sleep(300);
        if(images.detectsColor(captureScreen(), "#ffe5e2ce", 540,1135)){
            log("检测到购买每日资源卡住！");
            press(950,520,10);sleep(200);
            swipe(700,1600,700,900,400);sleep(200);
            press(870,820,10);sleep(200);
            press(870,820,10);sleep(300);
        }
        press(870,1290,10);sleep(200);
        press(870,1290,10);sleep(300);
        press(210,1760,10);sleep(200);
        press(210,1760,10);sleep(300);
        press(540,1760,10);sleep(200);
        press(540,1760,10);sleep(300);
        press(870,1760,10);sleep(200);
        press(870,1760,10);sleep(300);

        log("账号:"+ accid + ",每日资源-OK！\n");sleep(1000);
    }
    else{
        log("**账号:"+ accid + ",每日资源已被领取！\t<----------\n");sleep(1000);
    }
}

function weekly(){
    swipe(700,1800,700,150,500);sleep(200);
    var point2 = imgdect(template2, 120, 630, 840, 950);
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
        log("账号:"+ accid + ",每周资源-OK！\n");sleep(1000);
    }
    else{
        log("**账号:"+ accid + ",每周资源已被领取！\n");sleep(1000);
    }
}

// 定义查找元宝红包并使用红包函数
function yuanbao() {
    sleep(1000);
    press(450,1710,10);sleep(1000);  // 由主界面进入珍宝阁
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
        log("账号:"+ accid + ",使用元宝红包-OK！\n");sleep(1000);
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
            log("账号:"+ accid + ",使用元宝红包-OK！\n");sleep(1000);
        }
        else{
            log("**账号:"+ accid + ",未找到元宝红包！  \t<----------\n");sleep(1000);
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
    log("账号:"+ accid + ",元宝截图-OK！\n\n");sleep(200);
}

function vip(){
    press(980,180,10);sleep(2000);
    swipe(220,1720,850,1720,500);sleep(500);
    press(950,1800,10);sleep(500);
    var point3 = imgdect(template3,20,1700,800,200);sleep(20);
    var point4 = imgdect(template4,20,1700,800,200);sleep(20);
    var point10 = imgdect(template10,20,1700,400,200);sleep(20);

    // 领取首充奖励
    if(point10){
        log("检测首充成功！");sleep(100);
        press(point10.x+70,point10.y+70,10);sleep(500);
        press(830,1395,10);sleep(200);
        press(540,1300,10);sleep(100);
        press(540,1300,10);sleep(200);
        press(540,1300,10);sleep(2000);
    }
    // 领取累充奖励
    if(point3){
        log("检测累充成功！");sleep(100);
        press(point3.x+70,point3.y+70,10);sleep(500);
        for(i=1;i<=90;i++){     //  默认90
            press(920,770,10);sleep(10);press(920,770,10);sleep(20);
            press(920,1170,10);sleep(10);press(920,1170,10);sleep(20);
            press(920,1350,10);sleep(10);press(920,1170,10);sleep(20);
            press(920,1590,10);sleep(10);press(920,1590,10);sleep(20);
        }
        log("账号:"+ accid + ",领取累充成功！\n");sleep(1000);
    }
    else{
        log("账号:"+ accid + ",检测累充失败！    \t<----------\n");sleep(200);
    }
    // 领取日充奖励
    if(point4){
        log("检测日充成功！");sleep(100);
        press(point4.x+70,point4.y+70,10);sleep(500);
        for(i=1;i<=80;i++){     //  默认80
            press(920,725,10);sleep(10);press(920,725,10);sleep(30);
            press(920,1345,10);sleep(10);press(920,1345,10);sleep(30);
            press(920,1325,10);sleep(10);press(920,1345,10);sleep(40);
        }
        log("账号:"+ accid + ",领取日充成功！\n");sleep(1000);
    }
    else{
        log("账号:"+ accid + ",检测日充失败！    \t<----------\n\n");sleep(200);
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

function main(){
    device.setBrightness(0);
    var date = new Date();
    var time = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    log("\n********** "+time+" **********\n");sleep(200);
    for(n = n0;n <= N;n++){
        sleep(500);
        base();
        log("账号"+accid+"--OK");
    }
    // 运行结束关闭屏幕并循环震动通知
    device.setBrightness(5);
    for(k=0;k<20;k++){
        device.vibrate(600);sleep(400);
        device.cancelVibration();sleep(200);
    }
    Power();                    //Root权限
}

main();