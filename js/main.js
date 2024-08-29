const body = document.querySelector("body");
const burgerBtn = document.querySelector(".header__burger");
const mobileHeader = document.querySelector(".mobile_header");

burgerBtn?.addEventListener("click", () => {
  console.log("burger bosildi");
  if (burgerBtn.classList.contains("active")) {
    console.log("active bor");
    burgerBtn.classList.remove("active");
    mobileHeader?.classList.remove("active");
    body.style.overflow = "auto";
    body.style.height = "auto";
  } else {
    console.log("active yoq");
    burgerBtn.classList.add("active");
    mobileHeader?.classList.add("active");
    body.style.height = "100dvh";
    body.style.overflow = "hidden";
  }
});
