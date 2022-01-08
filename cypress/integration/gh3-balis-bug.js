describe('GitHub issue 3 yellow square bug', () => {
  it('does not win', () => {
    cy.visit('/#basis');
    cy.get('#form-input').type('bingo{enter}');
    cy.get('#form-input').type('basic{enter}');
    cy.get('#form-input').type('balis{enter}');
    cy.screenshot('gh-3-balis-not-win');
    cy.contains('won').should('not.exist');
    cy.get('.latest-guess').should('not.have.text', 'balis');
    cy.get('.latest-guess').should('have.text', 'bais');
  });
  it('gives a blue E with "seeds" for "speed"', () => {
    cy.visit('/#speed');
    cy.get('#form-input').type('seeds{enter}');
    cy.contains('won').should('not.exist');
    cy.get('.latest-guess .not-guess').eq(1).should('have.text', 'e');
    cy.get('.latest-guess > *').eq(2).should('have.text', 'e').should('have.class', 'not-guess');
  });
});
