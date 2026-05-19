
import{Given, When, Then} from "@cucumber/cucumber";        
import DatePage from "../pages/DatePage";

Given('que un usuario ingresa a la direccion  url de la web', async function () {
    this.date = new DatePage(this.page);
    await this.date.navigate();
});   
When ('selecciono la opcion Date', async function () {
 await this.date.selectOptionDate();
 
});

When ('ingreso la fecha {string} en el campo Date',  async function (date: string) {
    await this.date.enterDate(date);
});


