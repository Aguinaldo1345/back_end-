//for(var i = 0; i <array.toLocaleString.length; i++){
   //arr[i]();
//}

//array.forEach(element => {
    //element();
//});

var Emitter =  require("./emitter");

var emtr = new Emitter();

emtr.on("log", function(){
 console.log("this is a log listener");
});

emtr.on("log", function(){
    console.log("this is a log listener");
});


emtr.on("log", function(){
    console.log("this is another log listener");
});


emtr.on("test", function(){
    console.log("this is a test listener");
});

var x = 0;