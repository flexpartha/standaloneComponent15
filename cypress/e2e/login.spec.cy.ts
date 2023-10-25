describe('login', () => {
  it('should not login if the form is invalid', () => {
    cy.visit('/');
    cy.url().should('includes','login');
    cy.get('[data-test=username-input]').type('admin');
    cy.get('button').click();
    //cy.get('alert()').type('enter username and password');
    cy.url().should('not.include','admin');
  });

  it('should  go admin page if the form is valid with admin username and admin password', () => {
    cy.login('admin','admin');
    cy.url().should('include','admin');
  });

  it('should  go sidebar page if the form is valid with sidebar username and sidebar password', () => {
    cy.login('sidebar','sidebar');
    cy.url().should('include','sidebar');
  })
})
