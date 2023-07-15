// document.getElementById("count").innerText = 5

let count = 0;
let countEl = document.getElementById("count");
let saveEl = document.getElementById("save-el");

function increment() {
  count++;
  countEl.innerText = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.innerText += countStr;
  console.log(count);
}
