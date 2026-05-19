import { Given, When, Then } from "@cucumber/cucumber";
import FormsPages from "../pages/FormsPages";

Given('que el usuario ingresa a la pagina principal de la webpage', async function () {
    this.formsPage = new FormsPages(this.page);
    await this.formsPage.navigate();

});
When('selecciono la opcion Practice Form', async function () {
    await this.formsPage.selectPracticeForm();
});

When('ingreso {string} en el campo First Name', async function (text: string) {
    await this.formsPage.fillFirstName(text);
});
When('ingreso {string} en el campo Last Name', async function (text: string) {
    await this.formsPage.fillLastName(text);
});

When('ingreso {string} en el campo Email', async function (text: string) {
    await this.formsPage.fillEmail(text);
});
When('ingreso {string} en el campo Mobile', async function (text: string) {
    await this.formsPage.fillMobile(text);
});
When('selecciono el género {string}', async function (gender: string) {
    await this.formsPage.selectGender(gender);
});
When('ingreso la fecha de nacimiento {string}', async function (date: string) {
    await this.formsPage.enterDate(date);
});
When('ingreso {string} en el campo Subjects', async function (text: string) {
    await this.formsPage.fillSubjects(text);
})
When('selecciono el State {string}', async function (state: string) {
    await this.formsPage.selectState(state);
});

When('selecciono la opcion de Hobbies {string}', async function (option: string) {
    await this.formsPage.selectOptionHobbies(option);
});

When('ingreso {string} en el campo Address', async function (address: string) {
    await this.formsPage.fillAddress(address);
});
When('cuando hago click en submit', async function () {
    await this.formsPage.clickSendBtn();
});

Then('valido el mensaje {string} se encuentre correcto', async function (msgValidatform: string) {
    await this.formsPage.validateForm(msgValidatform);

});

