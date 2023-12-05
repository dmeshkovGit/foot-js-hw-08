function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = () => {
  const amount = amountInput.value;
  if (amount >= 1 && amount <= 100) {
    let elements = "";
  let width = 30;
  let height = 30;
  for (let i = 1; i <= amount; i++) {
    const element = `<div style="background-color:${getRandomHexColor()}; height:${height}px; width:${width}px"></div>`;
    elements += element;
    width += 10;
    height += 10;
}
  boxes.insertAdjacentHTML("afterbegin", elements);
  amountInput.value = "";
  } 
}

const destroyBoxes = () => {boxes.innerHTML = "";}



const amountInput = document.querySelector("#controls input");
const createButton = document.querySelector('#controls button[data-create]');
const destroyButton = document.querySelector('#controls button[data-destroy]')
const boxes = document.querySelector('#boxes')

const create = createButton.addEventListener("click", createBoxes)

const destroy = destroyButton.addEventListener("click", destroyBoxes)



