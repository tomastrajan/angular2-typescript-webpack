import { Component } from 'angular2/angular2';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'home',
    template: require('./home.tpl.html'),
    directives: [ROUTER_DIRECTIVES]

})
export default class HomeComponent {
}