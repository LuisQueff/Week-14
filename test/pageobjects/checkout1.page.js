import Page from "./page";

class Checkout1Page extends Page {

  get firstName() {
    return $("#first-name");
  }

  get lastName() {
    return $("#last-name");
  }

  get postalCode() {
    return $("#postal-code");
  }

  get btnCancel() {
    return $("#cancel");
  }

  get btnContinue() {
    return $("#continue");
  }

  get error() {
    return $("#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error");
  }

  get errorMsg() {
    return $("#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3")
  }

  async checkout(firstName, lastName, postalCode) {
    await this.firstName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.postalCode.setValue(postalCode);
    await this.btnContinue.click();
  }

  open() {
    return super.open("checkout-step-one");
  }
}

export default new Checkout1Page();
