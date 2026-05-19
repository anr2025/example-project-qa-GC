@forms @R1
Feature: Validacion del formulario de practica

#Descripcion de la historia de usuario
#Como usuario 
#Quiero  llenar el formulario de practica
#Para validar el flujo del formulario

Background: Ingresar a la página principal de la web 

Given que el usuario ingresa a la pagina principal de la webpage 
@esc001_forms @R1
Scenario: Llenar los datos de todo el formulario
 When selecciono la opcion Practice Form
 And ingreso "Alix" en el campo First Name
 And ingreso "Nunez" en el campo Last Name
 And ingreso "alix.nunez@example.com" en el campo Email
 And ingreso "1234567890" en el campo Mobile
 And selecciono el género "Female"
 And ingreso la fecha de nacimiento "10/10/1990"
 And ingreso "Maths, Physics" en el campo Subjects
  And selecciono el State "Cusco"
 And selecciono la opcion de Hobbies "Sports"
 And ingreso "Calle 123, Ciudad, País" en el campo Address
 And cuando hago click en submit
 Then valido el mensaje "Formulario enviado correctamente" se encuentre correcto