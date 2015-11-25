# Angular 2 Typescript Webpack Starter Project

Mostly a repo I am using for trying out & learning Angular 2 concepts which will eventually evolve into a starter project
which I will use for all new Angular 2 projects.

Checkout [demo](http://tomastrajan.github.io/angular2-typescript-webpack)

## Stack

* Angular 2
* Typescript
* Webpack

## Tradeoffs

#### CDN vs BUNDLE
Bundling 3rd party libraries (*jquery, materialize-css, ...*) into main (or separate vendor) bundle might
be useful in enterprise environment which might be isolated from public internet.
Using common *CDN*s might bring benefit because most users will already have cached versions
of most common 3rd party libraries in their browsers.

#### CSS in components vs independend styling
I think that styles in components are more appropriate / needed when developing reusable component library.
For more specific implementation of application, I perceive that separated styles provide more benefits because
they are more open for editing by *designers* / *UX people* than  tweaking component code directly.
