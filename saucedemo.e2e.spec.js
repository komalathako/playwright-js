const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/loginPage');
const { ProductsPage } = require('../pages/productsPage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage');
const { CompletePage } = require('../pages/completePage');

const users = require('../testdata/users.json');

test('SauceDemo End-to-End Purchase Flow', async ({ page }) => {
    test.setTimeout(90000); 

    const login = new LoginPage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);
    const complete = new CompletePage(page);

    await login.goto();
    await login.login(users.validUser.username, users.validUser.password);
    await page.waitForTimeout(3000);

    await products.addProductsToCart();
    await page.waitForTimeout(2000);
    await products.openCart();
    await page.waitForTimeout(3000)

    await cart.checkout();
    await page.waitForTimeout(3000)
    await checkout.enterCustomerInfo(users.customerInfo);
    await page.waitForTimeout(3000)

    await complete.verifyOrderCompleted();
    await page.waitForTimeout(3000)

    const thankYou = await page.locator('.complete-header').textContent();
    await page.waitForTimeout(3000)
    expect(thankYou.toLowerCase()).toContain('thank you');

});