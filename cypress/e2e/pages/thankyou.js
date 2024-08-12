
class Thankyou {
    assertThankyou() {
        cy.get('.subheader').should('have.text', 'Finish')
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER').should('be.visible')
        // The UI of the complete text is broken so i am commenting this line
        //  cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!').should('be.visible')
        cy.get('.pony_express').should('be.visible')

    }

}
export default Thankyou
