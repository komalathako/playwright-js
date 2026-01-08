exports.CompletePage = class CompletePage {
    constructor(page) {
        this.page = page;
        this.completeHeader = page.locator('.complete-header');
    }

    async verifyOrderCompleted() {
        await this.completeHeader.waitFor();
        await this.page.waitForTimeout(2000);
    }
}