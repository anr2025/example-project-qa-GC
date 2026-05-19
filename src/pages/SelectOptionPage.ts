import { Page, expect } from "@playwright/test";
export default class SelectOptionPage {

    constructor(private page: Page) { }

    private Elements = {
        selectionOptionBtn: "//button[contains(text(),'Select Option')]",
        selectOptionCountrySelOpt: "//*[@id='opciones']",
    }
    async navigate() {
        await this.page.goto(process.env.BASEURL!, { timeout: 60000 });

    }
    async selectOptionP() {
        await this.page.click(this.Elements.selectionOptionBtn);
    }

    async selectCountry(country: string) {
        await this.page.selectOption(this.Elements.selectOptionCountrySelOpt, country);

    }
}
