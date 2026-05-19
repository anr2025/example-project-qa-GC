import{Given, When, Then} from "@cucumber/cucumber";   
import TextBoxPage from "../pages/textBoxPage";

import TextAreaPage from "../pages/textAreaPage";

Given('que el usuario ingresa a la web', async function () {

    this.textAreaPage = new TextAreaPage(this.page);
    await this.textAreaPage.navigate();
    });

    When ('selecciona la opcion Text Area', async function () {
        await this.textAreaPage.selectOptionTextArea();
    });

    When('ingreso el texto {string}', async function (text: string) {
        await this.textAreaPage.enterTextArea(text);
  });
    



