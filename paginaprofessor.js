// Gerador das páginas da área do professor (NextEdu).
// Uso: node paginaprofessor.js  -> recria os arquivos professor-*.html
const fs = require("fs");
const path = require("path");

const base = __dirname;

const head = (title) => `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NextEdu - ${title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="professor.css">
<script src="modoescuro.js" defer></script>
<script src="idioma.js" defer></script>
<script src="idioma-professor.js" defer></script>
<script src="professor.js" defer></script>
</head>
`;

/* ---------- Ícones (SVG inline) ---------- */
const svg = (inner, extra = "") =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${inner}</svg>`;

const I = {
    menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
    bell: svg(`<path d="M18 9a6 6 0 1 0-12 0c0 6.5-2.5 8-2.5 8h17S18 15.500 18 9z"/><path d="M10.200 20.500a2 2 0 0 0 3.600 0"/><path d="M12 3V2"/>`),
    back: svg(`<path d="M20 12H4M10.500 5.500 4 12l6.500 6.500"/>`, 'stroke-width="2"'),
    plus: svg(`<path d="M12 4v16M4 12h16"/>`, 'stroke-width="2.600"'),
    chevron: `<svg class="prof-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.200" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>`,
    chevronLeft: svg(`<path d="m15 5-7 7 7 7"/>`, 'stroke-width="2.400"'),
    chevronRight: svg(`<path d="m9 5 7 7-7 7"/>`, 'stroke-width="2.400"'),
    chevronDown: svg(`<path d="m5 9 7 7 7-7"/>`, 'stroke-width="2.600"'),
    pencil: svg(`<path d="M16.500 3.500a2.100 2.100 0 0 1 3 3L7 19l-4 1 1-4z"/><path d="m15 5 4 4"/>`),
    userFill: `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="23" r="12" fill="currentColor"/><path d="M8 64c0-14 10.500-22 24-22s24 8 24 22z" fill="currentColor"/></svg>`,
    gear: svg(`<circle cx="12" cy="12" r="3.200"/><path d="M19.400 15a1.700 1.700 0 0 0 .3 1.900l.1.100a2 2 0 1 1-2.800 2.800l-.1-.1a1.700 1.700 0 0 0-1.900-.3 1.700 1.700 0 0 0-1 1.500V21a2 2 0 1 1-4 0v-.1a1.700 1.700 0 0 0-1.100-1.500 1.700 1.700 0 0 0-1.900.3l-.1.100a2 2 0 1 1-2.800-2.800l.1-.1a1.700 1.700 0 0 0 .3-1.900 1.700 1.700 0 0 0-1.500-1H3a2 2 0 1 1 0-4h.1a1.700 1.700 0 0 0 1.500-1.100 1.700 1.700 0 0 0-.3-1.900l-.1-.1a2 2 0 1 1 2.800-2.800l.1.100a1.700 1.700 0 0 0 1.900.3h0a1.700 1.700 0 0 0 1-1.500V3a2 2 0 1 1 4 0v.1a1.700 1.700 0 0 0 1 1.500h0a1.700 1.700 0 0 0 1.900-.3l.1-.1a2 2 0 1 1 2.800 2.800l-.1.100a1.700 1.700 0 0 0-.3 1.900v0a1.700 1.700 0 0 0 1.500 1H21a2 2 0 1 1 0 4h-.1a1.700 1.700 0 0 0-1.500 1z"/>`, 'stroke-width="1.400"'),
    help: svg(`<circle cx="12" cy="12" r="10"/><path d="M9.100 9a3 3 0 0 1 5.800 1c0 2-3 2.500-3 4.500"/><path d="M12 17.800h.01"/>`, 'stroke-width="1.600"'),
    logout: svg(`<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>`, 'stroke-width="1.600"'),
    person: svg(`<circle cx="12" cy="8" r="4.200"/><path d="M4.500 21c0-4.200 3.400-7 7.500-7s7.500 2.800 7.500 7"/>`, 'stroke-width="1.600"'),
};

/* ---------- Barra inferior (mesma estrutura/estilo do aluno: .bottom-nav) ---------- */
function nav(active) {
    const links = [
        ["home", "⌂", "Início", "professor-home.html"],
        ["turmas", "♧", "Turmas", "professor-turmas.html"],
        ["aulas", "✎", "Aulas", "professor-aulas.html"],
        ["eventos", "▦", "Eventos", "professor-eventos.html"],
        ["perfil", "♙", "Perfil", "professor-perfil.html"],
    ];
    return `<nav class="bottom-nav">${links.map(([key, icon, label, href]) =>
        `<a ${active === key ? 'class="active" ' : ""}href="${href}"><span class="nav-icon">${icon}</span>${label}</a>`
    ).join("\n        ")}</nav>`;
}

const sideMenu = `<div class="prof-side-menu"><a href="professor-home.html">Início</a><a href="professor-turmas.html">Suas turmas</a><a href="professor-aulas.html">Horários e aulas</a><a href="professor-eventos.html">Eventos</a><a href="professor-perfil.html">Perfil</a></div>`;

// left: "menu" | "back"; right: "plus" | "bell"
function header(title, left = "back", right = "plus") {
    const l = left === "menu"
        ? `<button class="prof-icon-btn menu" onclick="professorToggleMenu()" aria-label="Menu">${I.menu}</button>`
        : `<button class="prof-icon-btn" onclick="history.back()" aria-label="Voltar">${I.back}</button>`;
    const r = right === "bell"
        ? `<button class="prof-icon-btn right bell" onclick="professorNotificacoes()" aria-label="Notificações">${I.bell}</button>`
        : `<button class="prof-icon-btn right" onclick="professorAdd('item')" aria-label="Adicionar">${I.plus}</button>`;
    return `<header class="prof-header">${l}<h1>${title}</h1>${r}${left === "menu" ? sideMenu : ""}</header>`;
}

function page(name, title, active, body) {
    const html = `${head(title)}<body class="prof-page has-bottom-nav">
