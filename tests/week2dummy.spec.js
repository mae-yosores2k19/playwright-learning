import { test, expect } from "@playwright/test";

test("test_case_2", async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
  });

  const context = await browser.newContext({
    recordVideo: {
      dir: "videos/",
      size: {
        width: 800,
        height: 600,
      },
    },
  });

  const page = await context.newPage();

  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="username"]').press("Tab");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="password"]').press("Enter");

  // Check if the url is correct
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  // Find all elements with the selector containing 'add-to-cart'
  const addToCartButtons = await page.locator('[id*="add-to-cart"]');

  // Get the count of buttons
  const buttonCount = await addToCartButtons.count();

  // Verify the count of buttons
  await expect(buttonCount).toBe(6);

  // Randomly select an index
  const randomIndex = Math.floor(Math.random() * buttonCount);

  // Click the first product
  await page.locator("#add-to-cart-sauce-labs-fleece-jacket").click();

  // Click the button
  await addToCartButtons.nth(randomIndex).click();

  // Check if the #shopping_cart_container > a > span in the cart is have a text 1
  await expect(page.locator("#shopping_cart_container > a > span")).toHaveText(
    "2"
  );

  // Click the cart link
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Check if the url is correct
  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

  // Count the number of items in the cart
  // Find all elements with the selector containing class name 'inventory_item_name'
  const itemName = await page.locator(".inventory_item_name");
  const itemCount = await itemName.count();

  // Verify that the cart has the correct number of items
  await expect(itemCount).toBe(2);

  // Logout
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  await context.close();
});
