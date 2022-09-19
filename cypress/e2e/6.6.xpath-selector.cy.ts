describe('x-path selectors', () => {
    beforeEach(() => {
      cy.visit('/classattr');
    });
  
    it('select elemnent that have text "Correct variant is"', () => {
      cy.xpath(`//*[text()='Correct variant is']`).should(
        'contains.text',
        'Correct'
      );
    });
    it('find an element by its attribute"', () => {
      cy.xpath(`//pre[@class=' language-html']`).should(
        'contains.text',
        'button'
      );
    });
  
    it('find an element by its attribute"', () => {
      cy.xpath(
        `//button[contains(concat(' ', @class, ' '), ' btn-warning ')]`
      ).should('have.css', 'background-color', 'rgb(255, 193, 7)');
    });
  });
  