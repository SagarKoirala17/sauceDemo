class CheckoutPage {
    fillCheckoutInfo(firstName, lastName, postalCode) {
        cy.get('[data-test="firstName"]').type(firstName)
        cy.get('[data-test="lastName"]').type(lastName)
        cy.get('[data-test="lastName"]').type(postalCode)
    }

    continueCheckout() {
        cy.get('.cart_button').click();
    }

    finishCheckout() {
        cy.get('.cart_button').click();
    }
}

export default CheckoutPage;
