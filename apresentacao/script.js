let index = 0;
        const questions = [
            {
                "pergunta": "Algo que eu amo...",
                "resposta": "Família, meus pets, programar.",
                "cor": "#355070"
            },
            {
                "pergunta": "Algo que eu quero que mude...",
                "resposta": "Timidez e ansiedade.",
                "cor": "#3c5a7e"
            },
            {
                "pergunta": "Algo que eu quero muito...",
                "resposta": "Aprender a tocar algum instrumento, fluência em inglês, trabalho no exterior.",
                "cor": "#45668f"
            },
            {
                "pergunta": "Algo que te gerou uma surpresa...",
                "resposta": "PROA, ETEC, Duolingo.",
                "cor": "#4d719e"
            },
            {
                "pergunta": "Algo que ninguém sabe...",
                "resposta": "Tem muito texto pra escrever, então vou só falar rs.",
                "cor": "#547aaa"
            }
        ]


        function typeWriter(elemento) {
            const textoArray = elemento.innerHTML.split('');

            elemento.innerHTML = '';

            textoArray.forEach((letra, i) => {
                setTimeout(() => elemento.innerHTML += letra, 55 * i);
            });
        }

        const teste = document.querySelector('.p');

        function next() {
            let h2 = document.querySelector('h2');
            let paragrafo = document.querySelector('.p');

            
            h2.innerText = questions[index].pergunta;
            paragrafo.innerText = questions[index].resposta;
            
            typeWriter(teste);
            
            document.body.style.backgroundColor = questions[index].cor;
            index++;
        }

        next();