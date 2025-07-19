const grid = document.getElementById('grid');
const totalCells = 20 * 20;

for (let i = 0; i < totalCells; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';

  cell.addEventListener('click', () => {
    cell.style.backgroundColor = cell.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
  });

  grid.appendChild(cell);
}
