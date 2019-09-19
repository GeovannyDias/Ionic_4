import { Component, OnInit } from '@angular/core';
import { TaskI } from "../../models/task.interface";
import { TodoService } from "../../services/todo.service";
import { ActivatedRoute } from "@angular/router";
import { NavController, LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {
  //propiedades
  todo: TaskI = {
    task: '',
    priority: 0
  };

  todoId = null;

  constructor(
    private router: ActivatedRoute,
    private nav: NavController,
    private todoService: TodoService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.todoId = this.router.snapshot.params['id'];
    if (this.todoId) {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();//apagamos el loading
      this.todo = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Saving...'
    });
    await loading.present();

    //el mismo boton para actualizar y crear un tarea
    if (this.todoId) {
      //Update
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      }); //Devuelver una promesa
    } else {
      //Add New
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    }
  }

  onRemove(idTodo: string){
    this.todoService.removeTodo(idTodo);
  }




}
