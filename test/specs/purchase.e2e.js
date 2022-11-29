import LoginPage from "../pageobjects/login.page";
import InventoryPage from "../pageobjects/inventory.page";
import CartPage from "../pageobjects/cart.page";
import Checkout1Page from "../pageobjects/checkout1.page";
import Checkout2Page from "../pageobjects/checkout2.page";
import CompletePage from "../pageobjects/complete.page";


describe("Cases in which the purchase should not be made", () => {
  beforeAll("go to the url", () => {
    browser.url("https://www.saucedemo.com/");
  });

  // it("You should not proceed with the purchase with an empty cart", async () => {
  //   await LoginPage.login("standard_user", "secret_sauce");
  //   await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
  //   await InventoryPage.btnCart.click();
  //   await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
  //   await CartPage.btnCheckout.click();
  //   await expect(browser).toHaveUrl(
  //     "https://www.saucedemo.com/cart.html"
  //   );
  //   await InventoryPage.clearPurchase();
  //   await InventoryPage.logout();
  //   await browser.refresh();
  // });

  it("You should not proceed with the purchase without entering the customer information", async () => {
    await LoginPage.login("standard_user", "secret_sauce");
    await InventoryPage.btnProduct1.click();
    await InventoryPage.btnCart.click();
    await CartPage.btnCheckout.click();
    await Checkout1Page.checkout("", "", "");
    await expect(Checkout1Page.error).toBeDisplayed();
    await InventoryPage.clearPurchase();
    await InventoryPage.logout();
    await browser.refresh();
  });

  it("You should not proceed with the purchase without entering the customer first name", async () => {
    await LoginPage.login("standard_user", "secret_sauce");
    await InventoryPage.btnProduct1.click();
    await InventoryPage.btnCart.click();
    await CartPage.btnCheckout.click();
    await Checkout1Page.checkout("", "Perez", "11000");
    await expect(Checkout1Page.error).toBeDisplayed();
    await expect(Checkout1Page.errorMsg).toHaveTextContaining("Error: First Name is required");
    await InventoryPage.clearPurchase();
    await InventoryPage.logout();
    await browser.refresh();
  });

  it("You should not proceed with the purchase without entering the customer last name", async () => {
    await LoginPage.login("standard_user", "secret_sauce");
    await InventoryPage.btnProduct1.click();
    await InventoryPage.btnCart.click();
    await CartPage.btnCheckout.click();
    await Checkout1Page.checkout("Jose", "", "11000");
    await expect(Checkout1Page.error).toBeDisplayed();
    await expect(Checkout1Page.errorMsg).toHaveTextContaining("Error: Last Name is required");
    await InventoryPage.clearPurchase();
    await InventoryPage.logout();
    await browser.refresh();
  });

  it("You should not proceed with the purchase without entering the customer postal code", async () => {
    await LoginPage.login("standard_user", "secret_sauce");
    await InventoryPage.btnProduct1.click();
    await InventoryPage.btnCart.click();
    await CartPage.btnCheckout.click();
    await Checkout1Page.checkout("Jose", "Perez", "");
    await expect(Checkout1Page.error).toBeDisplayed();
    await expect(Checkout1Page.errorMsg).toHaveTextContaining("Error: Postal Code is required");
    await InventoryPage.clearPurchase();
    await InventoryPage.logout();
    await browser.refresh();
  });
});

