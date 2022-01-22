//&& = e - logo preciso apenas de 1 F pra tudo ser FALSO; ex.:

var idade=19;

var menor20= idade < 20;
var maior25= idade > 25;

var intervalo = menor20 && maior25;

// P/ inserir uma string e uma variavel use a , pra separar

console.log("Idade,", idade); //19
console.log("Menor que 20,", menor20); //verdadeiro
console.log("Maior que 25,", maior25); //falso
console.log("Entre 20 a 25,", intervalo) //falso

//|| = ou - logo preciso de apenas 1 V p/ tudo VERDADEIRO;ex.:

var age=9;

var menor10= age < 10;
var maior65= age > 65;

var gratuidade = menor10 || maior65;

console.log("Idade,", age); //9
console.log("Menor que 10,", menor10); //verdadeiro
console.log("Maior que 65,", maior65); //falso
console.log("Tem direito a gratuidade:", gratuidade) //verdadeiro


//Negativo (!) - só é aplicável a valores boleanos (verdadeiro/falso) e ao aplicar interve o valor;

var peso=130;

var menor45= peso < 45;
var maior95= peso > 95;
var negative95= !maior95;

console.log("Peso em Kg,", peso); //130
console.log("Peso menor que 45 Kg,", menor45); //falso
console.log("Peso maior que  95 Kg", maior95); //verdadeiro
console.log("Precisa emgrecer?", negative95) //Negativo 