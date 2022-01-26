//For serve pra repetir alguma coisa um certo numeros de vezes

var numero=5; //var que representa o nº de vezes que o for vai se repitir;

for(var i=0; i < numero; i++ ){ //a vez inicia em 0 e vai aumentando de 1 em 1 até 5
alert('excecutando o for pela '+(1+i)+ 'ª vez.'); //vai repetir essa mensagem 5vezes
}
alert('Acabou');


//while é bem parecido com o if

var num=5;

while(num<=10){
    alert('Número: '+num);
    //n=5 - vai começar por 5 até n ser menor que 10
    num++;
    //eu preciso ir somando +1 pra contar, se eu não colocar n++ ele vai ficar rodando 5 eternamente -lupim infinito; até minha memória acabar;
}

alert('Acabou')

//Nesse vc tem uma condição, estilo if, e enquanto essa condição for verdadeira vai rolar o que ta nela;
//Ex - imagine que a gente queria exibir um número randômico (valor aleatório)

var n= Math.random()*120;
//Math.random () é uma função que exibe um número randômico entre 0 e 1

//Quero que seja exibido os números até ser maior que 100, quero o primeiro número maior que 100. E vou aexibir no console

while (n<=100){
    console.log(n);
    n=Math.random()*120 //senão colocar isso ele vai exibir inifitamente o mesmo número, caso seja <= 100, senão nem exibi.
}

console.log(n); //Vou colocar mais essa que é a última exibição maior que 100

console.log('Acabou');

//o for pra esse tipo de coisa é bem mais complicado, por isso não é usual;


