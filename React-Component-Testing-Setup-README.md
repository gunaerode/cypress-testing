## Example React Component Testing using Create React App(CRA)
---
- #### Links
  - [Component Testing](https://docs.cypress.io/guides/component-testing/writing-your-first-component-test#Component-vs-End-to-End-in-a-Nutshell)
  - [Example React Testing](https://docs.cypress.io/guides/component-testing/quickstart-react#Configuring-Component-Testing)
- `.gitignore` add `cypress/**/videos` `node_modules`
- `tsconfig.json` -> under `complierOptions` add `"types": ["cypress", "node"]`
- #### Codes
  ---
```json
"scripts": {
    ...
    "cy:e2e": "cypress open --e2e --browser chrome",
    "cy:component": "cypress open --component --browser chrome",
    "cy:run": "cypress run --component"
  },
```
```js Stepper.tsx
import { useState } from 'react';

export default function Stepper({ initial = 0, onChange = () => {} }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onChange(newCount);
  };

  return (
    <div>
      <button aria-label="decrement" onClick={decrement}>
        -
      </button>
      <span data-cy="counter">{count}</span>
      <button aria-label="increment" onClick={increment}>
        +
      </button>
    </div>
  );
}
```
```js Stepper.cy.tsx
// import { mount } from 'cypress/react18';
import Stepper from './Stepper';

describe('<Stepper>', () => {
  beforeEach(() => {
    cy.mount(<Stepper />);
  });
  it('Check the value', () => {
    cy.get('[data-cy=counter]').contains('0');
    cy.get('[data-cy=counter]').should('have.text', '0');
  });
});

describe('<Stepper> initial', () => {
  beforeEach(() => {
    cy.mount(<Stepper initial={100} />);
  });
  it('Check the value', () => {
    // Assert
    cy.get('[data-cy=counter]').should('have.text', '100');
  });
  it('when clicking increment and decrement buttons, the counter is changed as expected', () => {
    cy.mount(<Stepper initial={100} />);
    cy.get('[data-cy=counter]').should('have.text', '100');
    cy.get('[aria-label="increment"]').click();
    cy.get('[data-cy=counter]').should('have.text', '101');
    cy.get('[aria-label="decrement"]').click().click();
    cy.get('[data-cy=counter]').should('have.text', '99');
  });
});
```

- #### Optional using Cypress Testing Library
---
  - `npm i -D @testing-library/cypress`
  ```js
    // cypress/support/component.js
    // cy.findBy* commands will now be available.
    // This calls Cypress.Commands.add under the hood
    import '@testing-library/cypress/add-commands' 
  ```
