//Objeto é parecido com arrays só que ao invés de abrir e fechar [ ] eu vou abrir e fechar {};

console.log('Propriedades:')
console.log('____________________________________________________________________________________________________________________________')

var objeto = {nome:'Roosevelt', idade:'17 anos'} 
//diferente do array que eu acesso pelo indíce, aqui vou acessar por uma chave, ex.: nome:Igor - nesse caso a chave é nome;

console.log(objeto.nome) //agora coloco o nome da variável do objeto e ponto e chave;
console.log(objeto['idade']) // esse é outro jeito de chamar a chave;

console.log('____________________________________________________________________________________________________________________________')


//importante de entender que a chave é uma variável comumente chamada de PROPRIEDADE do objeto e pra passar qualquer valor pra essa variável (propriedade) eu uso o :

//Logo eu posso dar a essa propriedade qualquer valor inclusive um array e outro Objeto

var aluno={nomes:['Roosevelt','Anna','Pedro'], nota:[7,8,5]};


console.log(aluno.nomes[1]) //assim eu imprimo o nome da Anna, pois ela está nessa posição;
console.log(aluno['nota'][1]) //esse é outro modo de imprimir na tela as propriedades do objeto;


/*Eu posso inserir uma nova propriedade fora do objeto de duas formas:
1ª nomedoobjeto.novapropriedade=valor;
2ª nomedoobjeto['novaPropriedade']=valor;
*/
aluno.nota2=[6,5,3];
aluno["sobrenome"] = ['Lucas', 'Ferreira', 'Matheus']; //nesse modelo é interessante, porque posso criar uma variável pra novos valores do objeto e colocar aqui ->

var newProp ='Mátricula'

aluno[newProp]=['12124','52226','56677'];

console.log(aluno) //de tal modo todos os dados do meu objeto vão aparecer

console.log('____________________________________________________________________________________________________________________________')


//Desse modo podemos criar um objeto e alimentar ele com dados:

var newObj = {};

newObj.nomi=['Pedro','Marcela','Karol'];
newObj.classe=['1ªano','3ºano','5ºano']

console.log(newObj)

console.log('===============================================================================================================================')
console.log('===============================================================================================================================')
console.log('===============================================================================================================================')

console.log('Médotos do Objeto')

//O método do objeto é uma função dentro do objeto, logo, propriedade é uma variável e método uma função;

var metodo = {}

metodo.name=['Pedro','Marcela','Karol'];
metodo.n1=[7,8,5];
metodo.n2=[6,5,3];
metodo.media=function media(p1,p2) {
    return (p1+p2)/2;
}

console.log(metodo.name[0]);
console.log(metodo.media(metodo.n1[0],metodo.n2[0]));

console.log('____________________________________________________________________________________________________________________________')
console.log('____________________________________________________________________________________________________________________________')

//podemos usar uma função pra rodar dentro dos metodos

function med() {
    return ( this.s1[0] + this.s2[0] )/2; //p/ a função saber que estou me referindo ao salário preciso colocar this.
}

var escola1 = {}

escola1.teacher=['Orlando','Carla','Richard'];
escola1.s1=[1700.00,1800.00,7000.00];
escola1.s2=[950.00,1030.00,5800.00];
escola1.calcM=med;

var escola2 = {}

escola2.teacher=['Marçal','Bento','Amanda'];
escola2.s1=[700.00,800.00,5000.00];
escola2.s2=[650.00,530.00,3000.00];
escola2.calcM=med;

//Note que as variáveis são as mesmas mas o método muda;



console.log(escola1.teacher[0]);
console.log(escola1.calcM());


console.log('____________________________________________________________________________________________________________________________')

console.log(escola2.teacher[0]);
console.log(escola2.calcM());

