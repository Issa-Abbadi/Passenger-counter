let count = 0;
let countEl = document.getElementById("count");
let saveEl = document.getElementById("save-el");

function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;

  count = 0;
  countEl.textContent = count;
}
