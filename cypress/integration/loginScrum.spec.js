import { authLogin } from "../page_objects/authLogin"

describe('Scrum Login', () => {
  let validEmail = 'petar.dragovic@gmail.com';
  let validPass = 'peksel2002';

  before('visit app', () => {
    cy.visit('/login')
    cy.url().should('contains', '/login');
  });

  it('Login with valid credentials', () => {

    authLogin.loginToScrum(validEmail, validPass);

    cy.url().should('include', '/my-organizations');

  });

}); 