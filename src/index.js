import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import ThemeToggle from "./components/theme-toggle/ThemeToggle";
import Store from "./store/store";
import reducer from "./store/reducer";
import "./style.scss";

function initialise() {
  const store = new Store(reducer);

  // Buttons for modal
  const openButtons = document.querySelectorAll(".home__open-modal");
  const closeButtons = document.querySelectorAll(".home__close-modal");
  [...openButtons, ...closeButtons].forEach((button) => new Button(button));

  // Modal
  const modalContainer = document.getElementById("info-modal");
  new Modal(modalContainer, openButtons, closeButtons, () => {
    console.log("Modal opened!!");
  });

  // Brightness theme toggle
  const themeToggle = document.querySelector(".home__theme-toggle");
  new ThemeToggle(themeToggle, store, () => {
    console.log("Theme toggled!!");
  });
}

document.addEventListener("DOMContentLoaded", initialise);
