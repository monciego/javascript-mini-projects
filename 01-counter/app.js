const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
let countEl = document.getElementById("count");

countEl.textContent = 0;
count = 0;

increment.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
  style();
});

decrement.addEventListener("click", () => {
  count = count - 1;
  countEl.textContent = count;
  style();
});

reset.addEventListener("click", () => {
  count = 0;
  countEl.textContent = count;
  style();
});

// style function
const style = () => {
  if (count > 0) {
    countEl.style.color = "green";
  } else if (count < 0) {
    countEl.style.color = "red";
  } else {
    countEl.style.color = "black";
  }
};
