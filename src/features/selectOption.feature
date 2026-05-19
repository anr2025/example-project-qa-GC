@selectOption @R1
Feature: Validacion del flujo selectOtion

#Descripcion de la historia de usuario
#Como usuario 
#Quiero  seleccionar un elemento(selectOption)
#Para validar el funcionamiento del flujo

Background: Ingresar a la web 
Given  el cual un usuario ingresa a la direccion  url de la web

@esc001_happy_selectOption @R1
Scenario: Seleccionar un país
 When selecciono la opcion selectOption
 And selecciono la opción "Colombia" de la lista
