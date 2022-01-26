//Uma função serve pra eu "chamar" um bloco de comando - inica e termina com {}

function media(){
    var n1 = 10;
    var n2 = 8;
    var media= (n1+n2)/2;
    console.log(media)
}

//Note que se eu rodar sem declarar a função não vai aparecer nada

media() //agora sim eu declarei a função vai aparecer ela;

console.log('A partir daqui é outro exemplo')

//Isso é bom porque agora posso exibir de acordo com outras, vamos ao exemplo 2
//Eu quero que o console me mostre diferentes médias


function med(n1,n2){ //a n1 e n2 são variáveis que vão receber valor quando eu declarar minha função
    var prova1=n1
    var prova2= n2;
    var media1= (prova1+prova2)/2;
    console.log('Sua média é: '+ media1);
}


med(6,7); //p1 com 6 e p2 com 7 - eu uso a , p/ separar os valores que as variáveis n1 e n2 vão receber
med(5,10);
med(4,8);

//perceba que agora se eu for fazer uma média eu só chamo a função

//Só que alem disso eu posso retonar um valor, ou seja, minha declaração vai ter um valor que eu posso atribuir a uma variável

console.log ('Aqui é outro exemplo')

function med1(y1,y2){ //a n1 e n2 são variáveis que vão receber valor quando eu declarar minha função
    var prova1=y1
    var prova2= y2;
    var media2= (prova1+prova2)/2;
    return media2; //com isso o valor de media vai voltar pra declaração
}


var return1 = med1(5,5); //Agora a declaração tem um valor e posso atribuir a ela uma variável;
var return2 = med1(5,0);
var return3 = med1(4,2);

console.log (return1);
console.log (return2);
console.log (return3);

console.log('================================================================================================');
console.log('================================================================================================');
console.log('================================================================================================');

//O mais interessante do JS é que UMA VARIÁVEL pode ser uma FUNÇÃO

function saudacao(){
    return 'Hellow Word !!!';
}

var s = saudacao; //agora a variável s é uma função

console.log(s); //o que vai aparecer é a função
console.log('__________________________________________________________');
console.log(s()); //o que vai aparecer é Hellow Word = se fosse console.log(saudacao())

//Logo a variável s é uma função támbem s()


console.log('================================================================================================');
console.log('================================================================================================');
console.log('Variável anônima');

var funcao= function(x1,x2){
    return(x1,x2)/2;
}

console.log(funcao(8,5)); //a variável funcao virou uma função e agr estou imprindo ela

console.log('================================================================================================');
console.log('Arrow Functions');


// Ainda existe um outro meio de criar funções, são as Funções de Seta - As arrow functions.
var arrow = (z1,z2) =>{
    return(z1+z2)/2;
}

console.log(arrow(5,6));