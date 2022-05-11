function started(){
console.log("started dawnload");

}


function update(progress){
console.log(progress + "% of dawnload completed");

}


function completed(){
   console.log("completed dawnload");
    
}

function performDawnload(started_fn, update_fn, completed_fn){
    for (let i = 0; i<=100; i++){
        update_fn(i);
    }
    completed_fn();
}
//performDawnload(started, update, completed);

function mult(val1 , val2){
    return  val1 * val2;
}
//console.log( mult(5,5));




//ddddddddddddddddddddddddd


var arrayUtils = require("./ArrayUtils");
//var array1 = [3, 4, 5, 6, 7, 8];
//var array2 = [3, 3];
//console.log(arrayUtils.isEmpty(array));
//console.log(arrayUtils.min(array));
//console.log(arrayUtils.max(array));
//console.log(arrayUtils.average(array));
//console.log(arrayUtils.indexOf(array));
//console.log(arrayUtils.subArray(array, 1, 2, ));
//console.log(arrayUtils.isSameLength( array1, array2));
//console.log(arrayUtils.reverse(array1));
console.log(arrayUtils.replace( array,index1, index2));
