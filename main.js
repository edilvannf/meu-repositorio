const botoes = document.querySelectorAll(".botao");
        const cronometroElement = document.getElementById("cronometro");
        let segundos = 0;
        let minutos = 0;
        let horas = 0;
        let cronometroInterval;

        function atualizarCronometro() {
            segundos++;
            if (segundos >= 60) {
                segundos = 0;
                minutos++;
                if (minutos >= 60) {
                    minutos = 0;
                    horas++;
                }
            }
            cronometroElement.textContent = `${horas < 10 ? '0' + horas : horas}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
        }

        cronometroInterval = setInterval(atualizarCronometro, 1000);

        for (let i = 0; i < botoes.length; i++) {
            botoes[i].onclick = function () {
                for (let j = 0; j < botoes.length; j++) {
                    botoes[j].classList.remove("ativo");
                }
                botoes[i].classList.add("ativo");
            }
        }