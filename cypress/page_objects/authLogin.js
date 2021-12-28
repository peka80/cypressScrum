class AuthLogin {
  get inputEmail() {
    return cy.get('input[type="email"]')
  }

  get inputPass() {
    return cy.get('input[type="password"]')
  }

  get loginBtn() {
    return cy.get('button[type="submit"]').eq(0)
  }

  loginToScrum(email, password) {
    this.inputEmail.clear().type(email);
    this.inputPass.clear().type(password);
    this.loginBtn.click()
  }
}

export const authLogin = new AuthLogin();