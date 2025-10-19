# CSS Layout Algorithm Demo

An interactive demo for switching between CSS layout algorithms (flow, flexbox, grid, positioned).

Try it out live: https://css-layout-algorithm-demo.netlify.app/

This demo is inspired by the article "Understaying Layout Algorithms": https://www.joshwcomeau.com/css/understanding-layout-algorithms/

## Learning Goal

For me, it was fruitless to memorize individual CSS properties without seeing the bigger picture.
Only by understanding the underlying layout algorithms, I can make a mental CSS model that makes sense for me.

Therefore, this demo serves as a playground for experimenting with layout algorithms.

## Features

- Switch between different CSS layout algorithms
- Switch a few properties within a selected layout algorithm

## Further resources

Beside of the resources above, studying the architecture of Chrome-RenderingNG helped me to understand CSS: https://developer.chrome.com/articles/renderingng-architecture/

And even the Flutter rendering pipeline has some similarities with flexbox/grid: https://docs.flutter.dev/resources/architectural-overview#layout-and-rendering

## Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
