**Overview**

This project automates an end-to-end scenario for an Sauce Demo website using Cypress and the Page Object Model (POM) design pattern.
The flow includes automating the login process, searching for a product, viewing product details, adding a product to the cart, and completing the checkout process.


**Project Structure**
*Page Objects*: Contains reusable components for each page in the e-commerce flow:

1. LoginPage.js
2. ProductSearchPage.js
3. CartPage.js
4. CheckoutPage.js
5. Thankyou.js

**Setups**
1. Install node version 18.0.0 directly from the website https://nodejs.org/en
2. Install npm 8.6.0 using the command **npm install -g npm@8.6.0** or you can use nvm to change the version.
3. Clone the git repositary 
  **git@github.com:SagarKoirala17/sauceDemo.git**
4. Move to the master branch 
5. Install the project dependency with the command **npm install**
6. Verify cypress with **npx cypress open**
7. Run **demo.cy.js**
