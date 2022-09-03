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
