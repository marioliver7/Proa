let resultado = document.querySelector('p');
let idade = document.querySelector('input');

function calcular() {
    resultado.innerHTML = `Seu cachorro tem ${idade.value * 7}`;
}