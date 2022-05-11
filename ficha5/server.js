const express = require('express')
const fs = require('fs');
const { request } = require('http');
const app = express()
const port = 3000
  
//parte e/i
const bodyparser = require('body-parser');
const { response } = require('express');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


function readFile(path) {
  var fileContent = fs.readFileSync(path, "utf-8");
  return fileContent;
}
console.log(readFile('./person.json'))
//endpoint
//responde an um pedido http
// 1 argumento é a rota/path do endpoint
// 2 argumento é o codigo que vai ser executado quando este endpoint for invalido
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', function(req, res){
  res.send(personObject);
});

app.get('/users/:id', function(req, res) {
  var id = req.params.id

  var person = personObject["person" + id];
  if(person == undefined){
    res.send('this is does not exist!');
  }
  else{
    res.send(person);
  }
 
});


app.post('/users', (req, response) => {
  //person que vem no body do pedido
  var person = req.body;

//selecionar as chaves num array e obter o seu tamanho.
  var size = Object.keys(personObject).length;
  //incrementar 1 valor.
  size++;

  var str = 'person';
  var personId = str + size;
  person.id = size;
  //criar uma nova chave por ex: person que terá o valor da person que vem no body.
  personObject[personId] = person;
//envia o id da pessoa que foi inserida.
  response.send(person.id + "");
});


app.put('/users', (req, res) => {
  res.send("this is a put");
});

app.put('/users/:id', function(req, res) {
  var id = req.params.id

  var person = request.body;
  if(person == undefined){
    res.send('this is does not exist!');
  }
  else{
  
  }
 
});


app.delete('/users', (req, res) => {
  res.send("this is a delete");
});
//elimina um person
app.delete('/users/:id', function(req, res) {
  var id = req.params.id

  var person = personObject["person" + id];
  if(person == undefined){
    res.send('this is does not exist!');
  }
  else{
    delete personObject['person' + id];
    res.send('this id'+ id +' was deleted');
  }
 
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


