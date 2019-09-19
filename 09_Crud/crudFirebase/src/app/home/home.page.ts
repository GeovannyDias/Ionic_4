import { Component, OnInit } from '@angular/core';
//importar
import { TaskI } from "../models/task.interface";
import { TodoService } from "../services/todo.service";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  //propiedad:
  todos: TaskI[];

  constructor(private todoService: TodoService) {}

  ngOnInit(){
    // llamar al metodo de nuestro service para recuperar las tareas
    this.todoService.getTodos().subscribe(res => {
      // console.log(res);
      this.todos = res;
    });
  }

}
