import LoginPage from "./pages/login";
import ProductPage from "./pages/product";
import { credentials } from "./credentials";
import CartPage from "./pages/cartPage";
import { generateUniqueName } from './helpers/generateUniqueDetails'
import CheckoutPage from "./pages/checkout";
import { generateUniquePostalCode } from "./helpers/generateUniquePostalCode";

describe('E2E Test for Saucedemo', () => {
    const loginPage = new LoginPage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage()
    before(() => {
        loginPage.visit();
        loginPage.fillUsername(credentials.username);
        loginPage.fillPassword(credentials.password);
        loginPage.submit();
    });

    it('Should Login and Purchase the Product', () => {
        productPage.fetchProductName().then((productName) => {
            productPage.fetchProductPrice().then((productPrice) => {
                cy.log(productPrice)
                productPage.addToCart();
                productPage.goToCart();
                cartPage.verifyProductInCart(productName);
                cartPage.verifyProductPrice(productPrice)
                cartPage.proceedToCheckout();
                const { firstName, lastName } = generateUniqueName()
                const postalCode = generateUniquePostalCode()
                checkoutPage.fillCheckoutInfo({ firstName, lastName }, postalCode)
                checkoutPage.continueCheckout()


            });
        });
    });
});
