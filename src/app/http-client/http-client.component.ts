import { Component, OnInit } from '@angular/core';
import {delay} from 'rxjs/operators';
import {Todo, TodosService} from './todos.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  todos: Todo[] = [];
  todoTitle = '';
  loading = false;
  error = '';

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    };

    this.todosService.addTodo(newTodo)
      .subscribe( todo => {
        this.todos.push(todo);
        this.todoTitle = '';
      });
  }

  fetchTodos() {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe( todos => {
        this.todos = todos;
        this.loading = false;
      },
        error => {
          this.error = error.message;
        });
  }

  removeTodo(id: number) {
    this.todosService.removeTodos(id)
      .subscribe( () => {
        this.todos = this.todos.filter( todo => todo.id !== id);
      });
  }

  completeTodo(id: number) {
    this.todosService.completeTodo(id)
      .subscribe( (todo) => {
        this.todos.find( item => item.id === todo.id ).completed = true;
      });
  }
}
