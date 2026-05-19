#Feature: es todo el flujo completo con su respectivo tag principal
#Scenario: Identifica solo a un caso de prueba, si se tiene mas casos, se agrega mas escenario
@text_box @R1
Feature:Text Box-Validacion del formulario
 #plasmar la HU
  #Como usuario
  #Quiero ingresar mis datos en el formulario Text Box
  #Para enviarlos correctamente

#paso previos(unico)
  Background: Navegar al sitio web
  Given que el usuario ingresa a la página principal

@esc001_happy_path_text_box @R1
Scenario: Envío exitoso con datos válidos
And selecciona la opcion Text Box
When ingreso "Giancarlo" en el campo nombre
And ingreso "giancarlo@hotmail.com" en el campo email
And hago click en Enviar
Then valido el formulario con el mensaje "Datos enviado correctamente"