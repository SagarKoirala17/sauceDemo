class LoginPage {
    visit() {
        cy.visit('v1/index.html');
    }

    fillUsername(username) {
        cy.get('[data-test="username"]').type(username);
    }

    fillPassword(password) {
        cy.get('[data-test="password"]').type(password);
    }

    submit() {
        cy.get('#login-button').click();
    }
}

export default LoginPage;
