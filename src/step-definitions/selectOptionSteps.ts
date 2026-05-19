
import{Given, When, Then} from "@cucumber/cucumber";        
import SelectOptionPage from "../pages/SelectOptionPage";

Given('el cual un usuario ingresa a la direccion  url de la web', async function () {
    this.SelectOption = new SelectOptionPage(this.page);
    await this.SelectOption.navigate();
});   
When ('selecciono la opcion selectOption', async function () {
 await this.SelectOption.selectOptionP();
 
});

When ('selecciono la opción {string} de la lista', async function (country:string) {
 await this.SelectOption.selectCountry(country);

});