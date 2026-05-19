
import{Given, When, Then} from "@cucumber/cucumber";        
import TextBoxPage from "../pages/textBoxPage";

Given('que el usuario ingresa a la pagina principal', async function () {
    this.textBoxPage = new TextBoxPage(this.page);
    await this.textBoxPage.navigate();
});       

When('selecciono la opción Text Box', async function () {
    await this.textBoxPage.selectOptionTextBox();
    }); 

When('ingreso {string} en el campo nombre', async function (name:string) {
    await this.textBoxPage.fillName(name);
    }); 

When('ingreso {string} en el campo email', async function (email:string) {
    await this.textBoxPage.fillEmail(email);
    });

When('hago click en Enviar', async function () {
    await this.textBoxPage.clickSendBtn();
    });

Then('valido el formulario con el mensaje {string}', async function (msgValidate:string) {
    await this.textBoxPage.validateForm(msgValidate);
    
    });
