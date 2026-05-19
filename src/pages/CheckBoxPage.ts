import{Page, expect} from "@playwright/test";
export default class CheckBoxPage {

    constructor(private page: Page) {}

    private Elements = {
        selectionOptionCheckBoxBtn:"//button[contains(text(),'Check Box')]",
        optionCbo: "//*[@id='checkbox']//input",
    }
    async navigate() {
        await this.page.goto(process.env.BASEURL!, {timeout: 60000});

    }
    async selectOptionCheckBox() {
        await this.page.click(this.Elements.selectionOptionCheckBoxBtn);
    }
    async selectOption(option: string) {
        let cbo= this.page.locator(this.Elements.optionCbo);
        for(let i=0; i< await cbo.count(); i++){
            if(await cbo.nth(i).evaluate((el => el.nextSibling?.textContent?.trim())) === option)
                {
                    return await cbo.nth(i).click();
            }
        }
    }

}