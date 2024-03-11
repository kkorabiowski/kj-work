describe('Test login API endpoint', () => {
  it('should return a 401 status code after providing invalid credentials', () => {
    cy.intercept('/api/auth/callback/credentials').as('auth');
    cy.visit('/login');
    cy.login('jankowalski@przyklad.com', '123456');
    cy.wait('@auth').its('response.statusCode').should('eq', 401);
  });

  it('should return a 200 status code after correct credentials', () => {
    cy.intercept('/api/auth/callback/credentials').as('auth');
    cy.visit('/login'), cy.login('hj2023', 'hj2023!123');
    cy.wait('@auth').its('response.statusCode').should('eq', 200);
    cy.location('pathname').should('eq', 'dashborad');
  });
});
