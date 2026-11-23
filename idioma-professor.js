// Traduções da área do professor. Estende o dicionário de idioma.js
// (carregar DEPOIS dele). Só adiciona chaves que ainda não existem.
(function () {
  const T = {
    // Navegação / menu
    "Início": ["Home", "Inicio"],
    "Turmas": ["Classes", "Grupos"],
    "Aulas": ["Lessons", "Clases"],
    "Eventos": ["Events", "Eventos"],
    "Perfil": ["Profile", "Perfil"],
    "Suas turmas": ["Your classes", "Tus grupos"],
    "Horários e aulas": ["Schedules and lessons", "Horarios y clases"],
    // Títulos de página
    "NextEdu - Área do Professor": ["NextEdu - Teacher Area", "NextEdu - Área del Profesor"],
    "NextEdu - Suas turmas": ["NextEdu - Your classes", "NextEdu - Tus grupos"],
    "NextEdu - Detalhes da turma": ["NextEdu - Class details", "NextEdu - Detalles del grupo"],
    "NextEdu - Horários de aulas": ["NextEdu - Class schedule", "NextEdu - Horario de clases"],
    "NextEdu - Planejamento de aulas": ["NextEdu - Lesson planning", "NextEdu - Planificación de clases"],
    "NextEdu - Eventos da escola": ["NextEdu - School events", "NextEdu - Eventos de la escuela"],
    "NextEdu - Perfil": ["NextEdu - Profile", "NextEdu - Perfil"],
    "Detalhes da turma": ["Class details", "Detalles del grupo"],
    "Horários de aulas": ["Class schedule", "Horario de clases"],
    "Planejamento de aulas": ["Lesson planning", "Planificación de clases"],
    "Eventos da escola": ["School events", "Eventos de la escuela"],
    // Início
    "Olá, Professor(a)!": ["Hello, Teacher!", "¡Hola, profesor(a)!"],
    "Professor(a) - Matéria": ["Teacher - Subject", "Profesor(a) - Materia"],
    "Ver detalhes": ["View details", "Ver detalles"],
    "Suas Turmas": ["Your Classes", "Tus Grupos"],
    "Seus Horários": ["Your Schedules", "Tus Horarios"],
    "1° Ano A - EM": ["1st Year A - High School", "1° Año A - Secundaria"],
    "2° Ano B - EM": ["2nd Year B - High School", "2° Año B - Secundaria"],
    "3° Ano C - EM": ["3rd Year C - High School", "3° Año C - Secundaria"],
    "7° Ano D - EF II": ["7th Grade D - Middle School", "7° Año D - Primaria II"],
    "Segunda-feira": ["Monday", "Lunes"],
    "Terça-feira": ["Tuesday", "Martes"],
    "Quarta-feira": ["Wednesday", "Miércoles"],
    "Quinta-feira": ["Thursday", "Jueves"],
    "Sexta-feira": ["Friday", "Viernes"],
    // Turmas
    "SEG - TER - QUI": ["MON - TUE - THU", "LUN - MAR - JUE"],
    "SEG - QUA - QUI": ["MON - WED - THU", "LUN - MIÉ - JUE"],
    "TER - QUA - SEX": ["TUE - WED - FRI", "MAR - MIÉ - VIE"],
    "SEG - QUI - SEX": ["MON - THU - FRI", "LUN - JUE - VIE"],
    // Detalhes da turma
    "2° Ano B - Ensino Médio": ["2nd Year B - High School", "2° Año B - Secundaria"],
    "Matéria - Professor(a)": ["Subject - Teacher", "Materia - Profesor(a)"],
    "Alunos": ["Students", "Alumnos"],
    "Atalhos": ["Shortcuts", "Atajos"],
    "Horários da turma": ["Class schedule", "Horarios del grupo"],
    "Planejamento de aula": ["Lesson plan", "Planificación de clase"],
    "Aulas ministradas": ["Lessons taught", "Clases impartidas"],
    // Horários
    "Todas as Turmas": ["All Classes", "Todos los Grupos"],
    "nov. 8 - nov. 14, 2026": ["Nov 8 - Nov 14, 2026", "8 nov. - 14 nov. 2026"],
    "Dom.": ["Sun.", "Dom."],
    "Seg.": ["Mon.", "Lun."],
    "Ter.": ["Tue.", "Mar."],
    "Qua.": ["Wed.", "Mié."],
    "Qui.": ["Thu.", "Jue."],
    "Sex.": ["Fri.", "Vie."],
    "Sab.": ["Sat.", "Sáb."],
    "Primeira aula": ["First lesson", "Primera clase"],
    "Segunda aula": ["Second lesson", "Segunda clase"],
    "Terceira aula": ["Third lesson", "Tercera clase"],
    "Quarta aula": ["Fourth lesson", "Cuarta clase"],
    "Quinta aula": ["Fifth lesson", "Quinta clase"],
    "Arranjo Simples": ["Simple Arrangement", "Arreglo Simple"],
    "Equações de 2º grau": ["Quadratic equations", "Ecuaciones de 2.º grado"],
    "Geometria espacial": ["Spatial geometry", "Geometría espacial"],
    "Funções quadráticas": ["Quadratic functions", "Funciones cuadráticas"],
    "Frações e números decimais": ["Fractions and decimal numbers", "Fracciones y números decimales"],
    "Progressão aritmética (PA)": ["Arithmetic progression (AP)", "Progresión aritmética (PA)"],
    "Porcentagem e regra de três": ["Percentages and rule of three", "Porcentaje y regla de tres"],
    "Trigonometria": ["Trigonometry", "Trigonometría"],
    // Planejamento
    "Introdução": ["Introduction", "Introducción"],
    "lousa: Arranjo simples é utilizado quando escolhemos elementos de um conjunto e a ordem em que eles aparecem faz diferença. Por exemplo, AB é diferente de BA, pois a posição das letras foi alterada": [
      "board: Simple arrangement is used when we choose elements from a set and the order in which they appear matters. For example, AB is different from BA, because the position of the letters was changed",
      "pizarra: El arreglo simple se utiliza cuando elegimos elementos de un conjunto y el orden en que aparecen hace diferencia. Por ejemplo, AB es diferente de BA, pues la posición de las letras fue alterada"
    ],
    "fórmula:": ["formula:", "fórmula:"],
    "questões para os alunos resolverem:": ["questions for the students to solve:", "preguntas para que los alumnos resuelvan:"],
    "Com 4 letras diferentes, quantas sequências de 2 letras podem ser formadas sem repetição?": [
      "With 4 different letters, how many sequences of 2 letters can be formed without repetition?",
      "Con 4 letras diferentes, ¿cuántas secuencias de 2 letras se pueden formar sin repetición?"
    ],
    "Em uma corrida com 8 participantes, quantos pódios diferentes podem ser formados?": [
      "In a race with 8 participants, how many different podiums can be formed?",
      "En una carrera con 8 participantes, ¿cuántos podios diferentes se pueden formar?"
    ],
    "Uma escola possui 7 candidatos para os cargos de presidente, vice-presidente e secretário. De quantas maneiras os cargos podem ser ocupados?": [
      "A school has 7 candidates for the positions of president, vice president and secretary. In how many ways can the positions be filled?",
      "Una escuela tiene 7 candidatos para los cargos de presidente, vicepresidente y secretario. ¿De cuántas maneras se pueden ocupar los cargos?"
    ],
    "Quantas senhas de 3 algarismos diferentes podem ser formadas utilizando os números de 1 a 5?": [
      "How many passwords with 3 different digits can be formed using the numbers from 1 to 5?",
      "¿Cuántas contraseñas de 3 dígitos diferentes se pueden formar usando los números del 1 al 5?"
    ],
    // Eventos
    "AGO": ["AUG", "AGO"],
    "SET": ["SEP", "SEP"],
    "Palestra: O futuro da Tecnologia": ["Talk: The future of Technology", "Charla: El futuro de la Tecnología"],
    "Interclasses": ["Inter-class games", "Interclases"],
    "Feira de Ciências": ["Science Fair", "Feria de Ciencias"],
    "Workshop de Redação": ["Writing Workshop", "Taller de Redacción"],
    "Reunião Escolar": ["School Meeting", "Reunión Escolar"],
    "14h - Auditório da Escola": ["2 PM - School Auditorium", "14h - Auditorio de la Escuela"],
    "08h - Quadra da Escola": ["8 AM - School Court", "08h - Cancha de la Escuela"],
    "10h - Pátio da Escola": ["10 AM - School Yard", "10h - Patio de la Escuela"],
    "14h - Sala de Eventos": ["2 PM - Events Room", "14h - Sala de Eventos"],
    // Perfil
    "Nome do Professor": ["Teacher Name", "Nombre del Profesor"],
    "Minha Conta": ["My Account", "Mi Cuenta"],
    "Configurações": ["Settings", "Configuración"],
    "Ajuda": ["Help", "Ayuda"],
    "Sair": ["Log out", "Salir"],
    // Atributos (aria-label)
    "Menu": ["Menu", "Menú"],
    "Voltar": ["Back", "Volver"],
    "Voltar para perfil": ["Back to profile", "Volver al perfil"],
    "Notificações": ["Notifications", "Notificaciones"],
    "Adicionar": ["Add", "Agregar"],
    "Editar": ["Edit", "Editar"],
    "Semana anterior": ["Previous week", "Semana anterior"],
    "Próxima semana": ["Next week", "Semana siguiente"],
    "Filtrar por turma": ["Filter by class", "Filtrar por grupo"],
    // Ajuda / Configurações (setas)
    "Fale Conosco": ["Contact Us", "Contáctanos"],
    // Mensagens dos botões (professor.js)
    "msg.addPrompt": ["Name/description of the {tipo}:", "Nombre/descripción de {tipo}:"],
    "msg.addOk": ["{tipo} \"{nome}\" was added in this demo. The current version does not save to a database.", "{tipo} \"{nome}\" fue agregado en esta demostración. La versión actual no guarda en una base de datos."],
    "msg.editPrompt": ["Edit the lesson content/plan:", "Edite el contenido/planificación de la clase:"],
    "msg.noNotif": ["You have no new notifications.", "No tienes notificaciones nuevas."],
    "tipo.item": ["item", "elemento"],
    "tipo.turma": ["class", "grupo"],
    "tipo.evento": ["event", "evento"],
    "tipo.aluno": ["student", "alumno"],
    "tipo.horário": ["schedule", "horario"],
    "tipo.planejamento": ["lesson plan", "planificación"]
  };
  if (typeof traducoesNextEdu !== "undefined") {
    Object.keys(T).forEach(function (k) {
      if (!(k in traducoesNextEdu)) traducoesNextEdu[k] = T[k];
    });
  }
  // Disponível para professor.js
  window.traducoesProfessor = T;
})();
