function RotateTheArrayByOnePosition(a,count){
    let x=0;
    while(x<count){
        let i=0;
        let temp = a[0];
        for(i=0; i<a.length; i++){
            a[i] = a[i+1];
        }
        a[a.length-1] = temp;
        x++;
        console.log(`Array after ${x} count is ${a}`);
    }  
}
a = [1,2,3,4,5];
RotateTheArrayByOnePosition(a,3)