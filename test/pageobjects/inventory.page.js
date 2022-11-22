import Page from "./page";

class InventoryPage extends Page {
  get hamburguer() {
    return $("#react-burger-menu-btn");
  }

  get burguerCross() {
    return $("#react-burger-cross-btn");
  }

  get logoutSidebar() {
    return $("#logout_sidebar_link");
  }

  get resetSidebar() {
    return $("#reset_sidebar_link");
  }

  get aboutSidebar() {
    return $("#about_sidebar_link")
  }

  get btnProduct1() {
    return $("#add-to-cart-sauce-labs-backpack");
  }

  get btnRProduct1() {
    return $("#remove-sauce-labs-backpack");
  }

  get imgProduct1() {
    return $("#item_4_img_link > img");
  }

  get btnProduct2() {
    return $("#add-to-cart-sauce-labs-bike-light");
  }

  get btnRProduct2() {
    return $("#remove-sauce-labs-bike-light");
  }

  get imgProduct2() {
    return $("#item_0_img_link > img");
  }

  get btnProduct3() {
    return $("#add-to-cart-sauce-labs-bolt-t-shirt");
  }

  get btnRProduct3() {
    return $("#remove-sauce-labs-bolt-t-shirt");
  }

  get imgProduct3() {
    return $("#item_1_img_link > img");
  }

  get btnProduct4() {
    return $("#add-to-cart-sauce-labs-fleece-jacket");
  }

  get btnRProduct4() {
    return $("#remove-sauce-labs-fleece-jacket");
  }

  get imgProduct4() {
    return $("#item_5_img_link > img");
  }

  get btnProduct5() {
    return $("#add-to-cart-sauce-labs-onesie");
  }

  get btnRProduct5() {
    return $("#remove-sauce-labs-onesie");
  }

  get imgProduct5() {
    return $("#item_2_img_link > img");
  }

  get btnProduct6() {
    return $("#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)");
  }

  get btnRProduct6() {
    return $("#remove-test\.allthethings\(\)-t-shirt-\(red\)");
  }

  get imgProduct6() {
    return $("#item_3_img_link > img");
  }

  get btnAllProduct() {
    return $(".btn_inventory");
  }

  get btnCart() {
    return $("#shopping_cart_container > a");
  }

  get btnCShopping() {
    return $("#continue-shopping")
  }

  async clearPurchase() {
    await this.hamburguer.click();
    await this.hamburguer.pause(1500);
    await this.resetSidebar.click();
    await this.burguerCross.click();
  }

  async logout() {
    await this.hamburguer.click();
    await this.hamburguer.pause(1500);
    await this.logoutSidebar.click();
  }

  open() {
    return super.open("inventory");
  }
}

export default new InventoryPage();
