import{Page,Expect, expect} from "@playwright/test";
import { send } from "process";
export default class TextBoxPage {
    constructor(private page: Page) {}

    private Elements = {
        selectionOptionTextBoxBtn:"//button[contains(text(),'Text Box')]",
        nameInput:"//*[@id='nameText']",
        emailInput:"//*[@id='emailText']",
        sendBtn:"//*[@id='textbox']/div/button",
        validateLbl:"//*[@id ='textBoxMessage']",

    }

    async navigate() {

    await this.page.goto(process.env.BASEURL!,{timeout:10000});

    }
    async selectOptionTextBox(){
        await this.page.click(this.Elements.selectionOptionTextBoxBtn);
    }   
    async fillName(name:string){
        await this.page.fill(this.Elements.nameInput,name);
  }  
    async fillEmail(email:string){
        await this.page.fill(this.Elements.emailInput,email);

    }

    async clickSendBtn(){
        await this.page.click(this.Elements.sendBtn);
    }
    async validateForm(msgValidate:string){
    //aqui va a validar que el mensaje depsues d eingresar losa dtos sea Datos enviados correctamente
    //solamente para validaciones se utilia el locator y apunta al elemento que contiene el xpath del mensaje a validar
    await expect( this.page.locator(this.Elements.validateLbl)).toHaveText(msgValidate);
    }

}               


