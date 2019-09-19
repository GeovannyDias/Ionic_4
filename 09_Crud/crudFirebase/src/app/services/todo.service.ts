import { Injectable } from '@angular/core';
//modulos angular
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs";
//operador map o tab
import { map } from "rxjs/operators";
//Interface
import { TaskI } from "../models/task.interface";


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //properties
  private todosCollection: AngularFirestoreCollection<TaskI>;
  //Propiedad donde vamos almacenar todas las tareas
  private todos: Observable<TaskI[]>;


  //injectar al constructor
  constructor(db: AngularFirestore) {
    this.todosCollection = db.collection<TaskI>('todos'); // tabla 'todos'
    this.todos = this.todosCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ... data }; //operador de propagacion
        });
      }
    ));

   }

  //retorna todas las colecciones
   getTodos(){
     return this.todos; 
   }

   //en singular con id
   getTodo(id: string){
     return this.todosCollection.doc<TaskI>(id).valueChanges();
   }

   //CRUD
   //Actulidar
   updateTodo(todo: TaskI, id: string){
     //al .doc le pasamos un id
     return this.todosCollection.doc(id).update(todo);
   }

   //Agregar
   addTodo(todo: TaskI){
     return this.todosCollection.add(todo);
   }

   //Eliminar
   removeTodo(id: string){
     return this.todosCollection.doc(id).delete();
   }




}
