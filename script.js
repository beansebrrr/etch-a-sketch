const gridContainer = document.querySelector(".gridContainer");
const btnResizeCanvas = document.querySelector("#btnResizeCanvas");

const randomCellColorCheckbox = document.querySelector("#randomCellColor")
const gradualDarkenCheckbox = document.querySelector("#gradualDarken")
const hideGridCheckbox = document.querySelector("#hideGrid")

hideGridCheckbox.addEventListener("click", () => {
  const cells = document.querySelectorAll(".gridCell")

  cells.forEach((cell) => {
    cell.classList.toggle("hideGrid");
    console.log(cell)
  });
});

btnResizeCanvas.addEventListener("click", () => {
  let gridSize;
  do {
    gridSize = Number(prompt("Enter your canvas size"));
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
  let cellColor = "#bbaaff"
  let brightness = 1
  
  cell.classList = ["gridCell"];
  cell.addEventListener("mouseenter", () => {

    if (randomCellColorCheckbox.checked) {
      cellColor = `rgb(${randint(128,255)}, ${randint(128,255)}, ${randint(128,255)})`;
    } else if (cellColor != "#bbaaff") {
      cellColor = "#bbaaff";      
    };
    cell.style.backgroundColor = cellColor;
    cell.style.filter = `brightness(${brightness})`;
    
    if (gradualDarkenCheckbox.checked) {
      brightness -= 0.1;
      if (brightness < 0.1) { brightness = 0 };
    } else {
      brightness = 1;
    };
  });
  return cell;
};

function randint(min, max) {
  const x = Math.floor(Math.random() * (max-min));
  return x+min;
}

createCanvas(16)