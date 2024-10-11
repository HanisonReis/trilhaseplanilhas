// script.js

// Função para formatar números com dois dígitos
function formatNumber(number) {
    return number < 10 ? "0" + number : number;
}

// Função para iniciar a contagem regressiva
function startCountdown(duration, displays) {
    let timer = duration, hours, minutes, seconds;

    function updateCountdown() {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = formatNumber(hours);
        minutes = formatNumber(minutes);
        seconds = formatNumber(seconds);

        displays.forEach(display => {
            display.textContent = hours + ":" + minutes + ":" + seconds;
        });

        if (--timer >= 0) {
            requestAnimationFrame(updateCountdown);
        }
    }

    requestAnimationFrame(updateCountdown);
}

// Inicializa a contagem regressiva e adiciona evento de clique à logo
window.onload = function () {
    const sixHours = 60 * 60 * 6;
    const displays = [
        document.querySelector('#contador'),
        document.querySelector('#contador2')
    ];
    displays.forEach(display => display.setAttribute('aria-live', 'polite'));
    startCountdown(sixHours, displays);

    displays.forEach(display => display.style.fontSize = '90px'); // Ajuste o tamanho do contador regressivo

    // Adiciona evento de clique à logo
    const logo = document.querySelector('.logo a');
    logo.addEventListener('click', function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        document.querySelector('#trilhas-e-planilhas').scrollIntoView({
            behavior: 'smooth' // Rola suavemente até a seção
        });
    });

    // Adiciona evento de clique ao body
    document.body.addEventListener('click', function (event) {
        // Verifica se o clique não foi na logo ou nos botões
        if (!event.target.closest('.logo a') && !event.target.closest('.btn-contato button')) {
            document.querySelector('#liberdade-financeira').scrollIntoView({
                behavior: 'smooth' // Rola suavemente até a seção
            });
        }
    });
};
