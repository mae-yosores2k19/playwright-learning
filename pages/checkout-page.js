import { testData } from "../testData";

exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
  }
  async clickCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }
  async getPageTitle() {
    return await this.page
      .locator('[data-test="secondary-header"]')
      .innerText();
  }
  async clickCheckoutButton() {
    await this.page.locator('[data-test="checkout"]').click();
  }
  async checkout() {
    const { firstName, lastName, Zipcode } = testData ?? {};
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(Zipcode);
    await this.page.locator('[data-test="continue"]').click();
  }
};
