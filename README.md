# Product Explorer

## Author
- **Developer:** Rodolfo Zavaleta
- **Student Code:** U20241F733

## Overview
This project is an interactive web application that allows users to consult and explore products (specifically phones and laptops) available on the DummyJSON public API.

## Features
- **Browse Products**: Fetch and view a curated catalogue of products based on specific search queries.
- **Product Insights**: Display detailed information for each product, including image, description, category, price, and rating.
- **API Integration**: Direct access to additional product information via the DummyJSON detail endpoint.
- **Multilingual Support**: Switch between English and Spanish seamlessly.
- **Ethical Attribution**: Clear attribution to the DummyJSON API and Logo.dev services.

## Technologies
- Angular framework.
- Typescript language.
- Angular Material UI Component Library.
- Angular HTTP client.
- Angular Signals.
- Angular reactive state management.
- NGX-Translate library.
- DummyJSON service client.
- Logo.dev Logo service client.

# Environment Variables
To run this project, you need to set up the following environment variables in `environment.development.ts`:
- `dummyjsonApiBaseUrl`: Base URL for the DummyJSON service (`https://dummyjson.com`).
- `productsDummyjsonProductsEndpointPath`: Endpoint path for product searches (`/products/search`).
- `logoDummyjsonApiBaseUrl`: Base URL for the Logo.dev service (`https://img.logo.dev/`).
- `logoDummyjsonPublishabledKey`: Your API key for the Logo.dev service. You can obtain an API key by signing up at [Logo.dev](https://logo.dev/).

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
