it('displays the navbar', () => {
  cy.visit('http://localhost:3000/');
  cy.get('[data-cy="navbar"]').should('be.visible');
});

it('displays the logo', () => {
  cy.visit('http://localhost:3000/');
  cy.get('[data-cy="navbar-logo"]').should('be.visible');
});

it('displays the login button', () => {
  cy.visit('http://localhost:3000/');
  cy.get('[data-cy="navbar-login"]').should('be.visible');
});
