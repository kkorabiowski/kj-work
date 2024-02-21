describe('Contact page', () => {
  beforeEach(() => {
    cy.visit('/kontakt');
  });

  it('should display a form', () => {
    cy.get('[data-test="contact-form"]').as('contactForm');
    cy.get('@contactForm').should('be.visible');
    cy.get('[data-test="contact-form"] button').should('be.visible');
  });

  it('should contains necessary inputs', () => {
    cy.get('[data-test="name"]').should('be.visible');
    cy.get('[data-test="email"]').should('be.visible');
    cy.get('[data-test="phone"]').should('be.visible');
    cy.get('[data-test="subject"]').should('be.visible');
    cy.get('[data-test="message"]').should('be.visible');
  });

  it('should validate a form', () => {
    cy.get('[data-test="name"]').as('inputName');
    cy.get('[data-test="email"]').as('inputEmail');
    cy.get('[data-test="phone"]').as('inputPhone');
    cy.get('[data-test="subject"]').as('inputSubject');
    cy.get('[data-test="message"]').as('inputMessage');

    cy.get('[data-test="contact-form"]').find('button').click();

    cy.get('@inputName').should('have.attr', 'aria-invalid', 'true');
    cy.get('@inputEmail').should('have.attr', 'aria-invalid', 'true');
    cy.get('@inputSubject').should('have.attr', 'aria-invalid', 'true');
    cy.get('@inputMessage').should('have.attr', 'aria-invalid', 'true');
  });

  it('should send a form', () => {
    cy.get('[data-test="name"]').as('inputName');
    cy.get('[data-test="email"]').as('inputEmail');
    cy.get('[data-test="phone"]').as('inputPhone');
    cy.get('[data-test="subject"]').as('inputSubject');
    cy.get('[data-test="message"]').as('inputMessage');

    cy.get('@inputName').type('test');
    cy.get('@inputEmail').type('email@test.com');
    cy.get('@inputPhone').type('777888999');
    cy.get('@inputSubject').type('Test subject example');
    cy.get('@inputMessage').type('Test test test test test test test');

    cy.get('[data-test="contact-form"]').find('button').click();
  });

  it('should display form message after sending', () => {
    cy.intercept('POST', '/api/contact/*', {
      success: true,
      statusCode: 200,
    }).as('contactMutation');

    cy.wait('@contactMutation').then(apiCall =>
      expect(apiCall.response?.statusCode).to.eq(200)
    );
  });
});
