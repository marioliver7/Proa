function formulario() {
    let nome = document.querySelector('#nome').value;
    let mensalidade = document.querySelector('#mensalidade');
    let tempo = document.querySelector('#ano');  
    let form = document.querySelector('form');

    let errorName = document.querySelector('.errorName');
    let errorMensa = document.querySelector('.errorMensa');
    let errorTempo = document.querySelector('.errorTempo');  
    
    let valor = mensalidade.value;
    let valor2 = tempo.value;
    montante = valor * valor2;

    if(!nome) {
        errorName.style.display = 'block';
    }

    if(!valor) {
        errorMensa.style.display = 'block';
    }
    
    if(!valor2) {
        errorTempo.style.display = 'block';
    }
    
    else {
        window.location.href = `/result/result.html?nome=${nome}&valor=${valor}&valor2=${valor2}&montante=${montante}`;
    }
}