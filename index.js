const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const firstLinks = document.querySelector(".first-links");
const lastLinks = document.querySelector(".last-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.add("hidden");
  hamburger.classList.remove("show");
  closeIcon.classList.add("show");
  closeIcon.classList.remove("hidden");

  firstLinks.classList.add("show");
  lastLinks.classList.add("show");
  firstLinks.classList.remove("hidden");
  lastLinks.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  hamburger.classList.add("show");
  hamburger.classList.remove("hidden");
  closeIcon.classList.add("hidden");
  closeIcon.classList.remove("show");

  firstLinks.classList.add("hidden");
  lastLinks.classList.add("hidden");
  firstLinks.classList.remove("show");
  lastLinks.classList.remove("show");
});
