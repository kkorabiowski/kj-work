describe('Home page tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should contain hero title', () => {
    cy.getByData('hero-title').should('contain', 'Do sukcesu');
  });

  it('should display a hero image', () => {
    cy.getByData('hero-title').as('heroImage');
    cy.get('@heroImage').should('be.visible');
  });

  it('should contain offers', () => {
    cy.getByData('home-offers').as('homeOffers');
    cy.get('@homeOffers').should('be.visible');
    cy.get('@homeOffers').getByData('offer-item').should('have.length', 3);
  });

  it('should contain contact & contact form', () => {
    cy.getByData('contact').as('contact');
    cy.get('@contact').should('be.visible');
    cy.get('@contact').find('form').should('be.visible');
  });

  it('should contain a footer', () => {
    const now = new Date();
    cy.getByData('footer').as('footer');
    cy.get('@footer').should('be.visible');
    cy.get('@footer').find('a').should('be.visible');

    cy.clock(now);
    cy.getByData('footer-date').should('contain', now.getFullYear());
  });
});
