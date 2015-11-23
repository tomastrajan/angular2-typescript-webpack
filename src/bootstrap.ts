import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';

import 'zone.js';
import 'reflect-metadata';

import { bootstrap } from 'angular2/angular2';
import 'angular2/router';

import AppComponent from './app/app';

bootstrap(AppComponent, [

]).then(
    success => console.log('App bootstrapped!'),
    error => console.log(error)
);