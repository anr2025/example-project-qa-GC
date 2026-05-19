import { Page, expect } from "@playwright/test";
export default class FormsPages {

    constructor(private page: Page) { }

    private Elements = {
        PracticeFormBtn: "xpath=/html/body/div[2]/div[1]/button[9]",
        firstNameInput: "//*[@id='firstName']",
        lastNameInput: "//*[@id='lastName']",
        emailInput: "//*[@id='email']",
        mobileInput: "//*[@id='mobile']",
        selectGender: "//*[@id='gender']",
        dateInput: "//*[@id='practiceForm']/div/div[1]/div[6]/input",
        subjectsInput: "//*[@id='practiceForm']/div/div[1]/div[7]/input",
        selectState: "//*[@id='practiceForm']/div/div[1]/div[8]/select",
        checkboxHobbiesBtn: "//*[@id='practiceForm']/div/div[2]/input",
        textAddress: "//*[@id='practiceForm']/div/div[3]/textarea",
        sendBtn: "//*[@id='practiceForm']/div/button",
        ValidationMessagelbl: "//*[@id='formResult']",
    }
    async navigate() {
        await this.page.goto(process.env.BASEURL!, { timeout: 10000 });
    }

    async selectPracticeForm() {
        await this.page.click(this.Elements.PracticeFormBtn);
    }

    async fillFirstName(firstname: string) {
        await this.page.fill(this.Elements.firstNameInput, firstname);
    }
    async fillLastName(lastname: string) {
        await this.page.fill(this.Elements.lastNameInput, lastname);
    }

    async fillEmail(email: string) {
        await this.page.fill(this.Elements.emailInput, email);

    }
    async fillMobile(mobile: string) {
        await this.page.fill(this.Elements.mobileInput, mobile);
    }
    async selectGender(gender: string) {
        await this.page.selectOption(this.Elements.selectGender, gender);
    }
    async enterDate(date: string) {
        await this.page.type(this.Elements.dateInput, date);

    }
    async fillSubjects(subjects: string) {
        await this.page.fill(this.Elements.subjectsInput, subjects);
    }   
    async selectState(state: string) {
        await this.page.selectOption(this.Elements.selectState, state);
    }   
   
    async selectOptionHobbies(option: string) {
        let cbo= this.page.locator(this.Elements.checkboxHobbiesBtn);
        for(let i=0; i< await cbo.count(); i++){
            if(await cbo.nth(i).evaluate((el => el.nextSibling?.textContent?.trim())) === option)
                {
                    return await cbo.nth(i).click();
            }
        }
    }  

    async fillAddress(address: string) {
        await this.page.fill(this.Elements.textAddress, address);
    }   
    async clickSendBtn() {
        await this.page.click(this.Elements.sendBtn);
    }   

    async validateForm(msgValidate: string) {
        await expect(this.page.locator(this.Elements.ValidationMessagelbl)).toHaveText(msgValidate);
    }   

}