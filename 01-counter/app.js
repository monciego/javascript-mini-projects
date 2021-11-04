const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const circle = document.querySelector(".count-circle");

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
    countEl.style.color = "#218380";
    circle.style.border = "#218380 0.75rem solid";
  } else if (count < 0) {
    countEl.style.color = "#D81159";
    circle.style.border = "#D81159 0.75rem solid";
  } else {
    countEl.style.color = "#0d0628";
    circle.style.border = "#c643b7 0.75rem solid";
  }
};
