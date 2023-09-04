var PossuiGraducao = true;
var PossuiDoutorado = true;

if(PossuiGraducao) {
    console.log('É verdadeiro');
    var x = 10;
} else if(PossuiDoutorado) {
   console.log('Possui Doutorado');
}





var nome = 5;


if(nome) {
    console.log(nome);
} else {
    console.log('nome nao existe');
}

if(!PossuiGraducao) {
    console.log(PossuiGraducao);
    console.log('nao possui graduacao');
}



if((5-5) && (5+5)){
    console.log('verdadeiro')
}else {
    console.log('falso')
}



var corfavorita = 'roxo';

switch (corfavorita) {
case 'azul':
      console.log('olhe para o ceu.')
     break;
    case 'amarelo':
      console.log('olhe para sol')
     break;
    case 'verde':
       console.log('olhe para a floresta')
    default:
       console.log('feche os olhos.')
}



