import { Component } from 'angular2/angular2';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import TodoComponent from './todo/todo';

@Component({
    selector: 'app',
    template: require('./app.tpl.html'),
    styles: [require('./app.less')],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', component: TodoComponent }
])
export default class AppComponent {
}