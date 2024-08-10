class CartPage {
    assertCartItemIncremented() {
        cy.get('.fa-layers-counter').should('be.visible')
    }
    verifyProductInCart(productName) {
        cy.contains('.inventory_item_name', productName).should('exist');
    }
    verifyProductPrice(productPrice) {
        //It might be an issue as it is not displaying the currency in the cart
        let price = productPrice.replace('$', '')
        cy.get('.inventory_item_price').should('have.text', price)
    }

    proceedToCheckout() {
        cy.get('.btn_action').click();
    }
}

export default CartPage;
