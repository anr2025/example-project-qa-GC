import { Page, expect } from "@playwright/test";
export default class DatePage {

    constructor(private page: Page) { }

    private Elements = {
        selectionOptionDateBtn: "//button[contains(text(),'Date')]",
        optionDateInput: "//*[@id='date']/div/input",
    }
    async navigate() {
        await this.page.goto(process.env.BASEURL!, { timeout: 60000 });

    }
    async selectOptionDate() {
        await this.page.click(this.Elements.selectionOptionDateBtn);
    }
    async enterDate(date: string) {
        await this.page.type(this.Elements.optionDateInput, date);

    }
}