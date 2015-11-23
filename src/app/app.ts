const logo = require('../image/logo.png');

import { Component } from 'angular2/angular2';

import TestComponent from './test/test';

@Component({
    selector: 'app',
    directives: [TestComponent],
    template: `
        <div class="container">
            <nav>
                <div class="nav-wrapper purple darken-4">
                <a href="#!" class="brand-logo">
                    <img src="` + logo + `" style="position: absolute; top:5px; left: 5px; height: 55px;" />
                    <span style="margin-left: 70px">Angular 2 Typescript Webpack Starter Project</span>
                </a>
                <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="javascript:void(0)">Todos</a></li>
                </ul>
                <ul class="side-nav" id="mobile-demo">
                    <li><a href="javascript:void(0)">Todos</a></li>
                </ul>
                </div>
            </nav>

            <test></test>
        </div>
    `
})
export default class AppComponent {
}