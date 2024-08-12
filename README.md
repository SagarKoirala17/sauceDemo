**Overview**

This project automates an end-to-end scenario for an Sauce Demo website using Cypress and the Page Object Model (POM) design pattern.
The flow includes automating the login process, searching for a product, viewing product details, adding a product to the cart, and completing the checkout process.


**Project Structure**
*Page Objects*: Contains reusable components for each page in the e-commerce flow:

1. LoginPage.js
2. ProductSearchPage.js
3. ProductDetailsPage.js
4. CartPage.js
5. CheckoutPage.js
Test Scripts: Contains Cypress test scripts that utilize the page objects to perform various scenarios:
e2e_spec.js

