import { test } from "@playwright/test";

test("Calendar", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );
  let date = "05-21-2024";

  await page.fill("id-birthday", date);
  await page.waitForTimeout(3000);
});
