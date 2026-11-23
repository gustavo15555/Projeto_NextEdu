function aplicarTema() {
    const tema = localStorage.getItem("tema");
    const modoEscuro = tema === "dark";

    document.body.classList.toggle("dark", modoEscuro);

    document.querySelectorAll(".login-logo[data-light-src][data-dark-src]").forEach(function(logo) {
        logo.src = modoEscuro ? logo.dataset.darkSrc : logo.dataset.lightSrc;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    aplicarTema();

    const botaoTema = document.getElementById("btn-tema");

    if (botaoTema) {
        function atualizarBotao() {
            botaoTema.textContent =
                document.body.classList.contains("dark")
                ? "☀️ Modo Claro"
                : "🌙 Modo Escuro";
        }

        atualizarBotao();

        botaoTema.addEventListener("click", function() {
            const modoEscuro = !document.body.classList.contains("dark");

            localStorage.setItem("tema", modoEscuro ? "dark" : "light");

            aplicarTema();
            atualizarBotao();
        });
    }
});

window.addEventListener("storage", aplicarTema);