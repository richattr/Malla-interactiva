const materias = [
  {
    id: "algebra",
    nombre: "Álgebra y Trigonometría",
    creditos: 4,
    abre: ["calculo", "fisica1"]
  },
  {
    id: "calculo",
    nombre: "Cálculo Diferencial",
    creditos: 4,
    abre: ["integral", "estadistica"],
    requiere: ["algebra"]
  },
  {
    id: "integral",
    nombre: "Cálculo Integral",
    creditos: 4,
    requiere: ["calculo"]
  },
  {
    id: "fisica1",
    nombre: "Física I",
    creditos: 3,
    abre: ["fisica2"],
    requiere: ["algebra"]
  },
  {
    id: "fisica2",
    nombre: "Física II",
    creditos: 3,
    requiere: ["fisica1"]
  },
  {
    id: "estadistica",
    nombre: "Estadística",
    creditos: 3,
    requiere: ["calculo"]
  }
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
