const openBtn = document.getElementById("open-modal");
const modals = document.querySelectorAll(".modal-content");
const overlay = document.getElementById("overlay");
const exits = document.querySelectorAll(".exit");

const btns = document.querySelectorAll("[data-target]");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("active");
    overlay.classList.add("active");
  });
});

exits.forEach((exit) => {
  exit.addEventListener("click", () => {
    const modal = exit.closest(".modal-content");
    if (modal.classList.contains("main-modal") === true) {
      overlay.classList.remove("active");
    }
    modal.classList.remove("active");
  });
});

window.addEventListener("click", (e) => {
  if (e.target === overlay) {
    mainModal.classList.remove("active");
    modals.forEach((modal) => {
      modal.classList.remove("active");
    });
    overlay.classList.remove("active");
  }
});

// accordion
const accordionBtns = document.querySelectorAll(".accordion button");

accordionBtns.forEach((accordionBtn) => {
  accordionBtn.addEventListener("click", () => {
    accordionBtn.classList.toggle("accord-active");
  });
});
