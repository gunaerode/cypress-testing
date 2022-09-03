describe('Testing UITestingPlayground', () => {
  beforeEach(() => {
    cy.visit('/textinput');
  });

  it('Get visit input url', () => {
    cy.url().then((url) => {
      cy.log(`The Current Active url: ${url}`);
      /** Check wheather url contains /textinput or not */
      expect(url).to.contains('/textinput');
    });
  });

  it('Title validation', () => {
    cy.visit('/classattr');
    /** Check title */
    cy.title().then((title) => {
      cy.log(title);
      expect(title).to.be.equal('Class Attribute');
    });
  });

  it('Input Challange', () => {
    cy.visit('/textinput');
    /** Check input */
    cy.get('input#newButtonName').type('Hey input field...');
    cy.get('button#updatingButton').click().should('have.text', 'Hey input field...');
  });
});
