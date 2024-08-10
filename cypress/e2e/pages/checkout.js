class CheckoutPage {
    fillCheckoutInfo({ firstName, lastName }, postalCode) {
        cy.get('[data-test="firstName"]').type(firstName)
        cy.get('[data-test="lastName"]').type(lastName)
        cy.get('[data-test="postalCode"]').type(postalCode)
    }

    continueCheckout() {
        cy.get('.btn_primary').click();
    }

    finishCheckout() {
        cy.get('.cart_button').click();
    }
}

export default CheckoutPage;
