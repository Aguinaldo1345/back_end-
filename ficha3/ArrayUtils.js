var obj = {
    isEmpty: function (array) {
        return array.length == 0;
    },

    max: function (array) {
        
            var max = array[0];
            for (var i = 1; i< array.length; i++) {
                if (array[i] > max)
                    max = array[i];
            }
            return max;
        
    },

    min: function(array) {
     
            var min = array[0];
            for (var i = 1; i< array.length; i++) {
                if (array[i] < min)
                    min = array[i];
            }
            return min;
        
    },

    average: function(array){
        var soma = 0;
        for(var i = 0; i<array.length; i++){ //esta funcao vai calcular a media do estudante.
            soma += array[i];
        }
        return soma/array.length;
    },

    indexOf: function(array,value){ // esta funcao vai devolver o valor de indice que é: -1
      var index = -1;
      for(var i = 0; i < array.length; i++){
          if (array[i] == value){
              index = i;
          }
      }
      return index;
    },

    subArray: function(array, startIndex, endIndex){
        var arraynovo = [];
        for(var i = startIndex; i < endIndex + 1; i++) {
            arraynovo.push(array[i]);
        }
        return arraynovo;
    
    },

    isSameLength: function(a1, a2){
        return a1.length == a2.length;

    },

    reverse: function(array){
        var arraynovo = [];
        for(var i = array.length -1; i >= 0; i--){
          arraynovo.push(array[i]);
        }
        return arraynovo;
    },

    replace: function(array, index1, index2){
        var arraynovo = [];
        for(var i = 0; i < array.length; i++){
            if(array[i]==index1){
                arraynovo.push(index2);
            }
            else{
                arraynovo.push(array[i]);
            }
        }
        return arraynovo;
    },

    contains: function(array, value){
           return this.indexOf(array, value) != -1;
    },

    concatenate(a1, a2){
           var arraynovo = [];
           for(var i = 0; i < a1.length; i++){
               arraynovo.push(a1[i]);
           }
           for(var i = 0; i < a2.length; i++){
            arraynovo.push(a2[i])
        }
        return arraynovo;
    },

}

module.exports=obj;




