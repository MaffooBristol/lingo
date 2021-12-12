describe('GitHub issue 3 yellow square bug', () => {
  it('does not win', () => {
    cy.visit('/#basis');
    cy.get('#form-input').type('bingo{enter}');
    cy.get('#form-input').type('basic{enter}');
    cy.get('#form-input').type('balis{enter}');
    cy.screenshot('gh-3-balis-not-win');
    cy.contains('won').should('not.exist');
    cy.get('.latest-guess').should('have.text', 'balis');
  });
});
