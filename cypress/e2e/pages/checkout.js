class CheckoutPage {
    fillCheckoutInfo({ firstName, lastName }, postalCode) {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
    }

    continueCheckout() {
        cy.get('.btn_primary').click();
    }

    verifyNameandPrice(productName, productPrice) {
        cy.get('.inventory_item_name').should('have.text', productName);
        cy.get('.inventory_item_price').should('have.text', productPrice);

        const price = parseFloat(productPrice.replace('$', ''));
        const tax = 0.08 * price;
        cy.log(tax);

        // Assert the tax, total and subtotal price
        cy.get('.summary_subtotal_label').then(($subtotal) => {
            const subtotal = parseFloat($subtotal.text().replace('Item total: $', ''));
            expect(subtotal).to.equal(price);
        });

        cy.get('.summary_tax_label').then(($tax) => {
            const taxes = parseFloat($tax.text().replace('Tax: $', ''));
            expect(tax).to.closeTo(taxes, 0.01);
        });

        cy.get('.summary_total_label').then(($total) => {
            const total = parseFloat($total.text().replace('Total: $', ''));
            expect(price + tax).to.closeTo(total, 0.01);
        });
    }

    verifyPaymentInformation() {
        cy.get('.summary_info > :nth-child(2)').should('have.text', 'SauceCard #31337');
    }

    verifyShippingInformation() {
        cy.get('.summary_info > :nth-child(4)').should('have.text', 'FREE PONY EXPRESS DELIVERY!');
    }

    finishCheckout() {
        cy.get('.cart_button').click();
    }
}

export default CheckoutPage;
