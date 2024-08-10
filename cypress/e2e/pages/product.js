class ProductPage {
    fetchProductName() {
        return cy.get('.inventory_item_name').first().invoke('text');
    }

    addToCart() {
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
    }

    goToCart() {
        cy.get('.fa-layers-counter').click();
    }
}

export default ProductPage;
