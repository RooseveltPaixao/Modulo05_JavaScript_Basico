// Posso usar uma string com "" ou ''  se eu quiser escrever um texto com aspas dentro eu uso aspas simples fora e dupla dentro ou virse e versa;

var string='Arro é melhor que feijão? de acordo com nero: "não"';

console.log(string);

//é importante usar um padrão;

//Posso usar o + em strings e isso vai contatenar o texto.

var text1='Arroz';
text1 +=' com';
text1 +=' Feijão';
console.log(text1);

//No console os numeros aparecem AZUL e a string Preta
//OBS.: + é a única operação que uma string aceita, se eu usar outro vai dar NaN (Não é um Número) no console. Porém se a string for um número o JS transforma ela em number e aceita as outras operações;

var text2='Rooselt';
text2 *=2;
console.log(text2);

var number='8'*2; 
console.log(number);
//Assim ele vai transformar essa string em number, se tivesse qualquer letra ali daria NaN


//Note que se eu usar o + ao invés das outras operações vai contatenar

var a='8'
var b='7'

var c=a+b; 

console.log(c)
//Resultado é 87; porém eu posso transformar minhas strings em números usando parseInt(variáve)

var x='8';
var y='7'

var z= parseInt(x) + parseInt(y); 

//Se o número for quebrado use parseFloat;