describe("Cases in which the purchase should be made", () => {
  beforeAll("go to the url", () => {
    browser.url("https://www.saucedemo.com/");
  });

  it("Should be able to buy a product (standard user)", async () => {
    await LoginPage.login("standard_user", "secret_sauce");
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    await InventoryPage.btnProduct1.click();
    await InventoryPage.btnCart.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
    await CartPage.btnCheckout.click();
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    await Checkout1Page.checkout("jose", "perez", "11000");
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
    await Checkout2Page.btnFinish.click();
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-complete.html"
    );
    await expect(CompletePage.header).toHaveText("CHECKOUT: COMPLETE!");
    await expect(CompletePage.successText1).toHaveText(
      "THANK YOU FOR YOUR ORDER"
    );
    await expect(CompletePage.successText2).toHaveText(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
    await expect(CompletePage.imgPony).toHaveAttr(
      "src",
      "/static/media/pony-express.46394a5d.png"
    );
    await CompletePage.backBtn.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    await InventoryPage.logout();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    await browser.refresh();
  });

  // it("Should be able to buy a product (problem user)", async () => {
  //   await LoginPage.login("problem_user", "secret_sauce");
  //   await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
  //   await InventoryPage.btnProduct1.click();
  //   await InventoryPage.btnCart.click();
  //   await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
  //   await CartPage.btnCheckout.click();
  //   await expect(browser).toHaveUrl(
  //     "https://www.saucedemo.com/checkout-step-one.html"
  //   );
  //   await Checkout1Page.checkout("jose", "perez", "11000");
  //   await expect(browser).toHaveUrl(
  //     "https://www.saucedemo.com/checkout-step-two.html"
  //   );
  //   await Checkout2Page.btnFinish.click();
  //   await expect(browser).toHaveUrl(
  //     "https://www.saucedemo.com/checkout-complete.html"
  //   );
  //   await expect(CompletePage.header).toHaveText("CHECKOUT: COMPLETE!");
  //   await expect(CompletePage.successText1).toHaveText(
  //     "THANK YOU FOR YOUR ORDER"
  //   );
  //   await expect(CompletePage.successText2).toHaveText(
  //     "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
  //   );
  //   await expect(CompletePage.imgPony).toHaveAttr(
  //     "src",
  //     "/static/media/pony-express.46394a5d.png"
  //   );
  //   await CompletePage.backBtn.click();
  //   await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
  //   await InventoryPage.logout();
  //   await expect(browser).toHaveUrl("https://www.saucedemo.com/");
  //   await browser.refresh();
  // });

  it("Should be able to buy a product (glitched user)", async () => {
    await LoginPage.login("performance_glitch_user", "secret_sauce");
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    await InventoryPage.btnProduct1.click();
    await InventoryPage.btnCart.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
    await CartPage.btnCheckout.click();
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    await Checkout1Page.checkout("jose", "perez", "11000");
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
    await Checkout2Page.btnFinish.click();
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-complete.html"
    );
    await expect(CompletePage.header).toHaveText("CHECKOUT: COMPLETE!");
    await expect(CompletePage.successText1).toHaveText(
      "THANK YOU FOR YOUR ORDER"
    );
    await expect(CompletePage.successText2).toHaveText(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
    await expect(CompletePage.imgPony).toHaveAttr(
      "src",
      "/static/media/pony-express.46394a5d.png"
    );
    await CompletePage.backBtn.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    await InventoryPage.logout();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    await browser.refresh();
  });
});

