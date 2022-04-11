/*
beecrowd | 1253
Cifra de César
By TopCoder*  USA
Timelimit: 1

Júlio César usava um sistema de criptografia, agora conhecido como Cifra de César, que trocava cada letra pelo equivalente em duas posições adiante no alfabeto (por exemplo, 'A' vira 'C', 'R' vira 'T', etc.). Ao final do alfabeto nós voltamos para o começo, isto é 'Y' vira 'A'. Nós podemos, é claro, tentar trocar as letras com quaisquer número de posições.

Entrada

A entrada contém vários casos de teste. A primeira linha de entrada contém um inteiro N que indica a quantidade de casos de teste. Cada caso de teste é composto por duas linhas. A primeira linha contém uma string com até 50 caracteres maiúsculos ('A'-'Z'), que é a sentença após ela ter sido codificada através desta Cifra de César modificada. A segunda linha contém um número que varia de 0 a 25 e que representa quantas posições cada letra foi deslocada para a direita.

Saída

Para cada caso de teste de entrada, imprima uma linha de saída com o texto decodificado (transformado novamente para o texto original) conforme as regras acima e o exemplo abaixo.

Exemplo de entrada

6
VQREQFGT
2
ABCDEFGHIJKLMNOPQRSTUVWXYZ
10
TOPCODER
0
ZWBGLZ
25
DBNPCBQ
1
LIPPSASVPH
4

Exemplo de saída

TOPCODER
QRSTUVWXYZABCDEFGHIJKLMNOP
TOPCODER
AXCHMA
CAMOBAP
HELLOWORLD
*/

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input =
  "6\nVQREQFGT\n2\nABCDEFGHIJKLMNOPQRSTUVWXYZ\n10\nTOPCODER\n0\nZWBGLZ\n25\nDBNPCBQ\n1\nLIPPSASVPH\n4";
var lines = input.split("\n");

var casos = parseInt(lines.shift());

while (casos !== 0) {
  var str = lines.shift();
  var desl = parseInt(lines.shift());

  var resultado = transforma(str, desl);

  console.log(resultado);

  casos--;
}

function transforma(string, deslocamentos) {
  return string
    .split("")
    .map((char) => {
      const charCode = char.charCodeAt();

      if (charCode - deslocamentos < 65) {
        var adicional = 65 - (charCode - deslocamentos);
        return String.fromCharCode(91 - adicional);
      } else {
        return String.fromCharCode(charCode - deslocamentos);
      }
    })
    .join("");
}
