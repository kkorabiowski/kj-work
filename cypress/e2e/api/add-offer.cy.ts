describe('Add offer tests', () => {
  beforeEach(() => {
    cy.visit('/dashboard/dodaj-oferte');
  });

  it('should contain add offer form', () => {
    cy.intercept({ url: '/test' }, { body: [] }).as('test');
    cy.getByData('add-offer-form').as('addOfferForm');
    cy.get('addOfferForm').should('exist');
  });
});
