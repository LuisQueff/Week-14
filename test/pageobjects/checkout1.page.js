import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Checkout1Page extends Page {
  /**
   * define selectors using getter methods
   */
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

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async checkout(firstName, lastName, postalCode) {
    await this.firstName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.postalCode.setValue(postalCode);
    await this.btnContinue.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("checkout-step-one");
  }
}

export default new Checkout1Page();
