# Contributing to Product Explorer

First off, thank you for considering contributing to Product Explorer! It's people like you that make open source such a great community.

## Code of Conduct
By participating in this project, you are expected to uphold our Code of Conduct. Please treat all contributors with respect and professionalism.

## How Can I Contribute?

### Reporting Bugs
- Ensure the bug was not already reported.
- Open a new issue providing a clear title and a detailed description of the bug.
- Include steps to reproduce the issue, expected behavior, and your system environment.

### Suggesting Enhancements
- Open a new issue with a clear title and a detailed description of the suggested enhancement.
- Explain why this enhancement would be useful to most users.

### Pull Requests
1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. Ensure the test suite passes.
4. Make sure your code lints.
5. Follow the Angular coding style guidelines and Domain-Driven Design (DDD) patterns established in the project.
6. Issue that pull request!

## Coding Guidelines
- **Language**: TypeScript is required.
- **Framework**: Angular 17+ (Standalone Components).
- **Architecture**: Domain-Driven Design (DDD) principles must be strictly followed. Keep the `shared` and `digital-assets` bounded contexts clean.
- **State Management**: Use Angular Signals for reactive state management.
- **Naming Conventions**: Use English for all variables, classes, and file names. Drop the `Component` suffix for presentation classes (e.g., use `ProductList` instead of `ProductListComponent`).
- **Documentation**: Provide TSDoc comments for all classes and methods, including `@summary` and `@author`.

Thank you for contributing!
