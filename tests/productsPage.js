exports.ProductsPage = class ProductsPage {
    constructor(page) {
        this.page = page;
        this.addSauceLabsBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
        this.addBikeLight = page.locator('#add-to-cart-sauce-labs-bike-light');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addProductsToCart() {
        await this.addSauceLabsBackpack.click();
        await this.addBikeLight.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }
}