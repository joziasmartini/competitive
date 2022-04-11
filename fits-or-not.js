/*
beecrowd | 1240
Encaixa ou Não I
Adaptado por Neilor Tonin, URI  Brasil
Timelimit: 1

Paulinho tem em suas mãos um pequeno problema. A professora lhe pediu que ele construísse um programa para verificar, à partir de dois valores inteiros A e B, se B corresponde aos últimos dígitos de A.

Entrada

A entrada consiste de vários casos de teste. A primeira linha de entrada contém um inteiro N que indica a quantidade de casos de teste. Cada caso de teste consiste de dois inteiros A (1 ≤ A < 231 ) e B (1 ≤ B < 231) positivos.

Saída

Para cada caso de entrada imprima uma mensagem indicando se o segundo valor encaixa no primeiro valor, confome exemplo abaixo.

Exemplo de entrada

4
5678690 78690
5434554 543
1243 1243
54 654

Exemplo de saída

encaixa
nao encaixa
encaixa
nao encaixa
*/

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = "4\n5678690 78690\n5434554 543\n1243 1243\n54 654";
var lines = input.split("\n");

var casos = parseInt(lines.shift());

while (casos !== 0) {
  var linhaAtual = lines.shift();
  var numeroUm = linhaAtual.split(" ")[0];
  var numeroDois = linhaAtual.split(" ")[1];
  numeroUm = numeroUm.substring(numeroUm.length - numeroDois.length);

  if (numeroUm == numeroDois) {
    console.log("encaixa");
  } else {
    console.log("nao encaixa");
  }

  casos--;
}
