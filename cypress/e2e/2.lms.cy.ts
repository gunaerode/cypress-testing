describe('Lms', () => {
  it('Sanity test', () => {
    cy.visit('http://library.mlp.office.cyberu.com/');
    cy.log('Our website');
  });
});
