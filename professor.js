// Interações simples da área do professor NextEdu

// Marca que quem está navegando é o professor (usado pelas setas de voltar
// das páginas compartilhadas: Configurações, Ajuda e Minha conta).
try { localStorage.setItem("tipoUsuario", "professor"); } catch (e) {}

// Tradução de mensagens (usa o idioma escolhido em Configurações)
function profT(chave, vars) {
  const idioma = localStorage.getItem("idioma") || "pt";
  const i = idioma === "en" ? 0 : idioma === "es" ? 1 : -1;
  const base = {
    "msg.addPrompt": "Nome/descrição da {tipo}:",
    "msg.addOk": "{tipo} \"{nome}\" foi adicionada nesta demonstração. A versão atual não salva em banco de dados.",
    "msg.editPrompt": "Edite o conteúdo/planejamento da aula:",
    "msg.noNotif": "Você não tem novas notificações."
  };
  let txt = base[chave] || chave;
  if (i !== -1 && window.traducoesProfessor && window.traducoesProfessor[chave]) txt = window.traducoesProfessor[chave][i];
  Object.keys(vars || {}).forEach(k => { txt = txt.split("{" + k + "}").join(vars[k]); });
  return txt;
}
function profTipo(tipo) {
  const idioma = localStorage.getItem("idioma") || "pt";
  const i = idioma === "en" ? 0 : idioma === "es" ? 1 : -1;
  const m = window.traducoesProfessor && window.traducoesProfessor["tipo." + tipo];
  return i !== -1 && m ? m[i] : tipo;
}

function professorAdd(tipo) {
  const t = profTipo(tipo);
  const nome = prompt(profT("msg.addPrompt", { tipo: t }));
  if (!nome || !nome.trim()) return;
  alert(profT("msg.addOk", { tipo: t.charAt(0).toUpperCase() + t.slice(1), nome: nome.trim() }));
}
function professorToggleMenu() {
  document.querySelector('.prof-side-menu')?.classList.toggle('open');
}
function professorNotificacoes() {
  alert(profT("msg.noNotif"));
}
function professorSelectTurma(turma) {
  const el = document.getElementById('turmaSelecionada');
  if (el) el.textContent = turma;
  document.querySelectorAll('[data-turma]').forEach(e => e.classList.toggle('selected', e.dataset.turma === turma));
}
function professorEditLesson() {
  const texto = prompt(profT("msg.editPrompt"));
  const el = document.getElementById('lessonContent');
  if (texto !== null && texto.trim() && el) el.textContent = texto;
}
// Fecha o menu lateral ao clicar fora
document.addEventListener('click', (e) => {
  const menu = document.querySelector('.prof-side-menu.open');
  if (menu && !menu.contains(e.target) && !e.target.closest('.prof-icon-btn.menu')) menu.classList.remove('open');
});
