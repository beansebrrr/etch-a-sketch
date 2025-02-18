const gridContainer = document.querySelector(".gridContainer");
const btnResizeCanvas = document.querySelector("#btnResizeCanvas");

btnResizeCanvas.addEventListener("click", () => {
  let gridSize;
  do {
    gridSize = Number(prompt("what"));
  } while (!Number.isInteger(gridSize) || gridSize < 1 || gridSize > 100);

  gridContainer.replaceChildren();
  createCanvas(gridSize);
});

function createCanvas(size) {
  for (let i = 0; i < size; i++) {
    gridContainer.appendChild(createRow(size));
  };
};

function createRow(width) {
  const row = document.createElement("div");
  row.classList = ["gridRow"];

  for (let i = 0; i < width; i++) {
    row.appendChild(createCell());
  };
  return row;
};

function createCell() {
  const cell = document.createElement("div");
  const cellColor = `rgb(${randint(128,255)}, ${randint(128,255)}, ${randint(128,255)})`;
  
  cell.classList = ["gridCell"];
  cell.addEventListener("mouseenter", () => {
    cell.style.backgroundColor = cellColor;
  });
  return cell;
};

function randint(min, max) {
  const x = Math.floor(Math.random() * (max-min));
  return x+min;
}

createCanvas(16)