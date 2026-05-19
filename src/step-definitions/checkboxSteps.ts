
import{Given, When, Then} from "@cucumber/cucumber";        
import CheckBoxPage from "../pages/CheckBoxPage";

Given('que el usuario ingresa a la url de la web', async function () {
    this.checkboxpage = new CheckBoxPage(this.page);
    await this.checkboxpage.navigate();
});   
When ('selecciono la opcion Check Box', async function () {
 await this.checkboxpage.selectOptionCheckBox();
 
});

When ('selecciono la opcion {string}', async function (option: string) {
    await this.checkboxpage.selectOption(option);
});
    
