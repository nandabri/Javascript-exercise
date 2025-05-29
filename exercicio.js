const num1 = Number(prompt('Digite um número:'));
const tit = document.getElementById ('titulo')
const Mens = document.getElementById ('texto');

tit.innerHTML = num1;
Mens.innerHTML += ' ';
Mens.innerHTML += `<p> Raiz Quadrada é: ${num1 ** 0.5}. </p>`;
Mens.innerHTML += `<p>É um número inteiro? ${Number.isInteger(num1)}</p>`;
Mens.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num1)}</p>`;
Mens.innerHTML += `<p> Arredondando para cima: ${Math.ceil(num1)} </p>`;
Mens.innerHTML += `<p> Duas casas decimais: ${num1.toFixed(2)}</p>`;