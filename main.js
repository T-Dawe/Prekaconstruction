
// hamburger menu
///////////////////////////////

const icon = document.getElementById('hamburger');
const menu = document.getElementById('mobile-menu');
const isOpen = () => icon.classList.contains('open');

icon.addEventListener('click', () => {
    icon.classList.toggle('open');
    menu.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    if (event.target !== icon && event.target !== menu && isOpen()) {
        icon.classList.remove('open');
        menu.classList.remove('open');
    }
});

//Scroll Padding
/////////////////////////////
const navigation = document.querySelector(".primary-navigation");
const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px");

//Pop Up Card
/////////////////////////////

const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.setAttribute("closing", "");

  modal.addEventListener(
    "animationend",
    () => {
      modal.removeAttribute("closing");
      modal.close();
    },
    { once: true }
  );
});
