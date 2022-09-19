
describe('css selectors', () => {
    beforeEach(() => {
        cy.visit('/dynamicid');
    })
    /** Just check the text with contains */
    it('contains check', () => {
        cy.contains('Button with Dynamic ID').should('have.text', 'Button with Dynamic ID');
    });
    /** how to use find */
    it('find button text', () => {
        cy.get('div').find('button').should('have.text', 'Button with Dynamic ID');
    });
    
    it('css attribute selector', () => {
        cy.get(`button[class="btn btn-primary"]`).should('have.text', 'Button with Dynamic ID');
        cy.get(`.btn-primary`).should(
          'have.text',
          'Button with Dynamic ID'
        );
    });
});