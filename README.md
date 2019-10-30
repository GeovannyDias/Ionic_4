# Ionic_4
Codigo


# Back - Button

```
 <ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/"></ion-back-button>
    </ion-buttons>
    <ion-title>Page Two</ion-title>
  </ion-toolbar>
</ion-header>
```

# MenuController

```
import { MenuController } from '@ionic/angular';
private menuCtrl: MenuController


ionViewWillEnter() {
    console.log('Menu habilitado');
    //this.menuCtrl.swipeGesture(true, 'primerMenuGeo');
    this.menuCtrl.enable(true, 'primerMenuGeo');
  }

  ionViewDidLeave(){
    console.log('Menu deshabilitado');
    this.menuCtrl.enable(false, 'primerMenuGeo');
  }
  
```

# Information Web

# Parámetros en las rutas Angular
* **https://desarrolloweb.com/articulos/parametros-rutas-angular.html**

# Realiza consultas simples y compuestas en Cloud Firestore

* **https://firebase.google.com/docs/firestore/query-data/queries?hl=es-419**

```
Agregar la propiedad ".ref"

db.collection("coleccion").ref.doc("id_doc")....
db.collection("coleccion").ref.where("clave", "==", "valor").get().....

//Funsión con dos formar de consulta
queryUser() {
    const uid = this.afAuth.auth.currentUser.uid;
    console.log('uid_geo: ', uid);

    //Consulta de un solo documento segun su "id"
    this.db.collection("tramites").ref.doc("UT4y0a3SRw29QzqiotQt")
      .onSnapshot(function (doc) {
        const data = doc.data();
        console.log("Current data: ", doc.data());
        console.log('Observacion: ', data.observacion);
      });

    //Consulta de varios documentos con un valor existentes
    this.db.collection("tramites").ref.where("estado", "==", "finalizado")
      .get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data().observacion);
        });
      }).catch(error => {
        console.log("Error getting documents: ", error);
      });
  }
  
  En la segunda consulta se pude enviar como valor el uid del usuario logueado.
  
```
# Salir de App

```
salir(){
   navigator['app'].exitApp();
}

```
**Información similar al tema anterior**

* **https://firebase.google.com/docs/firestore/query-data/get-data?hl=es-419**
* **https://firebase.google.com/docs/firestore/query-data/listen?hl=es-419**

# Obtén datos con Cloud Firestore

* **https://firebase.google.com/docs/firestore/query-data/get-data?hl=es-419**

# Primeros pasos con Firebase Authentication en sitios web
* **https://firebase.google.com/docs/auth/web/start?hl=es-419**

# Administra usuarios en Firebase

* **https://firebase.google.com/docs/auth/web/manage-users**

# Construye una App con Ionic y Firebase paso a paso

* **https://medium.com/learn-ionic-framework/construye-una-app-con-ionic-y-firebase-paso-a-paso-218105b77263**

# Flujo de datos entre componentes Angular

* **https://academia-binaria.com/flujo-de-datos-entre-componentes-angular/**


# Basic email authentication with Firebase in Ionic 4
```
npm install firebase @angular/fire --save
```
**More information end article**
* **https://enappd.com/blog/email-authentication-with-firebase-in-ionic-4/38/**



# How to use Geolocation, Geofencing and Beacon plugins in Ionic 4

* **https://medium.com/enappd/using-geolocation-and-beacon-plugins-in-ionic-4-754b41304007**

# Creación de componente Autenticación y Registro con Angular & Firebase # 2

* **https://medium.com/@mesasergio/creaci%C3%B3n-de-componente-autenticaci%C3%B3n-y-registro-con-angular-firebase-2-92c8926fd09d**

# Aprende el ciclo de vida de un componente en Ionic

* **https://blog.ng-classroom.com/blog/tips/lifecycle-ionic/**

# Aprende el ciclo de vida de un componente en Ionic

* **https://blog.ng-classroom.com/blog/tips/lifecycle-ionic/**

# Eliminar la suscripción a un observable de Angular

* **https://desarrolloweb.com/articulos/eliminar-suscripcion-observable-angular.html**

# Comunicación servicio – componente en Angular

* **http://blog.enriqueoriol.com/2017/05/comunicacion-servicio-componente-en-angular.html**

# Ionic 3 for Beginners : Adding Timer

* **https://www.youtube.com/watch?v=LLADN_R8I1k**

# DECORADORES DE ANGULAR
## Comunicación entre componentes utilizando ViewChild — Angular

* **https://medium.com/@andydev404/comunicaci%C3%B3n-entre-componentes-utilizando-viewchild-angular-20d5bb4619e5**

# IMG

* **https://svgsilh.com/image/1633249.html**

# Ionic 4 | Turn on Device GPS in Ionic 4 Application Without Leaving App using Ionic Native Plugin
* **https://www.freakyjolly.com/ionic-4-turn-on-device-gps-in-ionic-4-application-without-leaving-app-using-ionic-native-plugin/**

# Exportar y firmar APK en Ionic
* **https://www.nigmacode.com/ionic/Exportar-y-firmar-APK-en-Ionic**
```
ionic cordova build --release android
```
* **https://ionicframework.com/docs/v1/guide/publishing.html**
* **https://ionicframework.com/docs/building/android**
* **Como generar Iconos y SplashScreen con Ionic.**
* **https://blog.ng-classroom.com/blog/tips/preparando-iconos-splashscreen/**
**Ionic V3**
* **https://ionicframework.com/docs/v3/developer-resources/platform-setup/windows-setup.html**

# Instalar gradle en WINDOWS 10
* **https://rstopup.com/como-puedo-instalar-gradle-en-windows-10.html**
* **https://gradle.org/**
```
Ejecutar en la linea de comandos:
$ java
$ android
  For command-line tools, use tools\bin\sdkmanager.bat
  and tools\bin\avdmanager.bat
$ gradle
```
***Crear APK**
```
ionic i -g cordova
ionic cordova platform rm android
ionic cordova platform add android
ionic cordova build android
```
# Android Studio
**Licencia**
* **https://www.it-swarm.net/es/android/no-ha-aceptado-los-acuerdos-de-licencia-de-los-siguientes-componentes-de-sdk/828010816/**

**Instalación**
* **https://ionicframework.com/docs/installation/android**

```
android_sdk_root is a system variable which points to root folder of android sdk tools. You probably get the error because the variable is not set. To set it in Android Studio go to:

File -> project Structure into Project Structure
Left -> SDK Location
SDK location select Android SDK location
If you have installed android SDK please refer to this answer to find the path to it: https://stackoverflow.com/a/15702396/3625900
```
