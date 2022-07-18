class Modal {
  constructor(
    DOMelement,
    openButtonsDOMlist,
    closeButtonsDOMlist,
    openCallback,
    closeCallback
  ) {
    this.isOpen = false;
    this.el = DOMelement;
    this.contentWrapper = DOMelement.querySelector(".str-modal__content");
    this.openButtons = openButtonsDOMlist;
    this.openCallback = openCallback;
    this.ownCloseButton = DOMelement.querySelector(".str-modal__close");
    this.closeButtons = closeButtonsDOMlist;
    this.closeCallback = closeCallback;

    [...openButtonsDOMlist].forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        this.open();
      });
    });

    [...closeButtonsDOMlist, this.ownCloseButton].forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        this.close();
      });
    });
  }

  open() {
    this.isOpen = true;
    this.el.classList.add("opened");
    document.querySelector("html").classList.add("modal-open");
    this.openCallback();
  }

  close() {
    this.isOpen = false;
    this.el.classList.remove("opened");
    document.querySelector("html").classList.remove("modal-open");
    this.closeCallback();
  }
}

export default Modal;
