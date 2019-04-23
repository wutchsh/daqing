//亲密加点
auto();
images.requestScreenCapture();sleep(100);
var p1 = [875,1190];
var p2 = [380,1190];
function tappoint(p,n){
    for(i=0;i<n;i++){
        press(p[0],p[1],5);sleep(15);
        if(i%20000 == 0){
            log(i);
            if(images.detectsColor(captureScreen(), "#ff7f7f7f", p[0],p[1])){
                for(p=0;p<20;p++){
                    device.vibrate(1000);sleep(500);
                    device.cancelVibration();sleep(200);
                }
                exit();
            }
            if(images.detectsColor(captureScreen(), "#ff0fa4a5", 540,1070)){
                log("检测到连接失败！")
                press(540,1070,10);sleep(20);
                press(540,1070,10);sleep(200);
            }
        }
    }
}
tappoint(p1,500000);
for(p=0;p<20;p++){
    device.vibrate(1000);sleep(500);
    device.cancelVibration();sleep(200);
}