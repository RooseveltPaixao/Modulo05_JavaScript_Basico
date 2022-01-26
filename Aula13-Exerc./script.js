//Criar uma lista com o nome do aluno, valor da prova1 e prova 2, média e se foi aprovado ou reprovado

//Preciso criar um "banco de dados" :

var nome=['Anna', 'Gabriel','Pedro', 'Mathues', 'Jade','Diane', 'Monji', 'Marta'];
var nota1 = [7.2,8.1,5.4,6.3,7.9,8.2,10.0,9.6];
var nota2 = [4.7,2.4,7.5,3.2,4.9,5.7,10.0,10.0];

function media(n1,n2) {
    return(n1+n2)/2;
}
function situacao(media) {
    var resultado ='Reprovado';
    if (media>=6){
        resultado ='Aprovado';
    }
    return resultado;
    
}

for (index in nome){
    n = nome[index];
    nA = nota1[index];
    nB = nota2[index]; //fiz isso pra ficar mais claro meu código abaixo
    m=media(nA,nB);

    console.log(n+" suas notas são: "+nA+" e "+nB+' com média de:  '+m+ ' você está '+situacao(m));
}