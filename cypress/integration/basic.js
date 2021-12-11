describe('basic-test', () => {
  it('fills-data', () => {
    cy.visit('/#testy');
    cy.get('#form-input').type('toast{enter}');
    cy.get('#form-input').type('tents{enter}');
    cy.get('#form-input').type('tests{enter}');
    cy.screenshot();
    cy.get('#form-input').type('testy{enter}');
    cy.contains('won');
  });
});
