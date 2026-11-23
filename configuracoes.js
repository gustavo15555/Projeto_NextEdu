document.addEventListener("DOMContentLoaded", function() {

    const notificacoes = document.getElementById("notificacoes");
    const statusNotificacoes = document.getElementById("status-notificacoes");
    const idioma = document.getElementById("idioma");

    const textos = {
        pt: {
            titulo: "Configurações",
            subtitulo: "Personalize sua experiência no NextEdu.",
            aparencia: "Aparência",
            tema: "Modo escuro",
            descricaoTema: "Altere entre o tema claro e escuro.",
            modoEscuro: "🌙 Modo Escuro",
            modoClaro: "☀️ Modo Claro",
            notificacoes: "Notificações",
            aviso: "Receber notificações",
            descricaoAviso: "Ative ou desative os avisos do NextEdu.",
            ativadas: "Notificações ativadas",
            desativadas: "Notificações desativadas",
            idioma: "Idioma",
            lingua: "Idioma do aplicativo",
            descricaoLingua: "Escolha o idioma de sua preferência.",
            conta: "Conta",
            privacidade: "Privacidade",
            descricaoPrivacidade: "Suas preferências ficam salvas neste dispositivo."
        },

        en: {
            titulo: "Settings",
            subtitulo: "Customize your NextEdu experience.",
            aparencia: "Appearance",
            tema: "Dark mode",
            descricaoTema: "Switch between light and dark themes.",
            modoEscuro: "🌙 Dark Mode",
            modoClaro: "☀️ Light Mode",
            notificacoes: "Notifications",
            aviso: "Receive notifications",
            descricaoAviso: "Enable or disable NextEdu alerts.",
            ativadas: "Notifications enabled",
            desativadas: "Notifications disabled",
            idioma: "Language",
            lingua: "App language",
            descricaoLingua: "Choose your preferred language.",
            conta: "Account",
            privacidade: "Privacy",
            descricaoPrivacidade: "Your preferences are saved on this device."
        },

        es: {
            titulo: "Configuración",
            subtitulo: "Personaliza tu experiencia en NextEdu.",
            aparencia: "Apariencia",
            tema: "Modo oscuro",
            descricaoTema: "Cambia entre el tema claro y oscuro.",
            modoEscuro: "🌙 Modo Oscuro",
            modoClaro: "☀️ Modo Claro",
            notificacoes: "Notificaciones",
            aviso: "Recibir notificaciones",
            descricaoAviso: "Activa o desactiva los avisos de NextEdu.",
            ativadas: "Notificaciones activadas",
            desativadas: "Notificaciones desactivadas",
            idioma: "Idioma",
            lingua: "Idioma de la aplicación",
            descricaoLingua: "Elige tu idioma preferido.",
            conta: "Cuenta",
            privacidade: "Privacidad",
            descricaoPrivacidade: "Tus preferencias se guardan en este dispositivo."
        }
    };

    function atualizarIdioma(codigo) {
        const t = textos[codigo] || textos.pt;

        document.documentElement.lang =
            codigo === "pt" ? "pt-BR" : codigo;

        document.getElementById("titulo-config").textContent = t.titulo;
        document.getElementById("subtitulo-config").textContent = t.subtitulo;
        document.getElementById("titulo-aparencia").textContent = t.aparencia;
        document.getElementById("titulo-tema").textContent = t.tema;
        document.getElementById("descricao-tema").textContent = t.descricaoTema;
        document.getElementById("titulo-notificacoes").textContent = t.notificacoes;
        document.getElementById("titulo-aviso").textContent = t.aviso;
        document.getElementById("descricao-aviso").textContent = t.descricaoAviso;
        document.getElementById("titulo-idioma").textContent = t.idioma;
        document.getElementById("titulo-lingua").textContent = t.lingua;
        document.getElementById("descricao-lingua").textContent = t.descricaoLingua;
        document.getElementById("titulo-conta").textContent = t.conta;
        document.getElementById("titulo-privacidade").textContent = t.privacidade;
        document.getElementById("descricao-privacidade").textContent = t.descricaoPrivacidade;

        atualizarStatus();
        atualizarTextoTema(t);
    }

    function atualizarStatus() {
        const codigo = localStorage.getItem("idioma") || "pt";
        const t = textos[codigo] || textos.pt;

        statusNotificacoes.textContent = notificacoes.checked
            ? t.ativadas
            : t.desativadas;
    }

    function atualizarTextoTema(t) {
        const botaoTema = document.getElementById("btn-tema");

        if (botaoTema) {
            botaoTema.textContent =
                document.body.classList.contains("dark")
                ? t.modoClaro
                : t.modoEscuro;
        }
    }

    notificacoes.checked =
        localStorage.getItem("notificacoes") !== "false";

    notificacoes.addEventListener("change", function() {
        localStorage.setItem("notificacoes", notificacoes.checked);
        atualizarStatus();
    });

    idioma.value = localStorage.getItem("idioma") || "pt";

    idioma.addEventListener("change", function() {
        localStorage.setItem("idioma", idioma.value);
        atualizarIdioma(idioma.value);
    });

    atualizarIdioma(idioma.value);

    const botaoTema = document.getElementById("btn-tema");

    if (botaoTema) {
        const observador = new MutationObserver(function() {
            const codigo = localStorage.getItem("idioma") || "pt";
            atualizarTextoTema(textos[codigo] || textos.pt);
        });

        observador.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"]
        });
    }
});