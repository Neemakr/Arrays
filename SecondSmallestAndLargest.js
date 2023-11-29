//Works if the array is sorted and has duplicate values at the starting two positions only 
a = [1,2,5,45];
function SecondSmallest(a){
    for(let i=0; i<a.length; i++){
        if(a[i] < a[i+1]){
            return a[i+1]
        }
    }
}
console.log(SecondSmallest(a));