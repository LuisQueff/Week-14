import LoginPage from "../pageobjects/login.page";
import InventoryPage from "../pageobjects/inventory.page";
import CartPage from "../pageobjects/cart.page";
import checkout1Page from "../pageobjects/checkout1.page";
import Checkout2Page from "../pageobjects/checkout2.page";
import CompletePage from "../pageobjects/complete.page";

describe("Cases in which the purchase is successful", () => {
  beforeAll("go to the url", () => {
    browser.url("https://www.saucedemo.com/");
  });

  it("should be able to buy a product", async () => {
    await LoginPage.login("standard_user", "secret_sauce");
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    await InventoryPage.btnProduct1.click();
    await InventoryPage.btnCart.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
    await CartPage.btnCheckout.click();
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    await checkout1Page.checkout("jose", "perez", "11000");
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
  });
});
