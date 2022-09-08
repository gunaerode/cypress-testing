## [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)

---

- [Examples properties](https://example.cypress.io/)
- [Typescript Setup](https://docs.cypress.io/guides/tooling/typescript-support#Install-TypeScript)
- [Typescript docs](https://www.typescriptlang.org/docs/)
- [UITesting Website uitestingplayground](http://uitestingplayground.com/textinput)
  - #### E2E & Component
    - **NOTE** `E2E` - Testing Entire page , `Component` - Only Particular component 
  - #### Best Practices
    - [How to select elements](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements)

  - #### NPM & YARN

    - `npm install --save-dev typescript` or `yarn add --dev typescript`
    - `npm i cypress-xpath` - [cypres xpath](https://www.npmjs.com/package/cypress-xpath)

  - #### Configure tsconfig.json

    ```json
    {
      "compilerOptions": {
        "target": "es5",
        "lib": ["es5", "dom"],
        "types": ["cypress", "node"]
      },
      "include": ["**/*.ts"]
    }
    ```

- #### comments

  - ```js
    describe('empty spec', () => {
      it('passes', () => {
        cy.visit('https://example.cypress.io');
        cy.log('Testing Cypress Examples');
      });
    });
    ```

  - `before` or `after` - inside descirbe -> Runs before or after all the hooks
  - `beforeEach` or `afterEach` - inside descirbe -> Runs beforeEach or afterEach runs before and after each and every hooks
  - `describe.only` or `it.only` - General only runs particular describe or it hook, None of the testcases will be except only
  - `describe.skip` or `it.skip` - General skip only particular describe or it hook but all the testcases will be shown

  - ```js
    describe('mocha demo', () => {
      /** Runs before all the hook */
      before(() => {
        cy.log('before log');
      });

      /** Runs after all the hook */
      after(() => {
        cy.log('after log');
      });

      /** Runs before each and every hook */
      beforeEach(() => {
        cy.log('beforeEach log');
      });

      /** Runs after each and every hook */
      afterEach(() => {
        cy.log('afterEach log');
      });

      it('testcase #1', () => {
        cy.log('testcase one');
      });

      it('testcase #2', () => {
        cy.log('testcase 2');
      });

      /** only runs just it.only test cases */
      it.only('testcase #3', () => {
        cy.log('testcase 3');
      });

      /** skip will just it.skip test caseses */
      it.skip('testcase #4', () => {
        cy.log('testcase 4');
      });
    });
    ```

- #### baseUrl

  - [Base url](https://docs.cypress.io/guides/references/configuration#Configuration-File)
  - [Base url in cli](https://dev.to/walmyrlimaesilv/how-to-change-the-baseurl-via-command-line-with-cypress-1olm)
  - In the `cypress.config.ts` add below on `baseUrl`

    ```js
    import { defineConfig } from 'cypress';

    export default defineConfig({
      e2e: {
        baseUrl: 'http://localhost:1234',
      },
    });
    ```

  - Get current url using `cy.url()`

    ```js
    it('Get visit input url', () => {
      cy.url().then((url) => {
        cy.log(`The Current Active url: ${url}`);
      });
    });
    ```

- #### Assertions

  - [Core concepts](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Asserting-About-Elements)
  - [All assertions](https://docs.cypress.io/guides/references/assertions#BDD-Assertions)
  - [API Commands](https://docs.cypress.io/api/commands/get)

- #### Concepts
  - ````
    BDD (Behavior Driven Development) is designed to test an application's behavior from the end user's standpoint, whereas TDD(Test Driven Development) is focused on testing smaller pieces of functionality in isolation.```
    ````
- `cy.get(element)` & `type(value)`, `click()`, `should(chainers, text)` - Select the element in the particular page
  - ```js
    it('Input Challange', () => {
      cy.visit('/textinput');
      /** Check input */
      cy.get('input#newButtonName').type('Hey input field...');
      cy.get('button#updatingButton')
        .click()
        .should('have.text', 'Hey input field...');
    });
    ```
- **NOTE**: `should` vs `then` if you have only assertion in the hook use `should` other vice use `then`
- `cy.contains` - check the content of the element
- `cy.find` - find element

- #### Reference Links
---
[introducing-the-cypress-component-test-runner](https://www.cypress.io/blog/2021/04/06/introducing-the-cypress-component-test-runner/) - [Old blog just for an reference] (https://www.cypress.io/blog/2021/04/06/cypress-component-testing-react/)
[Intro to component testing( youtube]https://youtu.be/vJ0rDP4CG-w)
[Cypress component test runner](https://www.cypress.io/blog/2021/04/06/introducing-the-cypress-component-test-runner/)
[Visual Testing](https://docs.cypress.io/guides/tooling/visual-testing#What-you-ll-learn)
[If we use Typescript then need to add "types": ['src', 'cypress'] in the tsconfig.json](https://docs.cypress.io/guides/tooling/typescript-support#Install-TypeScript)
[Types of testing Scenario](https://docs.cypress.io/guides/core-concepts/testing-types#Common-scenarios-for-component-tests )
[Angular Component testing](https://www.youtube.com/watch?v=wbsTfi4V0Jw)

