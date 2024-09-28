import { test, expect } from "../fixtures/pages-fixture";

test.describe("Add Products to Cart", () => {
  test("add", async ({ page, ProductPageFixture, LandingPageFixture }) => {
    await LandingPageFixture.gotoInventory();
    await test.step("Add Sauce Labs Fleece Jacket Item", async () => {
      await ProductPageFixture.clickItemInCart();
    });
    await test.step("add random product", async () => {
      await ProductPageFixture.clickRandomAddToCartButton();
      ("");
      const badgeCount = await ProductPageFixture.getBadgeCount();
      await expect(badgeCount).toBe("2");
    });
  });
});

test.describe("Checkout Product", () => {
  test.beforeEach(async ({ ProductPageFixture, LandingPageFixture }) => {
    await LandingPageFixture.gotoInventory();
    await ProductPageFixture.clickItemInCart();
    await ProductPageFixture.clickRandomAddToCartButton();
  });

  test("checkout", async ({ CheckoutPageFixture }) => {
    await test.step("go to cart items", async () => {
      await CheckoutPageFixture.clickCart();
      await expect(await CheckoutPageFixture.getPageTitle()).toBe("Your Cart");
      await CheckoutPageFixture.clickCheckoutButton();
      await expect(await CheckoutPageFixture.getPageTitle()).toBe(
        "Checkout: Your Information"
      );
    });
    await test.step("Proceed to checkout", async () => {
      await CheckoutPageFixture.checkout();
      await expect(await CheckoutPageFixture.getPageTitle()).toBe(
        "Checkout: Overview"
      );
    });
  });
});
