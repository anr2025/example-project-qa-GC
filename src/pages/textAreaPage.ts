import { Page, Expect, expect } from "@playwright/test";
import { text } from "stream/consumers";
export default class TextAreaPage {
    constructor(private page: Page) { }
    private Elements = {

        selectionOptionTextArea: "//button[contains(text(),'Text Area')]",
        textAreaTxtArea: "(//*[@id='textArea'])[2]",

    }
    async navigate() {
        await this.page.goto(process.env.BASEURL!, { timeout: 10000 });

    }
    async selectOptionTextArea() {
        await this.page.click(this.Elements.selectionOptionTextArea);
    }

    async enterTextArea(text: string) {
        await this.page.fill(this.Elements.textAreaTxtArea, text);
    }
} 
