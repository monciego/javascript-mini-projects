document.querySelector("#page1").style.display = "block";

const showPage = (page) => {
  document.querySelectorAll(".page").forEach((pageContent) => {
    pageContent.style.display = "none";
  });

  document.querySelector(`#${page}`).style.display = "block";
};

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelectorAll("button").forEach((btn) => {
      btn.classList.remove("active");
      this.classList.add("active");
    });

    const datasetPage = button.dataset.page;
    showPage(`${datasetPage}`);
  });
});
