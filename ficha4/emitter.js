class Emitter{
    constructor(){
        this.events= {};
    }
}
// type = "greet"
//listener = function()
Emitter.prototype.on = function(type, listener){
    if(this.events[type] == undefined){
        this.events[type]=[]
    }
   this.events[type].push(listener);  
   
}
Emitter.prototype.emit =function(type){
    if(this.events[type] != undefined ){
       this.events[type].
       array.forEach(element => {
            listener();
       }); 
    }
}


module.exports = Emitter;