//var height = 100;

var menu = {
    width: 800,
    height: 50,
    backgroundcolor: '#84E',
    metadeheigth() {
        return this.height / 2;
    }

}
//alterando o valor do backgrounddcolor
menu.backgroundcolor = '#000';
var bg = menu.backgroundcolor;

//adicionando mais 1 propiedade
menu.color = 'blue';


//adicionando propiedade
menu.esconder = function() {
    console.log('escondi')
}
