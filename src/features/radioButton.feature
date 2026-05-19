@radio_button @R1
Feature: Validacion del flujo Radio Button

#Descripcion de la historia de usuario
#Como usuario 
#Quiero  seleccionar un elemento(Radio button)
#Para validar el funcionamiento del flujo

Background: Ingresar a la web 
Given que el usuario ingresa a la direccion  url de la web

@esc001_happy_radio_button @R1
Scenario: Seleccionar una opcion del radio Button
 When selecciono la opcion Radio Button
 And selecciono la opcion "Sí", para el elemento Radio Button