const base = require("@playwright/test");
import { LandingPage } from "../pages/landing-page.js";
import { ProductPage } from "../pages/product-page.js";
import { CheckoutPage } from "../pages/checkout-page.js";

exports.test = base.test.extend({
  LandingPageFixture: async ({ page }, use) => {
    const landingPage = new LandingPage(page);
    await use(landingPage);
  },
  ProductPageFixture: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },
  CheckoutPageFixture: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },
});
exports.expect = base.expect;
