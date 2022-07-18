import Button from "../button/Button";
import { BrightnessTheme } from "../../store/enums";
import { setBrightnessTheme } from "../../store/actions";

class ThemeToggle extends Button {
  constructor(DOMelement, store, clickCallback = () => {}) {
    super(DOMelement, clickCallback);

    this.toggleTheme = this.toggleTheme.bind(this);
    this.updateBodyClass = this.updateBodyClass.bind(this);
    this.updateText = this.updateText.bind(this);

    this.store = store;
    this.clickCallback = clickCallback;
    this.el.addEventListener("click", this.toggleTheme);
    this.currentTheme = this.store.getState().brightnessTheme;

    this.store.subscribeValue("brightnessTheme", (theme) => {
      this.currentTheme = theme;
      this.updateBodyClass();
      this.updateText();
    });

    this.updateBodyClass();
    this.updateText();
  }

  toggleTheme() {
    if (this.currentTheme === BrightnessTheme.Light) {
      this.store.dispatch(setBrightnessTheme(BrightnessTheme.Dark));
    } else {
      this.store.dispatch(setBrightnessTheme(BrightnessTheme.Light));
    }
  }

  updateBodyClass() {
    document.body.classList.remove(...Object.values(BrightnessTheme));
    document.body.classList.add(this.currentTheme);
  }

  updateText() {
    this.el.innerHTML = this.currentTheme;
  }
}

export default ThemeToggle;
