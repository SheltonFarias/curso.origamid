function areaquadrado() {
    console.log('funcao ativa')
}

areaquadrado();

function imc(peso, altura){
    const imc = peso / (altura * altura)
    return imc;
}

console.log(imc(80, 1.70))


function corfavorita(cor) {
    if(cor === 'azul'){
    return 'eu gosto do ceu'
} else if (cor === 'verde') {
    return 'eu gosto de mato'
} else {
    return 'nao gosto de cores';
  }
}

console.log(corfavorita('verde'))



addEventListener('click', function(){console.log('oi')});