describe("Validate the elements", () => {
  beforeAll("go to the url", () => {
    browser.url("https://www.saucedemo.com/");
  });

  it("The images must correspond to the products (Standard user)", async () => {
    await LoginPage.login("standard_user", "secret_sauce");
    await expect(InventoryPage.imgProduct1).toHaveAttr(
      "src",
      "/static/media/sauce-backpack-1200x1500.34e7aa42.jpg"
    );
    await expect(InventoryPage.imgProduct2).toHaveAttr(
      "src",
      "/static/media/bike-light-1200x1500.a0c9caae.jpg"
    );
    await expect(InventoryPage.imgProduct3).toHaveAttr(
      "src",
      "/static/media/bolt-shirt-1200x1500.c0dae290.jpg"
    );
    await expect(InventoryPage.imgProduct4).toHaveAttr(
      "src",
      "/static/media/sauce-pullover-1200x1500.439fc934.jpg"
    );
    await expect(InventoryPage.imgProduct5).toHaveAttr(
      "src",
      "/static/media/red-onesie-1200x1500.1b15e1fa.jpg"
    );
    await expect(InventoryPage.imgProduct6).toHaveAttr(
      "src",
      "/static/media/red-tatt-1200x1500.e32b4ef9.jpg"
    );
    await InventoryPage.logout();
    await browser.refresh();
  });
  // it("The images must correspond to the products (Problem user)", async () => {
  //   await LoginPage.login("problem_user", "secret_sauce");
  //   await expect(InventoryPage.imgProduct1).toHaveAttr("src", "/static/media/sauce-backpack-1200x1500.34e7aa42.jpg");
  //   await expect(InventoryPage.imgProduct2).toHaveAttr("src", "/static/media/bike-light-1200x1500.a0c9caae.jpg");
  //   await expect(InventoryPage.imgProduct3).toHaveAttr("src", "/static/media/bolt-shirt-1200x1500.c0dae290.jpg");
  //   await expect(InventoryPage.imgProduct4).toHaveAttr("src", "/static/media/sauce-pullover-1200x1500.439fc934.jpg");
  //   await expect(InventoryPage.imgProduct5).toHaveAttr("src", "/static/media/red-onesie-1200x1500.1b15e1fa.jpg");
  //   await expect(InventoryPage.imgProduct6).toHaveAttr("src", "/static/media/red-tatt-1200x1500.e32b4ef9.jpg");
  //   await InventoryPage.logout();
  //  await browser.refresh();
  // });
  it("The images must correspond to the products (Glitch user)", async () => {
    await LoginPage.login("performance_glitch_user", "secret_sauce");
    await expect(InventoryPage.imgProduct1).toHaveAttr("src", "/static/media/sauce-backpack-1200x1500.34e7aa42.jpg");
    await expect(InventoryPage.imgProduct2).toHaveAttr("src", "/static/media/bike-light-1200x1500.a0c9caae.jpg");
    await expect(InventoryPage.imgProduct3).toHaveAttr("src", "/static/media/bolt-shirt-1200x1500.c0dae290.jpg");
    await expect(InventoryPage.imgProduct4).toHaveAttr("src", "/static/media/sauce-pullover-1200x1500.439fc934.jpg");
    await expect(InventoryPage.imgProduct5).toHaveAttr("src", "/static/media/red-onesie-1200x1500.1b15e1fa.jpg");
    await expect(InventoryPage.imgProduct6).toHaveAttr("src", "/static/media/red-tatt-1200x1500.e32b4ef9.jpg");
    await InventoryPage.logout();
    await browser.refresh();
  });

  it("All the purchase butons must have the correct text when it clicked", async () => {
    await LoginPage.login("standard_user", "secret_sauce");
    await expect(InventoryPage.btnAllProduct).toHaveTextContaining(
      "ADD TO CART"
    );
    await InventoryPage.btnProduct1.click();
    await InventoryPage.btnProduct2.click();
    await InventoryPage.btnProduct3.click();
    await InventoryPage.btnProduct4.click();
    await InventoryPage.btnProduct5.click();
    await InventoryPage.btnProduct6.click();
    await expect(InventoryPage.btnAllProduct).toHaveTextContaining("REMOVE");
    await InventoryPage.btnRProduct1.click();
    await InventoryPage.btnRProduct2.click();
    await InventoryPage.btnRProduct3.click();
    await InventoryPage.btnRProduct4.click();
    await InventoryPage.btnRProduct5.click();
    await InventoryPage.btnRProduct6.click();
    await expect(InventoryPage.btnAllProduct).toHaveTextContaining(
      "ADD TO CART"
    );
    await InventoryPage.logout();
    await browser.refresh();
  });

  it("Validate functionality of buttons", async () => {
    await LoginPage.login("standard_user", "secret_sauce");
    await InventoryPage.btnProduct1.click();
    await InventoryPage.btnProduct2.click();
    await InventoryPage.btnProduct3.click();
    await InventoryPage.btnProduct4.click();
    await InventoryPage.btnProduct5.click();
    await InventoryPage.btnProduct6.click();
    await expect(InventoryPage.btnAllProduct).toHaveTextContaining("REMOVE");
    await InventoryPage.btnCart.click();
    await InventoryPage.btnRProduct1.click();
    await InventoryPage.btnRProduct2.click();
    await InventoryPage.btnRProduct3.click();
    await InventoryPage.btnRProduct4.click();
    await InventoryPage.btnRProduct5.click();
    await InventoryPage.btnRProduct6.click();
    await InventoryPage.btnCShopping.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    await expect(InventoryPage.btnAllProduct).toHaveTextContaining(
      "ADD TO CART"
    );
    await InventoryPage.hamburguer.click();
    await InventoryPage.aboutSidebar.click();
    await expect(browser).toHaveUrl("https://saucelabs.com/");
    await browser.url("https://www.saucedemo.com/");
    await browser.refresh();
  });

  it("Validate the sort A-Z and Z-A", async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
    const list = await $('.inventory_list');
    const length = await list.$$('.inventory_item').length;
    let arrAZ = [];
    for (let i = 0; i < length; i++) {
      arrAZ.push(await list.$$('.inventory_item')[i].$('.inventory_item_name').getText());
    };
    await InventoryPage.sortZA();
    let arrZA = [];
    for (let i = 0; i < length; i++) {
      arrZA.push(await list.$$('.inventory_item')[i].$('.inventory_item_name').getText());
    };
    await expect(arrAZ.reverse().toString()).toEqual(arrZA.toString());
    await InventoryPage.logout();
    await browser.refresh();
  });

  it("Validate the sort low price and high price", async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
    await InventoryPage.sortLH();
    const list = await $('.inventory_list');
    const length = await list.$$('.inventory_item').length;
    let arrLH = [];
    for (let i = 0; i < length; i++) {
      arrLH.push(await list.$$('.inventory_item')[i].$('.inventory_item_price').getText());
    };
    await InventoryPage.logout();
    await browser.refresh();
    await LoginPage.login('standard_user', 'secret_sauce');
    await InventoryPage.sortHL();
    let arrHL = [];
    for (let i = 0; i < length; i++) {
      arrHL.push(await list.$$('.inventory_item')[i].$('.inventory_item_price').getText());
    };
    await expect(arrLH.reverse().toString()).toEqual(arrHL.toString());
    await InventoryPage.logout();
    await browser.refresh();
  });
});
