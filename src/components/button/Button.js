class Button {
  constructor(DOMelement, clickCallback = () => {}) {
    this.el = DOMelement;
    this.el.addEventListener("click", clickCallback);
  }
}

export default Button;
