import { testData } from "../testData";
exports.LandingPage = class LandingPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginBtn = page.locator('[data-test="login-button"]');
  }
  async gotoWebsite() {
    await this.page.goto("https://www.saucedemo.com/");
  }
  async getPageURL() {
    return await this.page.url();
  }
  async loginContainer() {
    await this.page.waitForSelector("#login_button_container", {
      visible: true,
    });
  }

  async login() {
    const { username, password } = testData ?? {};
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
  async gotoInventory() {
    await this.page.goto("https://www.saucedemo.com/inventory.html");
  }
};
