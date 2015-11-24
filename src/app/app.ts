import { Component } from 'angular2/angular2';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import HomeComponent from './home/home';
import TodoComponent from './todo/todo';

@Component({
    selector: 'app',
    template: require('./app.tpl.html'),
    styles: [require('./app.less')],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', component: HomeComponent, as: 'Home' },
    { path: '/todo', component: TodoComponent, as: 'Todo' }
])
export default class AppComponent {
}