import LoginPage from "../pageobjects/login.page";
import InventoryPage from "../pageobjects/inventory.page";

describe("Cases in which login is made", () => {
  beforeAll("go to the url", () => {
    browser.url("https://www.saucedemo.com/");
  });

  it("should login with valid credentials of a problem user", async () => {
     await LoginPage.login('problem_user', 'secret_sauce');
     await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
     await InventoryPage.logout();
     await browser.refresh();
  });

  it("should login with valid credentials of a performance glitch user", async () => {
    await LoginPage.login('performance_glitch_user', 'secret_sauce');
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    await InventoryPage.logout();
    await browser.refresh();
  });

  it("should login with valid credentials", async () => {
    await LoginPage.login("standard_user", "secret_sauce");
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    await InventoryPage.logout();
    await browser.refresh();
  });
});

describe("Cases in which login is not done", () => {
  beforeAll("go to the url", () => {
    browser.url("https://www.saucedemo.com/");
  });
  it("should not login with empty fields", async () => {
    await LoginPage.login('', '');
    await expect(LoginPage.errorMsg).toBeDisplayed();
    await expect(LoginPage.errorMsg).toHaveText(
      "Epic sadface: Username is required"
    );
    await browser.refresh();
  });

  it("should not login with empty user name", async () => {
    await LoginPage.login('', 'secret_sauce');
    await expect(LoginPage.errorMsg).toBeDisplayed();
    await expect(LoginPage.errorMsg).toHaveText(
      "Epic sadface: Username is required"
    );
    await browser.refresh();
  });

  it("should not login with empty password", async () => {
    await LoginPage.login('standard_user', '');
    await expect(LoginPage.errorMsg).toBeDisplayed();
    await expect(LoginPage.errorMsg).toHaveText(
      "Epic sadface: Password is required"
    );
    await browser.refresh();
  });

  it("should not login with valid user and wrong password", async () => {
    await LoginPage.login('standard_user', 'hola');
    await expect(LoginPage.errorMsg).toBeDisplayed();
    await expect(LoginPage.errorMsg).toHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );
    await browser.refresh();
  });

  it("should not login with a wrong user and valid password", async () => {
    await LoginPage.login('pepito', 'secret_sauce');
    await expect(LoginPage.errorMsg).toBeDisplayed();
    await expect(LoginPage.errorMsg).toHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );
    await browser.refresh();
  });

  it("should not login with locked credentials", async () => {
    await LoginPage.login("locked_out_user", "secret_sauce");
    await expect(LoginPage.errorMsg).toBeDisplayed();
    await expect(LoginPage.errorMsg).toHaveText(
      "Epic sadface: Sorry, this user has been locked out."
    );
    await browser.refresh();
  });
});


