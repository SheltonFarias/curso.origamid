window.alert('Bem Vindo ao JS')


if(href ==='http://127.0.0.1:5500/dom/') {
    console.log('É igual')
} 

const h1s = document.querySelector('h1');

//node tag html é representada pelo objeto Element e por isso herda os seus metodos e propiedades.Element é um tipo de objeto node

const titulo = document.querySelector('h1');

titulo.innerText; //retorna o texto;
titulo.classList; //retorna as classes;
titulo.id; //retorna id
titulo.offsetHeight

titulo.addEventListener('click', callback);
