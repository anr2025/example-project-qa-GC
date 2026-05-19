@date @R1
Feature: Validacion del flujo Date

#Descripcion de la historia de usuario
#Como usuario 
#Quiero  Ingresar un elemento(Date)
#Para validar el funcionamiento del flujo

Background: Ingresar a la web 
Given que un usuario ingresa a la direccion  url de la web

@esc001_happy_date @R1
Scenario: Ingresar una fecha mm/dd/yyyy
 When selecciono la opcion Date
 And ingreso la fecha "05/11/2026" en el campo Date
