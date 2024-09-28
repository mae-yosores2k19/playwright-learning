import { test, expect } from "./fixtures/pages-fixture";
test("Successful login", async ({ LandingPageFixture, page }) => {
  await LandingPageFixture.gotoWebsite();
  const currentURL = await LandingPageFixture.getPageURL();
  await expect(currentURL).toBe("https://www.saucedemo.com/");
  await LandingPageFixture.loginContainer();
  await LandingPageFixture.login();
  const productUrl = await LandingPageFixture.getPageURL();
  await expect(productUrl).toBe("https://www.saucedemo.com/inventory.html");
  await expect(page.locator('[data-test="title"]')).toHaveText("Products");
  await page.context().storageState({ path: "./authentication.json" });
});
