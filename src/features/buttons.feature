#Feature: es todo el flujo completo con su respectivo tag principal
#Scenario: Identifica solo a un caso de prueba, si se tiene mas casos, se agrega mas escenario
@buttons @R1
Feature:Butttons del formulario
 #plasmar la HU
  #Como usuario
  #Quiero hacer click en el boton
  

#paso previos(unico)
  Background: Navegar al sitio web
  Given que el usuario ingrese al sitio WEB

@esc001_happy_buttons @R1
Scenario: Realizo la acción de hacer click en el botón
When selecciono la opción buttons
And hago click la opción de validar
Then valido el mensaje "El button ha sido clickeado"