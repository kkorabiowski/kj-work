describe('Navigation tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to certain page', () => {
    cy.get('[data-test="navigation"]').should('be.visible');
    cy.get('[data-test="navigation"]').get('a').click();
    cy.location('pathname').should('contain', '/');
  });

  it('should contain hamburger on mobile', () => {
    cy.viewport('iphone-8');
    cy.get('[data-test="mobile-menu"]').should('be.visible');
  });

  it('should change language', () => {
    cy.get('[data-test="language-select"]').should('be.visible');
  });
});
