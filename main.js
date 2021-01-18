AOS.init();

const up = document.querySelector(".up");

document.addEventListener("scroll", () => {
  let y = window.scrollY;
  if (y >= 1000) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  }
});

up.addEventListener("click", () => {
  window.scrollTo(0,0)
});
