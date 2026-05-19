import{Page,expect} from "@playwright/test";
export default  class uploadanddownloadPages {

    constructor(private page:Page){}

    private Elements = {
       selectionOptionUploadBtn: "//button[contains(text(),'Upload & Download')]",
       selectFile: "//*[@id='archivo']",  

       //*[@id="upload"]/div/input
       ValidationMessagelbl:"//*[@id='textButton']",
    }
    async navigate(){
        await this.page.goto(process.env.BASEURL!,{timeout:10000});
    }

    async selectOptionUpload(){
        await this.page.click(this.Elements.selectionOptionUploadBtn);
    }
    async selectFile(file:string, formatType:string){
        await this.page.locator(this.Elements.selectFile).setInputFiles("src/files/"+file + formatType);
        await this.page.waitForTimeout(10000);//los tiempos fijos no son recomendabes, se utilizan los tiempos dinámicos.
    }
}