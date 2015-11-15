import { Component, CORE_DIRECTIVES } from 'angular2/angular2';

@Component({
    selector: 'my-app',
    directives: [ CORE_DIRECTIVES ],
    template: `
        <div class="container">
            <h1>Angular 2 Typescript Webpack Starter Project</h1>
            <p>{{test}} {{model}} {{counter}}</p>
            <p [hidden]="visible">Visible test</p>
            <input [(value)]="model" />
            <ul>
                <li *ng-for="#name of names">{{name}}</li>
            </ul>
            <button class="btn waves-effect waves-light" (click)="increment()">+</button>
            <button class="btn waves-effect waves-light" (click)="addName()">Add name</button>
            <button class="btn waves-effect waves-light" (click)="toggleVisible()">Toggle visible</button>
        </div>
    `
})
export default class AppComponent {

    model: string;
    test: string;
    counter: number = 0;
    names: string[];
    visible: boolean;

    constructor() {
        this.model = 'model';
        this.test = 'test';
        this.names = ['Tomas'];
        this.visible = false;
    }

    increment() {
        this.counter++;
        console.log(this.counter);
    }

    addName() {
        this.names.push('Lolo');
        console.log(this.names);
    }

    toggleVisible() {
        this.visible = !this.visible;
    }

}