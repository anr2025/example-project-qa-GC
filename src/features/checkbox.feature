@check_box @R1
Feature: Validacion del flujo Check Box

#Descripcion de la historia de usuario
#Como usuario 
#Quiero  seleccionar un elemento(Check box)
#Para validar el funcionamiento del flujo

Background: Ingresar a la web 

Given que el usuario ingresa a la url de la web

@esc001_happy_check_box @R1
Scenario: Seleccionar una opción del check box
When selecciono la opcion Check Box
And selecciono la opcion "CSS"
