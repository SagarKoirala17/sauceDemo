import LoginPage from "./pages/login";
import ProductPage from "./pages/product";
import { credentials } from "./credentials";
import CartPage from "./pages/cartPage";
import { generateUniqueName } from './helpers/generateUniqueDetails'
import CheckoutPage from "./pages/checkout";
describe('E2E Test for Saucedemo', () => {
    const loginPage = new LoginPage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const { firstName, lastName } = generateUniqueName()

    before(() => {
        loginPage.visit();
        loginPage.fillUsername(credentials.username);
        loginPage.fillPassword(credentials.password);
        loginPage.submit();
    });

    it('Should Login and Purchase the Product', () => {
        productPage.fetchProductName().then((productName) => {
            productPage.addToCart();
            productPage.goToCart();
            cartPage.verifyProductInCart(productName);
            cartPage.proceedToCheckout();


        });
    });
});
