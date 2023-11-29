function secondSmallest(a){
    let min = a[0];
    let second_min = a[1];
    for( let i=0; i<a.length; i++){
        if(a[i] < min){
        second_min = min;
        min = a[i];
        }
    }
    for(let i=0; i<a.length; i++){
        if(a[i]<second_min && a[i]!=min){
        second_min = a[i];    
        }
    }
    console.log("Smallest=", min);
    console.log("Second smallest=", second_min);
}
a = [1,3,5,2,3,9];
secondSmallest(a);