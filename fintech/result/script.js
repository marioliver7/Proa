let p = document.querySelector('p');
let btn = document.querySelector('button');

const urlSearchParams = URL.urlSearchParams;
const params = (new URL(document.location)).searchParams;

p.innerHTML = `Olá ${params.get('nome')} voce pagando em ${params.get('valor')} o valor de ${params.get('valor2')} terá o valor de ${params.get('montante')}`;

function voltar() {
    window.location.href = '../responsive.html';
}


