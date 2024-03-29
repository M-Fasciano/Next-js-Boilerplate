describe('Navigation', () => {
  describe('Static pages', () => {
    it('should navigate to the about page', () => {
      // Start from the index page
      cy.visit('/');

      // The index page should contain an h1
      cy.findByRole('heading');

      // Find a link containing "About" text and click it
      cy.get('header').find('li a').eq(2).click();

      // The new url should include "/about"
      cy.url().should('include', '/about');

      // The new page should contain two "lorem ipsum" paragraphs
      cy.findByRole('heading');
    });

    it('should take screenshot of the homepage', () => {
      cy.visit('/');

      // Wait until the page is displayed
      cy.findByRole('heading');

      cy.percySnapshot('Homepage');
    });

    it('should take screenshot of the About page', () => {
      cy.visit('/about');

      // Wait until the page is displayed
      cy.get('header').find('li a').eq(2);

      cy.percySnapshot('About');
    });
  });
});
