//Arrays = Vetores.Existem duas maneiras de criar um array
//Array é um aestrutura de dados que pode criar vários dados em sequência
//A 1ª e menos usada é com new Array(); ai passa dados pra ele

var vetor = new Array('Roosevelt', 'Anna', 'José', 'Josefina'); //sempre use , pra separar os elementos do array
//observe que vai aparecer um [] no console com os nomes
//dentro do array cabe qualquer tipo de dado - strings, numeros, boleanos, variáveis, mais arrays até objetos;

console.log(vetor[0]);//note que a 1ª posição é 0


//A 2ª é com []; ai passa dados pra ele

 var array= ['Roosevelt', 'Anna', 'José', 'Josefina']

 console.log(array[1])

//Se eu quiser exibir o tamanho do meu array eu uso length

var array1= ['Roosevelt', 'Anna', 'José', 'Josefina']

console.log(array1.length)

//Mais pra que que eu vou usar isso ?? 
//Imagine que eu queria exibir nomes de uma lista de alunos, como eu faria?
//Inicialmente iria ter que declarar uma variável pra cada aluno e exibir cada um, mas ai que entra o array, eu posso juntar ele com for e resolver a parada;

var array2 = ['Roosevelt', 'Anna', 'José', 'Josefina', 'Pedro', 'Maria', 'João','Airton','Cafú', 'Ronaldo','Pelé']

//agora eu sei que cada posição corresponde a um número vou fazer um for que e colocar um elemento de repetição no indice do array

for(var i=0; i<array2.length; i++){
    console.log(array2[i])
}
//Obs.: uso o array2.length porque quero de 0 até a última posição, assim posso só inserir um nome em array2 que automaticamente vai ser exibido

//Eu posso combinar o array com o for de outras maneiras mais faceis:

var array3 = ['Melão', 'Feijão', 'Arroz', 'Pimenta', 'Macarrão', 'Carne', 'Cebola']

for( var i=0 in array3){
    console.log(array3[i]);
}
// in vai pegar o indice do array3

//posso usar o of que vai pegar o proprio elemento

var objetos = ['Cadeira', 'Computador', 'Mesa', 'Panela', 'Maceneta', 'Lapis', 'Geladeira']

for( var i of objetos ){
    console.log(i);
}