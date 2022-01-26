//Como já visto posso criar um alerta com o comando alert

//o prompt é bem parecido, porém é interativo, podendo assim amarzenar dados que o usuário introduzir.
var a= prompt('Qual o seu nome?');
var b=prompt('Qual é o sua idade?');

alert('Bom dia, ' + a); //o prompt transforma tudo em string, assim o + é concatenação;

alert('Sua didade é de ' + b +' anos');

//E se eu quisesse receber um número no prompt e trabalhar com isso em numero não em string?
// Eu tenho que transformar meu prompt em parseInter

var x = parseInt( prompt('Escolha um número: '));
var dobro= x+x;

alert('O dobro de '+ x +' é: ' + dobro);
//se eu não coloca-se o parseInt o resultado seria "O doro de x é xx"