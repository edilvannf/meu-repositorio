const botoes = document.querySelectorAll(".botao");
const cronometroElement = document.getElementById("cronometro");
let segundos = 600; // Tempo inicial em segundos (10 minutos)
let cronometroInterval;

function atualizarCronometro() {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    cronometroElement.textContent = `${minutos < 10 ? '0' + minutos : minutos}:${segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes}`;
    if (segundos === 0) {
        clearInterval(cronometroInterval);
    } else {
        segundos--;
    }
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