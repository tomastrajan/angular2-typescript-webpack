import { Component } from 'angular2/angular2';

@Component({
    selector: 'todos',
    template: require('./todos.tpl.html')
})
export default class TodosComponent {

    description: string;
    todos: Todo[];

    constructor() {
        this.description = '';
        this.todos = [];
    }

    addTodo() {
        let todo = {
            description: this.description
        };
        this.todos.push(todo);
        this.description = '';
    }

}

interface Todo {
    description: string;
}