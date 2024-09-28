import { test, expect } from "./fixtures/pages-fixture";
test("Clean up", async ({
  LandingPageFixture,
  ProductPageFixture,
  context,
  page,
}) => {
  await LandingPageFixture.gotoInventory();
  await ProductPageFixture.logout();
  const currentURL = await LandingPageFixture.getPageURL();
  expect(currentURL).toBe("https://www.saucedemo.com/");
  await context.clearCookies();
});
