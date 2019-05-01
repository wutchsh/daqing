// 僵尸王
while(images.detectsColor(captureScreen(), "#ff5d5d5d", 764,1480)){
    press(1020,60,10);sleep(100);
    press(880,945,10);sleep(200);
}
press(764,1480,10);sleep(50);
press(764,1480,10);sleep(100);
while(true){
    press(800,1440,10);sleep(10);
}