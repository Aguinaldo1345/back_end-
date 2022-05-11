var array = [];

array.push(function (){
   console.log("hello wold 1 , 2, 3")
});

array.push(function (){
   console.log("hello gui. 2, 3, 4")
});

array.push(function (){
   console.log("olá Aguinaldo. 3, 4, 5")
});

for(var i=0; i< array.length; i++){
   // array[i]();
};
//ssssssssssssssssssssssssssssssssssssssssssss

array.forEach((element, index, array) =>{
   console.log(element);
   console.log(index);

});
