import { Page, expect } from "@playwright/test";
export default class RadioButtonPage {

    constructor(private page: Page) { }

    private Elements = {
        selectionOptionRadioButtonBtn: "//button[contains(text(),'Radio Button')]",
        optionRadioBtn: "//*[@id='radio']//input",
    }
    async navigate() {
        await this.page.goto(process.env.BASEURL!, { timeout: 60000 });

    }
    async selectOptionRadioButton() {
        await this.page.click(this.Elements.selectionOptionRadioButtonBtn);
    }
    async selectOption(option: string) {
        let rdt = this.page.locator(this.Elements.optionRadioBtn);
        for (let i = 0; i < await rdt.count(); i++) {
            if (await rdt.nth(i).evaluate((el => el.nextSibling?.textContent?.trim())) === option) {
                return await rdt.nth(i).click();
            }
        }
    }

}