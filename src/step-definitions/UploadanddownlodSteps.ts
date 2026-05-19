import { Given,When,Then} from "@cucumber/cucumber";
import UploadPage from "../pages/uploadanddownloadPages";

Given('que el usuario ingresa a la webpage', async function () {
  this.uploadPage = new UploadPage(this.page);
    await this.uploadPage.navigate();
  
});
When ('selecciono la opcion Upload',async function () {
    await this.uploadPage.selectOptionUpload();
});

When ('cargo el documento {string}, con el formato {string}', async function (file:string, formatType:string) {
   await this.uploadPage.selectFile(file,formatType);
});