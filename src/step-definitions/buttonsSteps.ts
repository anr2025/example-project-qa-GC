
import{Given, When, Then} from "@cucumber/cucumber";        
import ButtonsPage from "../pages/ButtonsPages";

Given('que el usuario ingrese al sitio WEB', async function () {
    this.buttonsPage = new ButtonsPage(this.page);
    await this.buttonsPage.navigate();
});   
When ('selecciono la opción buttons', async function () {
 await this.buttonsPage.selectOptionButtons();
 
});

When ('hago click la opción de validar', async function () {
 await this.buttonsPage.clickButtons();

});
Then ('valido el mensaje {string}', async function (msgValidate:string) {
 await this.buttonsPage.validateMsg(msgValidate);

});