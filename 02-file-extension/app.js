const input = document.getElementById("input");
const btn = document.getElementById("btn");
const inputValue = document.getElementById("inputValue");
const filename = document.getElementById("filename");

btn.addEventListener("click", () => {
  const value = input.value;

  if (value === "") {
    inputValue.innerHTML = "PLEASE ENTER A FILE NAME";
  } else if (value.includes(".") === false) {
    inputValue.innerHTML = "INVALID FILENAME";
  } else {
    console.log(value.slice(value.lastIndexOf(".")));

    finalValue = value.slice(value.lastIndexOf("."));
    inputValue.innerHTML = finalValue;
  }
});
