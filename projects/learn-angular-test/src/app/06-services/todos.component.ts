import { TodoService } from './todo.service'
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todos',
  template:``
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  message="";

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe(t => this.todos = t);
  }

  add() {
    const newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      {
        next:( t) => this.todos.push(t),
        error:(err) => this.message = err,
        complete: () => console.info('complete')
      });
  }

  delete(id:any) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }
}