<main class="prof-shell">
${body}
</main>
${nav(active)}
</body>
</html>
`;
    fs.writeFileSync(path.join(base, name), html, "utf8");
}

/* ---------- Início ---------- */
const tiles = (items, href) => items.map((t) => `<a class="prof-tile" href="${href}">${t}</a>`).join("");

let body = header("NextEdu", "menu", "bell") + `
<section class="prof-greeting"><div class="prof-avatar">${I.userFill}</div><div><h2>Olá, Professor(a)!</h2><p>Professor(a) - Matéria</p></div></section>
<a class="prof-detail-link" href="professor-perfil.html">Ver detalhes</a>
<div class="prof-home-columns">
<section class="prof-column"><h2>Suas Turmas</h2><div class="prof-panel">${tiles(["1° Ano A - EM", "2° Ano B - EM", "3° Ano C - EM", "7° Ano D - EF II"], "professor-turmas.html")}</div></section>
<section class="prof-column"><h2>Seus Horários</h2><div class="prof-panel">${tiles(["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"], "professor-aulas.html")}</div></section>
</div>`;
page("professor-home.html", "Área do Professor", "home", body);

/* ---------- Turmas ---------- */
const turmas = [
    ["1°A", "SEG - TER - QUI", "07:30 - 10:20 - 09:30"],
    ["2°B", "SEG - QUA - QUI", "10:20 - 08:40 - 07:00"],
    ["3°C", "TER - QUA - SEX", "11:30 - 09:30 - 10:20"],
    ["7°B", "SEG - QUI - SEX", "12:40 - 15:30 - 13:30"],
];
body = header("Suas turmas") + `
<div class="prof-list">${turmas.map(([t, d, h]) =>
    `<a class="prof-list-card" href="professor-turma-detalhes.html"><div class="prof-tag">${t}</div><div class="prof-list-info"><strong>${d}</strong><small>${h}</small></div>${I.chevron}</a>`).join("")}</div>`;
page("professor-turmas.html", "Suas turmas", "turmas", body);

/* ---------- Detalhes da turma (tela extra, no mesmo estilo) ---------- */
body = header("Detalhes da turma") + `
<section class="prof-greeting"><div class="prof-avatar">2°B</div><div><h2 id="turmaSelecionada">2° Ano B - Ensino Médio</h2><p>Matéria - Professor(a)</p></div></section>
<div class="prof-home-columns" style="margin-top:28px">
<section class="prof-column"><h2>Alunos</h2><div class="prof-panel"><div class="prof-tile">Ana Silva</div><div class="prof-tile">Bruno Costa</div><div class="prof-tile">Camila Souza</div><div class="prof-tile">Daniel Lima</div></div></section>
<section class="prof-column"><h2>Atalhos</h2><div class="prof-panel"><a class="prof-tile" href="professor-aulas.html">Horários da turma</a><a class="prof-tile" href="professor-planejamento.html">Planejamento de aula</a><a class="prof-tile" href="professor-aulas.html">Aulas ministradas</a></div></section>
</div>`;
page("professor-turma-detalhes.html", "Detalhes da turma", "turmas", body);

/* ---------- Horários de aulas ---------- */
const week = ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sab."];
const dates = [8, 9, 10, 11, 12, 13, 14];
const ordens = ["Primeira aula", "Segunda aula", "Terceira aula", "Quarta aula", "Quinta aula"];
// [índice do horário (0 = primeira aula), turma, aula, horário]
const contents = [
    [],
    [[2, "2°A", "Arranjo Simples", "09:30 - 10:20"]],
    [[0, "1º B", "Equações de 2º grau", "08:00 – 08:50"], [4, "3°A", "Geometria espacial", "11:30 - 12:20"]],
    [[3, "2º B", "Funções quadráticas", "10:20 – 11:30"]],
    [[0, "1º A", "Frações e números decimais", "08:00 – 08:50"], [1, "", "Frações e números decimais", "08:50 – 09:30"], [4, "3º B", "Trigonometria", "11:30 - 12:20"]],
    [[1, "2°A", "Progressão aritmética (PA)", "08:50 – 09:30"], [2, "1º B", "Porcentagem e regra de três", "09:30 - 10:20"]],
    [],
];
const daysHtml = week.map((day, i) => {
    const slots = ordens.map((ordem, s) => {
        const l = contents[i].find((c) => c[0] === s);
        const first = s === 0 ? " first" : "";
        if (!l) return `<div class="prof-slot empty${first}"></div>`;
        const [, cls, aula, hora] = l;
        const top = cls
            ? `<div class="prof-lesson-top"><b>${cls}</b><small>${ordem}</small></div>`
            : `<div class="prof-lesson-top"><small>${ordem}</small></div>`;
        return `<a class="prof-slot${first}" href="professor-planejamento.html">${top}<span class="prof-lesson-name">${aula}</span><span class="prof-lesson-time">${hora}</span></a>`;
    }).join("");
    return `<div class="prof-day"><div class="prof-day-head"><div class="prof-day-name">${day}</div><div class="prof-day-date">${dates[i]}</div></div>${slots}</div>`;
}).join("");

body = header("Horários de aulas") + `
<div class="prof-week-toolbar">
<div class="prof-select"><select aria-label="Filtrar por turma"><option>Todas as Turmas</option><option>1° Ano A - EM</option><option>2° Ano B - EM</option><option>3° Ano C - EM</option><option>7° Ano D - EF II</option></select>${I.chevronDown}</div>
<div class="prof-week-nav"><button aria-label="Semana anterior">${I.chevronLeft}</button><span>nov. 8 - nov. 14, 2026</span><button aria-label="Próxima semana">${I.chevronRight}</button></div>
</div>
<div class="prof-week">${daysHtml}</div>`;
page("professor-aulas.html", "Horários de aulas", "aulas", body);

/* ---------- Planejamento de aulas ---------- */
body = header("Planejamento de aulas") + `
<section class="prof-plan-card"><div><b>2°A</b><span class="sub">Arranjo Simples</span></div><strong>09:30 - 10:20</strong></section>
<article class="prof-content-box">
<button class="prof-edit-btn" onclick="professorEditLesson()" aria-label="Editar">${I.pencil}</button>
<h3>Introdução</h3>
<p id="lessonContent">lousa: Arranjo simples é utilizado quando escolhemos elementos de um conjunto e a ordem em que eles aparecem faz diferença. Por exemplo, AB é diferente de BA, pois a posição das letras foi alterada</p>
<p>fórmula:</p>
<div class="prof-formula"><span>A<sub>n,p</sub></span><span>=</span><span class="prof-frac"><span>n!</span><span>(n − p)!</span></span></div>
<p>questões para os alunos resolverem:</p>
<ol>
<li>Com 4 letras diferentes, quantas sequências de 2 letras podem ser formadas sem repetição?</li>
<li>Em uma corrida com 8 participantes, quantos pódios diferentes podem ser formados?</li>
<li>Uma escola possui 7 candidatos para os cargos de presidente, vice-presidente e secretário. De quantas maneiras os cargos podem ser ocupados?</li>
<li>Quantas senhas de 3 algarismos diferentes podem ser formadas utilizando os números de 1 a 5?</li>
</ol>
</article>`;
page("professor-planejamento.html", "Planejamento de aulas", "aulas", body);

/* ---------- Eventos ---------- */
const eventos = [
    ["25", "AGO", "Palestra: O futuro da Tecnologia", "14h - Auditório da Escola"],
    ["28", "AGO", "Interclasses", "08h - Quadra da Escola"],
    ["01", "SET", "Feira de Ciências", "10h - Pátio da Escola"],
    ["05", "SET", "Workshop de Redação", "14h - Sala de Eventos"],
    ["17", "SET", "Reunião Escolar", "14h - Sala de Eventos"],
];
body = header("Eventos da escola") + `
<div class="prof-list">${eventos.map(([d, m, t, h]) =>
    `<div class="prof-event"><div class="prof-event-date"><span>${d}</span><small>${m}</small></div><div><h3>${t}</h3><p>${h}</p></div>${I.chevron}</div>`).join("")}</div>`;
page("professor-eventos.html", "Eventos da escola", "eventos", body);

/* ---------- Perfil (visual idêntico ao perfil.html do aluno) ---------- */
{
    let src = fs.readFileSync(path.join(base, "perfil.html"), "utf8");
    // cabeçalho do documento
    const headNew = `<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>NextEdu - Perfil</title>

    <script src="modoescuro.js" defer></script>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="professor.css">
    <script src="idioma.js" defer></script>
    <script src="idioma-professor.js" defer></script>
    <script src="professor.js" defer></script>
