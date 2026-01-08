exports.CheckoutPage = class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.zip = page.locator('#postal-code');
        this.continueBtn = page.locator('#continue');
        this.finishBtn = page.locator('#finish');
    }

    async enterCustomerInfo(info) {
        await this.firstName.fill(info.firstname);
        await this.lastName.fill(info.lastname);
        await this.zip.fill(info.postalcode);
        await this.continueBtn.click();
        await this.finishBtn.click();
    }
}