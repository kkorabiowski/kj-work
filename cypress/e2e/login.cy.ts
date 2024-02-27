describe('Login tests', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should contain a login form', () => {
    cy.getByData('login-form').should('exist');
  });

  it('should fill and submit a form', () => {
    cy.getByData('login-form').should('exist');
    cy.getByData('username').type('jankowalski').should('exist');
    cy.getByData('password').type('password').should('exist');
    cy.getByData('login-submit').should('exist').as('loginSubmit');
    cy.get('@loginSubmit').click();
  });

  it('should validate a form', () => {
    cy.getByData('login-submit').click();
    cy.get('[aria-invalid="true"]').should('exist');
  });

  it('should display a toast after wrong data or error', () => {
    cy.getByData('login-form').should('exist');
    cy.getByData('username').type('jankowalski').should('exist');
    cy.getByData('password').type('password').should('exist');
    cy.getByData('login-submit').should('exist').as('loginSubmit');
    cy.get('@loginSubmit').click();

    cy.contains('Nieprawidłowe dane').should('exist');
    cy.contains('Wpisz dane ponownie').should('exist');
  });
});
