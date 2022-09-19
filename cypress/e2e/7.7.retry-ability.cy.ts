// Cypress.config('defaultCommandTimeout', 16000); // wait until 16 sec overwrite defautlCommantTimeout 4 secs to 16
describe('Retry-ability', () => {
  it.skip('Page load delay', () => {
    cy.visit('/loaddelay', { timeout: 30000 }); // 30 sec waits to load page
  });
  it.skip('Client delay', () => {
    cy.visit('/clientdelay');
    //Press the button below and wait for data to appear (15 seconds) but cypress default only waits until 4 secs
    cy.get('#ajaxButton').click();
    cy.get('.bg-success').should(
      'have.text',
      'Data calculated on the client side.'
    );
  });
  it.only('Loading complete message test', () => {
    cy.visit('/progressbar');
    cy.get('#startButton').click();
    cy.get('#progressBar', { timeout: 30000 }).should('have.text', '100%');
  });
});
