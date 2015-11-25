import { Component } from 'angular2/angular2';

@Component({
    selector: 'todo',
    template: `
        <div class="container">
            <p>Counter: {{counter}}</p>
            <button class="btn waves-effect waves-light" (click)="increment()">+</button>
            <br />
            <input [(ng-model)]="model" />
            <button class="btn waves-effect waves-light" (click)="addName()">Add name</button>
            <ul class="collection">
                <li class="collection-item" *ng-for="#name of names">{{name}}</li>
            </ul>
        </div>
    `
})
export default class TodoComponent {

    counter: number = 0;
    model: string;
    names: string[];

    constructor() {
        this.model = 'John';
        this.names = ['Tomas'];
    }

    increment() {
        this.counter++;
    }

    addName() {
        if (this.model.length) {
            this.names.push(this.model);
            this.model = '';
        }
    }

}