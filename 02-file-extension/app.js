const input = document.getElementById("input");
const btn = document.getElementById("btn");
const table = document.getElementById("table");
const inputValue = document.getElementById("inputValue");
const filename = document.getElementById("fileName");
const error = document.getElementById("error");

btn.addEventListener("click", () => {
  const value = input.value;

  if (value === "") {
    error.innerHTML = "PLEASE ENTER A FILE NAME";
    error.style.display = "block";
    table.style.opacity = "0";
    table.style.pointerEvents = "none";
  } else if (value.includes(".") === false) {
    error.innerHTML = "INVALID FILENAME";
    error.style.display = "block";
    table.style.opacity = "0";
    table.style.pointerEvents = "none";
  } else {
    console.log(value.slice(value.lastIndexOf(".")));
    table.style.opacity = "1";
    table.style.pointerEvents = "all";
    finalValue = value.slice(value.lastIndexOf("."));
    filename.innerHTML = value;
    inputValue.innerHTML = finalValue;
    error.style.display = "none";
  }
});
