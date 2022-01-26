//pra criar uma datad o dia de hoje eu uso o new Date()

var a = new Date();
console.log(a)
console.log('Repare: dia da semana, mês,  ano, horas:minutos:segundos')

console.log('_______________________________________________________________________________________________________________________________')

//Se eu quiser uma data mais específica, passo os valores nessa ordem:years,month,day,hours,minutes,seconds,millisecond;

//Obs.: o ano passado em números é o índice de um array, então o 0=Jan e o 11=Dez;

var b = new Date(2022,00,26,10,36) 

console.log(b)

console.log('_______________________________________________________________________________________________________________________________')

//Se eu só passar um número o sistema vai entender que estou passando um valor em milissegundos, assim vai exibir isso a partir de 31 de Dezemebro de 1969 as 21:00:00

var c = new Date(0) //menor data


var d = new Date(1000000000000000) //maior data



console.log(c)
console.log(d)


console.log('_______________________________________________________________________________________________________________________________')

//Eu posso passar uma string tbm, mas tem que estar com o formato inglês que é mês/dia/ano
var e = new Date('Jan 26 2022 10:52') 
var f = new Date('05-13-2016 16:52:52') //posso escrever de outra forma, mas respeitando mês/dia/ano, repare que como é uma string o mês de Janeiro é 01 e Dezembro é 12


console.log(e);
console.log(f);

//Eu posso usar get() e fazer com que apareça somente o dia, hora, etc

console.log (f.getFullYear()) //pro ano
console.log(f.getDate()) //pra data

console.log(f.getDay()) //isso é pra dia da semana e vai de 0  a 6, assim como mês vai de 0 a 11
//pra Imprimir dimingo, etc eu posso criar um array com esses nomes, assim quando ele chamar o index vai está correlacionado

var dias=['Dom','Seg', 'Ter','Qua','Qui','Sex','Sab']

console.log(dias[f.getDay()])//poderia fazer o mesmo pra mês

console.log(f.getHours());
console.log(f.getMinutes());
console.log(f.getSeconds());
console.log(f.getMilliseconds());
console.log(f.getTime()); //retorna a data e a hora em milissegundos;

//posso mudar uma coisa específica tbm usando set e qualquer um desses que a gente já viu

console.log(f.setHours(21)); //aparece só em milissegundos
console.log(f); //agora mudou 




console.log('_______________________________________________________________________________________________________________________________')