</head>
`;
    src = headNew + src.slice(src.indexOf("<body"));
    src = src.replace('<body class="page-perfil">', '<body class="page-perfil has-bottom-nav">');
    src = src.replace('href="home.html" class="perfil-voltar seta-voltar"', 'href="professor-home.html" class="perfil-voltar seta-voltar"');
    src = src.replace("<h1>Perfil</h1>", `<h1>Perfil</h1>\n\n        <span class="perfil-notificacao" onclick="professorNotificacoes()" role="button" aria-label="Notificações">${I.bell.replace("<svg ", '<svg style="width:42px;height:42px" ')}</span>`);
    src = src.replace("Nome do Aluno", "Nome do Professor").replace("Aluno(a) - 2° Ano", "Professor(a) - Matéria");
    src = src.replace('href="login.html" class="perfil-menu-item"', 'href="login.html" class="perfil-menu-item"');
    // remove a seção "Seus Objetivos" (não existe no protótipo do professor)
    const o1 = src.indexOf("<!-- OBJETIVOS -->");
    const o2 = src.indexOf("</main>");
    if (o1 !== -1 && o2 !== -1) src = src.slice(0, o1) + src.slice(o2);
    src = src.replace("</body>", `\n${nav("perfil")}\n</body>`);
    fs.writeFileSync(path.join(base, "professor-perfil.html"), src, "utf8");
}

console.log("Páginas da área do professor geradas com sucesso.");
