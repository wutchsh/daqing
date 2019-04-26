function tap(x, y, n) {
    for (i = 0; i < 50000; i++) {
        press(x, y, n);
        sleep(n);
    }
}

function main() {
    press(785,1580,10);sleep(300);
    press(755,1115,10);sleep(300);
    toastLog("即将开始划船！");sleep(500);
    threads.start(function() {
        tap(400, 1750, 10);
    });
    threads.start(function() {
        tap(640, 1750, 10);
    });
    threads.start(function() {
        tap(890, 1750, 10);
    });
    threads.start(function() {
        tap(150, 1750, 10);
    });
    threads.start(function() {
        sleep(70000);
        threads.shutDownAll();
    });
    sleep(70000);toastLog("划船结束！");
}

main();
