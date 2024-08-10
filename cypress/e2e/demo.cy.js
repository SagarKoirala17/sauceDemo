import LoginPage from "./pages/login";
import ProductPage from "./pages/product";
import { credentials } from "./credentials";
import CartPage from "./pages/cartPage";

describe('E2E Test for Saucedemo', () => {
    const loginPage = new LoginPage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();

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
