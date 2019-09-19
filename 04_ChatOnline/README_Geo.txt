

Ionic 4 en español : Login con firebase, app de chat parte 1

https://www.youtube.com/watch?v=xgkwOBpU3ek

=======================================
Se ejecuta en un proyecto:
=======================================
ionic info

Ionic:

   Ionic CLI                     : 5.2.7 (C:\Users\Geo\AppData\Roaming\npm\node_modules\ionic)
   Ionic Framework               : @ionic/angular 4.7.1
   @angular-devkit/build-angular : 0.13.9
   @angular-devkit/schematics    : 7.3.9
   @angular/cli                  : 7.3.9
   @ionic/angular-toolkit        : 1.5.1

Cordova:

   Cordova CLI       : not installed
   Cordova Platforms : not available
   Cordova Plugins   : not available

Utility:

   cordova-res : not installed
   native-run  : not installed

System:

   NodeJS : v10.16.3 (C:\Program Files\nodejs\node.exe)
   npm    : 6.9.0
   OS     : Windows 10

================================================
COMPONENTES
================================================
El componente "login" esta creado dentro de la carpeta "componentes":
ionic generate page componentes/login

Conexion a Firebase:
npm install firebase @angular/fire --save

Crear un servicio: (proveedor de datos)
ionic generate service servicios/auth

Video2:

Guards:
ionic generate guard guards/auth








