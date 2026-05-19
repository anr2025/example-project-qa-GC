@upload @R1
Feature: Validacion del flujo upload

#Descripcion de la historia de usuario
#Como usuario 
#Quiero  cargar un archivo(Upload)
#Para validar el funcionamiento del flujo

Background: Ingresar a la página web 

Given que el usuario ingresa a la webpage 
@esc001_happy_Upload @R1
Scenario: Cargar un archivo 
 When selecciono la opcion Upload
 And cargo el documento "qa", con el formato ".png"