# Testing and Debugging MERN Applications

This assignment focuses on implementing comprehensive testing strategies for a MERN stack application, including unit testing, integration testing, and end-to-end testing, along with debugging techniques.

## Assignment Overview

You will:
1. Set up testing environments for both client and server
2. Write unit tests for React components and server functions
3. Implement integration tests for API endpoints
4. Create end-to-end tests for critical user flows
5. Apply debugging techniques for common MERN stack issues


## 🧪 MERN Application Testing and Debugging

This repository contains a full-stack MERN (MongoDB, Express, React, Node.js) application implemented with a comprehensive multi-layered testing strategy, fulfilling the requirements for the assignment on testing and debugging MERN applications.

---

## 🎯 Assignment Overview

The primary goal of this assignment was to implement robust testing across all layers of the application, including unit, integration, and end-to-end testing, while maintaining high code quality and coverage.

### Key Objectives Achieved

* **Setup:** Configured separate testing environments for the client (using `jest-environment-jsdom`) and server (using `testEnvironment: 'node'`).
* **Unit Testing:** Implemented unit tests for critical server utilities/middleware and client components/utilities.
* **Integration Testing:** Developed integration tests using Supertest for the server's Express API routes (`/api/users`).
* **E2E Testing:** Created end-to-end tests using Playwright to validate critical user flows (counter, form submission, navigation).
* **Coverage:** Achieved the required code coverage threshold (70%) for unit tests.

---

## 📂 Project Structure

The project maintains a clear separation between the client and server, with dedicated test directories for organized execution.

mern-testing/ ├── client/                 # React Front-End │   ├── src/                # React Source Code │   │   ├── components/     # (e.g., Button.js) │   │   └── utils/          # (e.g., helpers.js) │   ├── tests/              # Client Tests │   │   ├── unit/           # (Component & Utility Tests) │   │   └── e2e/            # (Playwright E2E Tests) │   ├── package.json        # Client dependencies and scripts │   ├── jest.config.js      # Client Jest config (uses jsdom, Babel) │   └── playwright.config.js # Playwright E2E configuration ├── server/                 # Express.js Back-End │   ├── utils/              # (e.g., helpers.js) │   ├── middleware/         # (e.g., auth.js) │   └── tests/              # Server Tests │       ├── unit/           # (Utility/Middleware Tests) │       └── integration/    # (API/DB Tests using Supertest) │   └── package.json        # Server dependencies and scripts


---

## 🛠️ Testing Strategy and Tools

The testing framework is built around three core layers:

| Layer | Tool/Framework | Location/Scope | Purpose |
| :--- | :--- | :--- | :--- |
| **Unit** | Jest & RTL | `client/tests/unit/`, `server/tests/unit/` | Isolated testing of functions, components, and middleware. Mocking external dependencies. |
| **Integration** | Jest & Supertest | `server/tests/integration/` | Testing the interaction between Express routes and application logic (API Contract). |
| **E2E** | Playwright | `client/tests/e2e/` | Testing the complete user journey through the deployed (or served) application in a real browser environment. |

### Execution Commands

All tests can be executed from the respective `server/` or `client/` directories:

| Context | Command | Test Scope |
| :--- | :--- | :--- |
| **Server** | `npm run test:unit` | Server-side Unit Tests (Helpers, Middleware) |
| **Server** | `npm run test:integration` | Server-side Integration Tests (API Endpoints) |
| **Client** | `npm run test:unit` | Client-side Unit Tests (Components, Utilities) |
| **Client** | `npm run test:e2e` | Client-side End-to-End Tests (Playwright) |
| **Global** | `npm run test:coverage` | Generate Code Coverage Reports |

---

## ✅ Submission Requirements Met