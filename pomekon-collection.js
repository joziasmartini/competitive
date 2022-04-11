/*
beecrowd | 2174
Coleção de Pomekon
Por Gabriel Duarte, UNIFESO BR Brazil
Timelimit: 1

Desde que foi lançado oficialmente o Pomekon no Brasil, Dabriel está tentando realizar seu maior sonho: Ser um Mestre Pomekon. Sua meta é conquistar os 151 Pomekons disponíveis. Ele já conseguiu capturar muitos monstrinhos, porém em sua cidade aparecem muitos Pomekons repetidos, fazendo com que ele capture diversas vezes o mesmo Pomekon.

Vendo que sua mochila está bem cheia, Dabriel pediu para que você fizesse um programa de computador que informasse a ele quantos Pomekons faltam para completar a coleção.

Entrada

A primeira linha do caso de teste consiste de um inteiro N (1 ≤ N ≤ 10³), representando a quantidade de Pomekons que Dabriel já capturou.
As próximas N linhas consistem de uma string S (1 ≤ |S| ≤ 10³), representando o nome de cada Pomekons. O nome de cada Pomekons consiste apenas de letras maiúsculas e minúsculas.

Saída

Você deverá imprimir: "Falta(m) X pomekon(s).", onde X representa a quantidade Pomekons não capturados.

Exemplos de entrada

7
Charmander
Caterpie
Pidgeot
Rattata
Zubat
Zubat
Zubat

Exemplos de saída

Falta(m) 146 pomekon(s).

Exemplos de entrada (2)

8
Zubat
Zubat
Zubat
Zubat
Zubat
Zubat
Zubat
Zubat

Exemplos de saída (2)

Falta(m) 150 pomekon(s).
*/

var input = "7\nCharmander\nCaterpie\nPidgeot\nRattata\nZubat\nZubat\nZubat";
var input2 = "8\nZubat\nZubat\nZubat\nZubat\nZubat\nZubat\nZubat\nZubat";
var lines = input.split("\n");

var capturados = parseInt(lines.shift());
var pomekons = 151;
var pomekonsObtidos = [];

// Para cada linha de pomekon
lines.map((line) => {
  // Se o pomekon não está incluso no array
  if (!pomekonsObtidos.includes(line)) {
    // Inclui ele e diminui os pomekons faltantes
    pomekonsObtidos.push(line);
    pomekons--;
  }
});

console.log(`Falta(m) ${pomekons} pomekon(s).`);
