 var dados = {
     name: 'shelton',
     endname: 'farias',
     age: 22
   
 }
 
// console.log('meu nome e ' + dados.name + ' '
//  + dados.endname + ' tenho ' + dados.age + ' de idade')
 dados.nomecompleto = function() {
     return `${this.name} ${this.endname}`;

 }
// console.log(dados.nomecompleto())


 var carro = {
     preco: 1000,
    portas: 4,
     marca: 'audi',
 }

 carro.preco = 3000;


// //criando objeto cachorro que vai latir ao passar um homem
 var dog = {    
     raca: 'labrador',
     cor: 'preto',
     idade: 10,
     latir(pessoa) {
         if(pessoa === 'homem'){
             return 'latir'
         }else{
             return 'nada';
         }
     }
 }


// console.log(dog.latir('mulher'))