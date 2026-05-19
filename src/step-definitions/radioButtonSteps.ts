
import{Given, When, Then} from "@cucumber/cucumber";        
import RadioButtonPage from "../pages/RadioButtonPage";

Given('que el usuario ingresa a la direccion  url de la web', async function () {
    this.radiobutton = new RadioButtonPage(this.page);
    await this.radiobutton.navigate();
});   
When ('selecciono la opcion Radio Button', async function () {
 await this.radiobutton.selectOptionRadioButton();
 
});

When ('selecciono la opcion {string}, para el elemento Radio Button',  async function (option: string) {
    await this.radiobutton.selectOption(option);
});