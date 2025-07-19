const materias = [
  { id: "algebra", nombre: "Álgebra y Trigonometría", creditos: 4, abre: ["calculo", "fisica1"] },
  { id: "biologia", nombre: "Biología Celular y Molecular", creditos: 3, abre: ["bioquimica1"] },
  { id: "historia", nombre: "Historia de la Educación y Pedagogía", creditos: 2, abre: ["enfoques"] },
  { id: "ingles1", nombre: "Inglés I", creditos: 2, abre: ["ingles2"] },
  { id: "quimica", nombre: "Introducción a la Química", creditos: 3, abre: ["fundquim"] },
  { id: "lectura", nombre: "Lectura Crítica", creditos: 2, abre: ["produccion"] },
  { id: "problemas", nombre: "Resolución de Problemas Matemáticos", creditos: 2 },

  { id: "calculo", nombre: "Cálculo Diferencial", creditos: 4, requiere: ["algebra"], abre: ["integral", "estadistica"] },
  { id: "deshum", nombre: "Desarrollo Humano y Educación", creditos: 3, abre: ["aprendizaje"] },
  { id: "fisica1", nombre: "Física I", creditos: 3, requiere: ["algebra"], abre: ["fisica2"] },
  { id: "fundquim", nombre: "Fundamentos de Química", creditos: 4, requiere: ["quimica"], abre: ["inorganica"] },
  { id: "ingles2", nombre: "Inglés II", creditos: 2, requiere: ["ingles1"], abre: ["ingles3"] },
  { id: "produccion", nombre: "Producción Textual", creditos: 2, requiere: ["lectura"] },

  { id: "integral", nombre: "Cálculo Integral", creditos: 4, requiere: ["calculo"] },
  { id: "enfoques", nombre: "Enfoques Pedagógicos y Curricular", creditos: 3, requiere: ["historia"] },
  { id: "fisica2", nombre: "Física II", creditos: 3, requiere: ["fisica1"], abre: ["fisicoquimica"] },
  { id: "ciudadana", nombre: "Formación Ciudadana para la Paz", creditos: 2 },
  { id: "ingles3", nombre: "Inglés III", creditos: 2, requiere: ["ingles2"], abre: ["ingles4"] },
  { id: "praxis", nombre: "Investigación y Praxis Pedagógica", creditos: 0 },
  { id: "inorganica", nombre: "Química Inorgánica", creditos: 4, requiere: ["fundquim"], abre: ["analitica1", "fisicoquimica"] },

  { id: "aprendizaje", nombre: "Aprendizaje e Intervención Pedagógica", creditos: 2, requiere: ["deshum"], abre: ["evaluacion"] },
  { id: "didactica", nombre: "Didáctica de la Química", creditos: 2 },
  { id: "estadistica", nombre: "Estadística", creditos: 3, requiere: ["calculo"] },
  { id: "fisicoquimica", nombre: "Fisicoquímica", creditos: 3, requiere: ["fisica2", "inorganica"], abre: ["organica2"] },
  { id: "ingles4", nombre: "Inglés IV", creditos: 2, requiere: ["ingles3"], abre: ["ingles5"] },
  { id: "practica1", nombre: "Práctica Pedagógica I", creditos: 3, abre: ["practica2"] },
  { id: "analitica1", nombre: "Química Analítica I", creditos: 4, requiere: ["inorganica"], abre: ["analitica2", "organica1"] },

  { id: "problemas2", nombre: "Enseñanza Basada en Problemas", creditos: 2 },
  { id: "evaluacion", nombre: "Evaluación del Aprendizaje", creditos: 3, requiere: ["aprendizaje"] },
  { id: "ingles5", nombre: "Inglés V", creditos: 2, requiere: ["ingles4"], abre: ["ingles6"] },
  { id: "practica2", nombre: "Práctica Pedagógica II", creditos: 3, requiere: ["practica1"], abre: ["practica3"] },
  { id: "analitica2", nombre: "Química Analítica II", creditos: 4, requiere: ["analitica1"] },
  { id: "organica1", nombre: "Química Orgánica I", creditos: 4, requiere: ["analitica1"], abre: ["organica2"] },

  { id: "intercultural", nombre: "Educación Intercultural e Inclusiva", creditos: 2 },
  { id: "electiva1", nombre: "Electiva 1", creditos: 2, abre: ["electiva2"] },
  { id: "ingles6", nombre: "Inglés VI", creditos: 2, requiere: ["ingles5"] },
  { id: "mediaciones", nombre: "Mediaciones Tecnológicas en la Química", creditos: 2 },
  { id: "practica3", nombre: "Práctica Pedagógica III", creditos: 5, requiere: ["practica2"], abre: ["practica4"] },
  { id: "organica2", nombre: "Química Orgánica II", creditos: 4, requiere: ["organica1", "fisicoquimica"], abre: ["bioquimica1", "sostenible"] },

  { id: "bioquimica1", nombre: "Bioquímica I", creditos: 4, requiere: ["organica2"], abre: ["bioquimica2"] },
  { id: "electiva2", nombre: "Electiva 2", creditos: 2, requiere: ["electiva1"], abre: ["electiva3"] },
  { id: "espectroscopia", nombre: "Espectroscopía", creditos: 2 },
  { id: "politicas", nombre: "Políticas y Gestión Educativa", creditos: 3 },
  { id: "practica4", nombre: "Práctica Pedagógica IV", creditos: 5, requiere: ["practica3"], abre: ["practica5"] },

  { id: "bioquimica2", nombre: "Bioquímica II", creditos: 4, requiere: ["bioquimica1"] },
  { id: "sostenible", nombre: "Química Sostenible", creditos: 3, requiere: ["organica2"] },
  { id: "electiva3", nombre: "Electiva 3", creditos: 2, requiere: ["electiva2"] },
  { id: "practica5", nombre: "Práctica Pedagógica V", creditos: 6, requiere: ["practica4"], abre: ["profesional"] },
  { id: "desarrollo", nombre: "Desarrollo Sostenible y Educación", creditos: 2 },

  { id: "profesional", nombre: "Práctica Profesional", creditos: 18, requiere: ["practica5"] }
];

let aprobadas = new Set();
const grid = document.getElementById("grid");

materias.forEach(m => {
  const div = document.createElement("div");
  div.classList.add("subject");
  div.id = m.id;
  div.innerHTML = `<strong>${m.nombre}</strong><br><small>${m.creditos} créditos</small>`;
  grid.appendChild(div);

  if (m.requiere) div.classList.add("locked");

  div.addEventListener("click", () => aprobarMateria(m.id));
});

function aprobarMateria(id) {
  const materia = materias.find(m => m.id === id);
  const div = document.getElementById(id);
  if (div.classList.contains("approved")) return;

  div.classList.remove("locked");
  div.classList.add("approved");
  aprobadas.add(id);

  materias.forEach(m => {
    if (m.requiere && m.requiere.every(req => aprobadas.has(req))) {
      document.getElementById(m.id).classList.remove("locked");
    }
  });
}
