describe('Basic Test', () => {
  it('Visits the page', () => {
    cy.visit('/#testy');
    cy.get('#form-input').type('toast{enter}');
    cy.get('#form-input').type('tents{enter}');
    cy.get('#form-input').type('tests{enter}');
    cy.get('#form-input').type('testy{enter}');
    cy.contains('won');
  });
});
