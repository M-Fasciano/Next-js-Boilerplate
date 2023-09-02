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

    it('should render SEO metadata on Trainers page', () => {
      cy.visit('/trainers');

      // The Trainers page should have a page title
      cy.title().should('not.be.empty');

      // The Trainers page should also contain a meta description for SEO
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

    it('should render SEO metadata on Help & Support page', () => {
      cy.visit('/help-and-support');

      // The Trainers page should have a page title
      cy.title().should('not.be.empty');

      // The Trainers page should also contain a meta description for SEO
      cy.get('head meta[name="description"]')
        .invoke('attr', 'content')
        .should('not.be.empty');
    });

    it('should render SEO metadata on Cookies page', () => {
      cy.visit('/cookies');

      // The Cookies page should have a page title
      cy.title().should('not.be.empty');

      // The Cookies page should also contain a meta description for SEO
      cy.get('head meta[name="description"]')
        .invoke('attr', 'content')
        .should('not.be.empty');
    });

    it('should render SEO metadata on Terms of use page', () => {
      cy.visit('/terms-of-use');

      // The Terms of use page should have a page title
      cy.title().should('not.be.empty');

      // The Terms of use page should also contain a meta description for SEO
      cy.get('head meta[name="description"]')
        .invoke('attr', 'content')
        .should('not.be.empty');
    });

    it('should render SEO metadata on Privacy policy page', () => {
      cy.visit('/privacy-policy');

      // The Privacy policy page should have a page title
      cy.title().should('not.be.empty');

      // The Privacy policy page should also contain a meta description for SEO
      cy.get('head meta[name="description"]')
        .invoke('attr', 'content')
        .should('not.be.empty');
    });

    it('should render SEO metadata on Site map page', () => {
      cy.visit('/site-map');

      // The Site map page should have a page title
      cy.title().should('not.be.empty');

      // The Site map page should also contain a meta description for SEO
      cy.get('head meta[name="description"]')
        .invoke('attr', 'content')
        .should('not.be.empty');
    });

    it('should render SEO metadata on Log in page', () => {
      cy.visit('/login');

      // The Log in page should have a page title
      cy.title().should('not.be.empty');

      // The Log in page should also contain a meta description for SEO
      cy.get('head meta[name="description"]')
        .invoke('attr', 'content')
        .should('not.be.empty');
    });

    it('should render SEO metadata on Sign up page', () => {
      cy.visit('/signup');

      // The Sign up page should have a page title
      cy.title().should('not.be.empty');

      // The Sign up page should also contain a meta description for SEO
      cy.get('head meta[name="description"]')
        .invoke('attr', 'content')
        .should('not.be.empty');
    });
  });
});
