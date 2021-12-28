import { addBoard } from "../page_objects/createBoard";
import { authLogin } from "../page_objects/authLogin";

describe('My organization page', () => {
  let validEmail = 'petar.dragovic@gmail.com';
  let validPass = 'peksel2002';

  before('visit app', () => {
    cy.visit('/login')
    cy.url().should('contains', '/login');


  });

  it('Login with valid credentials', () => {
    cy.intercept({
      method: "POST",
      url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login"
    }).as('login')

    authLogin.loginToScrum(validEmail, validPass);
    cy.wait('@login').then((interception) => {
      console.log(interception);
      expect(interception.response.statusCode).eq(200);
    })

    cy.url().should('include', '/my-organizations');
  });

  it('Create new board', () => {
    addBoard.myOrg.click();
    addBoard.modalActionBtn.click();
    addBoard.newBtn.click();

    addBoard.actionBtns();


  });

}); 