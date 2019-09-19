LEER DOCUMENTACION DE ANGULARFIRE2
=============================================
Firebase:
Project: crudIonic
=============================================

Dependencias:
npm i firebase angularfire2 -S
es igua
npm install firebase angularfire2 --save

[firebase@5.7.0 (si da errores)]

Result:
+ angularfire2@5.2.1
+ firebase@6.6.1

=============================================
IMPORTACIONES:
app.module.ts

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { firebaseConfig } from "../environments/environment";

imports: [
  AngularFireModule.initializeApp(firebaseConfig),      AngularFirestoreModule
]

=============================================
ionic g page pages/todoDetails
ionic g service services/todo
=============================================
crear carpeta (models) dentro de app:

task.interface.ts

export interface TaskI {
    id?: string;
    task: string;
    priority: string;
}

=============================================
Verificar routing
=============================================
service: (Crear metodos de conexion a firebase)

//modulos angular
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs";
//operador map o tab
import { map } from "rxjs/operators";
//Interface
import { TaskI } from "../models/task.interface";

Ver codigo...
=============================================
Home HTML:
home.page.html
=============================================
home.page.ts

import { TaskI } from "../models/task.interface";
import { TodoService } from "../services/todo.service";

export class HomePage implements OnInit

ngOnInit(){ 
  }

=============================================


=============================================


=============================================

=============================================
https://www.youtube.com/watch?v=REgMMe2fYKA
