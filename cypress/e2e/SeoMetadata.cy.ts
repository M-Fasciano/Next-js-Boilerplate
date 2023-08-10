describe('Seo metadata', () => {
  describe('Verify SEO Metadata', () => {
    it('should render SEO metadata on Index page', () => {
      cy.visit('/');

      // The Index page should have a page title
      cy.title().should('not.be.empty');

      // The Index page should also contain a meta description for SEO
      cy.get('head meta[name="description"]')
        .invoke('attr', 'content')
        .should('not.be.empty');
    });

    it('should render SEO metadata on Find a Trainer page', () => {
      cy.visit('/find-a-trainer');

      // The Find a Trainer page should have a page title
      cy.title().should('not.be.empty');

      // The Find a Trainer page should also contain a meta description for SEO
      cy.get('head meta[name="description"]')
        .invoke('attr', 'content')
        .should('not.be.empty');
    });

    it('should render SEO metadata on About page', () => {
      cy.visit('/about');

      // The About page should have a page title
      cy.title().should('not.be.empty');

      // The About page should also contain a meta description for SEO
      cy.get('head meta[name="description"]')
        .invoke('attr', 'content')
        .should('not.be.empty');
    });
  });
});
