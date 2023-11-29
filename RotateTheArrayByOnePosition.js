/*First copy the values from the position to the last element to the temp array and then copy the elements from 0 to count to the 
temp array*/
function RotateTheArrayByOnePosition(a, count){
    let temp = [];
    let k=0;
    for(i=count; i<a.length; i++){
        temp[k] = a[i];
        k++;
    }
    for(let j=0; j<count; j++){
        temp[k] = a[j];
        k++;
    }
    console.log(temp);
}
a = [9,2,3,4,5];
RotateTheArrayByOnePosition(a, 3);