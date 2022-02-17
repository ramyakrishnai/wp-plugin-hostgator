// <reference types="Cypress" />

describe('Marketplace Page', function () {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=hostgator#/marketplace');
		cy.injectAxe();
		
	});

	it('Is Accessible', () => {
		cy.wait(500);
		cy.checkA11y('.hgwp-app-body');
	});



});
