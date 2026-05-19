import { Page, expect } from "@playwright/test";
export default class ButtonsPage {

    constructor(private page: Page) { }

    private Elements = {
        selectionOptionButtonsBtn: "//button[contains(text(),'Buttons')]",
        optionButtonsBtn:"//*[@id='buttons']/div/button",
        validationMessagelbl:"//*[@id='textButton']"

    }
    async navigate() {
        await this.page.goto(process.env.BASEURL!, { timeout: 60000 });

    }
    async selectOptionButtons() {
        await this.page.click(this.Elements.selectionOptionButtonsBtn);
    }
    async clickButtons() {
        await this.page.click(this.Elements.optionButtonsBtn);
    }   

    async validateMsg(msgValidate:string) {  
         await expect( this.page.locator(this.Elements.validationMessagelbl)).toHaveText(msgValidate);
                
    }
}




