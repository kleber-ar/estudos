/* Você está planejando uma viagem até a praia com colegas.
Uma das tarefas para a viagem acontecer é calcular quantos dias ela irá levar.
Você está em São Paulo, o João está em Belo Horizonte e a Joana está em Salvador.
Levando em conta que o destino do grupo é Natal, no Rio Grande do Norte, crie um algoritmo que calcula a duração de dias de uma viagem levando em conta a quantidade total de horas.
O total de dias deve ter precisão de 3 dígitos.

Informações: 
São Paulo até Belo Horizonte = 7 horas e 23 minutos;
Belo Horizonte até Salvador = 19 horas e 57 minutos;
Salvador até Natal = 15 horas e 32 minutos. */

let spXbh = 7 + 23 / 60;
let bhXsa = 19 + 57 / 60;
let saXna = 15 + 32 / 60;

let soma = spXbh + bhXsa + saXna;

let totalInDay = soma / 24;
let totalInHoras = soma % 24;

console.log(
  `A viagem levará ${Math.floor(totalInDay)} Dia(s) e ${Math.floor(totalInHoras)} Horas.`,
);
