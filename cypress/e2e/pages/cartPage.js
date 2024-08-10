class CartPage {
    assertCartItemIncremented() {
        cy.get('.fa-layers-counter').should('be.visible')
    }
    verifyProductInCart(productName) {
        cy.contains('.inventory_item_name', productName).should('exist');
    }

    proceedToCheckout() {
        cy.get('.btn_action').click();
    }
}

export default CartPage;
