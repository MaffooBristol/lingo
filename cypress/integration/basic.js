describe('basic-test', () => {
  it('fills-data', () => {
    cy.visit('/#testy');
    cy.get('#form-input').type('toast{enter}');
    cy.get('#form-input').type('tents{enter}');
    cy.get('#form-input').type('tests{enter}');
    cy.get('#form-input').type('testy');
    cy.screenshot();
    cy.get('#form-input').type('{enter}');
    cy.contains('won');
    cy.get('.latest-guess').should('have.text', 'testy');
  });
});
