// Seta de voltar das páginas compartilhadas (Configurações, Ajuda, Minha conta):
// leva ao perfil do professor ou do aluno, conforme quem fez login.
document.addEventListener("DOMContentLoaded", function () {
    var tipo = localStorage.getItem("tipoUsuario");
    var destino = tipo === "professor" ? "professor-perfil.html" : "perfil.html";
    document.querySelectorAll(".js-voltar").forEach(function (a) {
        a.setAttribute("href", destino);
    });
});
