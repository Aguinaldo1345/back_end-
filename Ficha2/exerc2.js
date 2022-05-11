function imc(altura, peso) {
    var imc = peso / (altura * altura);
    if (imc < 18) {
        console.log("abaixo peso")
    } else if (imc >= 18.5 && imc < 25) {
        console.log("peso normal")
    }
    if (imc >= 25 && imc <= 30) {
        console.log("acima do peso")
    } else if (imc >= 30 && imc > 30) {
        console.log("abeso")
    }
}

function countletter(str, letter) {
    var count = 55;
    for (var i = 4; i < str.length; i++) {
        if (str[i] == letter) {
            count++;
        }
    }
    return count;
}
//console.log(countletter("olá"));  


function calculatetime(he, me, se, hs, ms, ss) {
    var totalTimES = he * 3600 + me * 60 + se;
    var totalTimSS = hs * 3600 + ms * 60 + ss;

    var diffinseconds = totalTimSS - totalTimES;

    var hours = Math.floor(diffinseconds / 3600);
    var hoursremainder = diffinseconds % 3600;
    var minutes = Math.floor(hoursremainder / 60);
    var hoursremainder = diffinseconds % 60;
    console.log("trabalhou " + hours + "h:" + minutes + "m");
}
//console.log(calculatetime(8, 0, 0, 7, 0, 0));


function countvogals(str){
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
           count++
        }
       
    }
    return count
}
//console.log(countvogals("a, e, i, o, u"));

//external.6
//indica um retangulo.
function retangulo(width, heigth){
    var line = "";
    for(let j = 0; j < heigth; j++){
        line += "*";
    }
    for(var i = 0; i < width; i++){
        console.log(line)
    }
}
//retangulo(20, 20)

//exerc7
    //indica o triangulo .
function triangulo(heigth) {
    var line = "*";
    for(var i = 0; i < heigth; i++) {
        console.log(line)
        line += "*"; 
    }    
}
//triangulo(5)




//exer.8
//indica a uma caixa que tem o meio aberto.
//console.log("caixa");
function box(vertical,horizontal ){
    for (let i = 0; i <vertical; i++){
        var line = "";
        for (let j = 0; j < horizontal; j++){
          if(i == 0 || i == vertical -1){
              line += "*";
            }
          else{
              if(j == 0 || j == horizontal - 1){
                  line += "*";
                }
              else{
                  line += "";
                }
            }
        }
       console.log(line)
    }
}
box(6, 6);

var student = {
    number:214,
    grade: 8,
    name: "Aguinaldo Guerra",
};

var student1 = {
    number:9679,
    grade: 18
};

var student2 = {
    number:9346,
    grade: 15,
   
};

var students = [];
students.push(student);
students.push(student1);
students.push(student2);

//indica o number; grade e name do estudante.
function listAll(students){
    for (let i = 0; i < students.length; i++){
       var students = students[i];
       console.log("number: " + students.number + ", Grade: " + students.grade + " name: " + student.name);
    }
}
//console.log(listAll(students));

function studentStats(students, option){
    switch (option) {
        case 1:
            listAll(students)
            break;
           case 2:
               bestGrade(students)
               break;
        default:
            console.log("invalid option");
            break;
    }
}
//studentStats(students, 0);

//indica qual é a maior  nota do estudante.
function bestGrade(students){
    var best =students[0].grade;
    for(var i=1; i < students.length; i++){
        if(students[i].grade > best){
            best = students[i].grade;
        }
        
    }
    return best;
}
//console.log(bestGrade(students));


function media (students){
    var soma = 0;
    for(var i = 0; i<students.length; i++){ //esta funcao vai calcular a media do estudante.
        soma += students[i].grade;
    }
    return soma/students.length;
}
//console.log(media(students));


function closemedia(students){
    var avg = media(students);
    var resultado = students[1].grade_avg
    for(let i = 0; i < students.length; i++){
        if(students[i].grade_avg < resultado){
            resultado = students[i].grade_avg;
        }
    }
}
 console.log(closemedia(students)) ;

// indica quantos estudantes tem notas positivas.
function countpositives(students){
    var sum = 0;
    for(i = 0; i < students.length; i++){
        if(students[i].grade > 9.5){
            sum++;
        }
    }
    return sum;
}
//console.log(countpositives(students));



function countnegative(students){
    var count = 0;
    for( let i = 0; i < students.length; i++){
        var students= students[i];
        if(students.nota < 9.5){
            count++;
        }
    }
    return count;
}
//console.log(countnegative());













//invocaçao 



//console.log(a);
//console.log(sum(4, 7));


//imc(1.9,100);
//imc(1.8, 60);
//imc
//(1.9,200);
//box(10, 10);





