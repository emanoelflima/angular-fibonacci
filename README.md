# AngularFibonacci

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

# About the project

The project consists in an angular application, that contains a simple component to handle the application search bar and history table.

The archtecture was bilt as follows:

- Main angular app
  - Fibonacci component: responsible of handling the requests and handle the data from the service.
  - Fibonacci service: responsible of providing the desired Fibonacci number and to save / load the search history to / from the localStorage.
    To keep the scope as simple as possible, I choose to use the localStorage instead of a database or writting to a file. One of the old approaches uses cookies, but the localStorage fits better the requirements, since the whole application runs in client-side. Therefore, the local storage also supports more data than cookies do, which would be better if the log grows up in size.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
