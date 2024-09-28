exports.ProductPage = class ProductPage {
  constructor(page) {
    this.page = page;
  }
  async getAddToCartButtons() {
    return await this.page.locator('[id*="add-to-cart"]');
  }
  async clickItemInCart() {
    await this.page
      .locator("button#add-to-cart-sauce-labs-fleece-jacket")
      .click();
  }
  async clickRandomAddToCartButton() {
    const addToCartButtons = await this.getAddToCartButtons();
    const buttonCount = await addToCartButtons.count();
    const randomIndex = Math.floor(Math.random() * buttonCount);
    await addToCartButtons.nth(randomIndex).click();
  }
  async getBadgeCount() {
    const badgeElement = await this.page
      .locator("#shopping_cart_container > a > span")
      .innerText();
    return badgeElement;
  }
  async logout() {
    await this.page.getByRole("button", { name: "Open Menu" }).click();
    await this.page.pause();
    await this.page.locator('[data-test="logout-sidebar-link"]').click();
  }
};
