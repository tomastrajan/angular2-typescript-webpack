import './main.scss';

declare var $: any;
import 'velocity-animate/velocity.min.js';
import 'jquery/dist/jquery.min.js';
import 'materialize-css/dist/js/materialize.min.js';

import 'zone.js';
import 'reflect-metadata';

import { bootstrap, provide } from 'angular2/angular2';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import AppComponent from './app/app';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,

    provide(LocationStrategy, { useClass: HashLocationStrategy })
]).then(
    success => {
        console.log('App bootstrapped!');
        //$(document).ready(function() {
        //    $(".button-collapse").sideNav();
        //});
    },
    error => console.log(error)
);