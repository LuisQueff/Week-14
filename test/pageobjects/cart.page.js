import Page from "./page";

class Cart extends Page {

  get btnCheckout() {
    return $("#checkout");
  }

  get btnContinue() {
    return $("#continue-shopping");
  }

  get btnLogin() {
    return $("#login-button");
  }

  get errorMsg() {
    return $(
      "#login_button_container > div > form > div.error-message-container.error > h3"
    );
  }

  open() {
    return super.open("cart");
  }
}

export default new Cart();
