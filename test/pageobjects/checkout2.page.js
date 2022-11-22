import Page from "./page";

class Checkout2Page extends Page {

  get btnFinish() {
    return $("#finish");
  }

  get btnCancel() {
    return $("#cancel");
  }

  open() {
    return super.open("checkout-step-two");
  }
}

export default new Checkout2Page();
