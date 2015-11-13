import 'reflect-metadata';
import {bootstrap, Component} from 'angular2/angular2';

@Component({
    selector: 'my-app',
    template: '<h1>Angular 2 Typescript Webpack Starter Project</h1>'
})
class AppComponent { }

bootstrap(AppComponent);