import { Component } from 'angular2/angular2';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import HomeComponent from './home/home';
import TodosComponent from './todo/todos';

@Component({
    selector: 'app',
    template: require('./app.tpl.html'),
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', component: HomeComponent, as: 'Home' },
    { path: '/todo', component: TodosComponent, as: 'Todo' },
    { path: '/signin', component: TodosComponent, as: 'Signin' },
    { path: '/signup', component: TodosComponent, as: 'Signup' }
])
export default class AppComponent {
}