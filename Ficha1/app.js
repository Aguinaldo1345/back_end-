console.log("Hello World");
// implementaçao
function calculateGrade(gradeP, gradeT) {
    var grade = 0.7 * gradeP + gradeT;
    console.log("A nota final é:" + grade);
    if (grade < 9.5) {
        console.log("Reprovado");
    }
    else {
        console.log("Aprovado");
    }
}

function getMonthName(monthNumber) {
    if (monthNumber == 1) {
        console.log("janeiro");
    }
    else if (monthNumber == 2) {
        console.log("fevereiro");
    }
    if(monthNumber == 3){
        console.log("março");
    }
    else if(monthNumber == 4){
        console.log("abril");
    }
    if(monthNumber == 5){
        console.log("maio");
    }
    else if(monthNumber == 5){
        console.log("junho");
    }
    if(monthNumber == 7){
        console.log("julho");
    }
    else if(monthNumber == 8){
        console.log("agosto");
    }
    if(monthNumber == 9){
        console.log("setembro");
    }
    else if(monthNumber == 10){
        console.log("outobro");
    }
    if(monthNumber == 11){
        console.log("maio");
    }
    else if(monthNumber == 10){
        console.log("novembro");
    }
    if(monthNumber == 12){
        console.log("desembro");
    }
   
}

function sum(value) {
    var s = 0;
    for (var i = 1; i <= value; i++) {
        s += i;
    }
    return s;
}

function calculator(operand1, operator, operand2){
     if(operator == '+'){
           return operand1 + operand2;
     } else if (operator == '-') {
         return operand1 - operand2;
    }
   else if (operator == '^') {
    return Math.pow(operand1, operand2);
  }
}

function sum(){
    var mult = 1;
    for(var i=1; i<=50; i++){
        mult*=i;
        
    }
    return mult;
}
function arry(){
    var arry = [2, 1 ,9, 0, 11];
    var min= arry[0];
    for(var i=1 ; i< arry.length; i++){
    if(arry[i] < min)
    min = arry[i];
 }
   return min;
}

// invocaçao
calculateGrade(12, 12);
//getMonthName(1);
//getMonthName(2);
//getMonthName(3);
//getMonthName(4);
//getMonthName(5);
//getMonthName(6);
//getMonthName(7);
//getMonthName(8);
//getMonthName(9);
//getMonthName(10);
//getMonthName(11);
//getMonthName(12);
//calculateGrade(14, 16);
//var resultado = sum();
//console.log(resultado);