@textArea @R1
Feature: Text Area
#plasmar la HU
#Como usuario
#Quiero ingresar la informacion en el area de texto
#Para completar el formulario


#paso previo(unico)
Background: Navegar al sitio web
Given que el usuario ingresa a la web


@escenario001_happy_path_text_area @R1
Scenario: Ingresar informacion en el area de texto
When selecciona la opcion Text Area
And ingreso el texto "Hola mundo"


