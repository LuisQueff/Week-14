import LoginPage from "../pageobjects/login.page";
import Inventory from "../pageobjects/inventory";

describe("My Login application", () => {
    beforeAll("go to the url", () => {
      browser.url("https://www.saucedemo.com/");
    });

    it("should be able to buy a product", async () => {
        await LoginPage.login("standard_user", "secret_sauce");
        await Inventory.btnProduct1.click();
        await Inventory.btnCart.click();
        
        await browser.refresh();
      });
});