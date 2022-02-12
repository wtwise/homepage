const $ = (q) => document.querySelector(q);
const a$ = (q) => document.querySelectorAll(q);

const appbar = $("nav.appbar");

document.body.addEventListener("scroll", () => {
  const scroll = document.body.scrollTop;
  
  if (scroll / window.innerHeight > 0.05) {
    $(".appbar").classList.add("scrolled");
  } else {
    $(".appbar").classList.remove("scrolled");
  }
});