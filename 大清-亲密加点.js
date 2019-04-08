//亲密加点
var p1 = [875,1190];
var p2 = [380,1190];
function tappoint(p,n){
    for(i=0;i<n;i++){
        press(p[0],p[1],5);sleep(15);
    }
}
tappoint(p1,250000);