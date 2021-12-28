class AddBoard {
  get myOrg() {
    return cy.get('a[class="vs-c-list__btn vs-c-list__organisation"]');
  }

  get modalWindow() {
    return cy.get('.vs-c-modal__body');
  }

  get modalActionBtn() {
    return this.modalWindow.find('button').last();
  }

  get newBtn() {
    return cy.get('button').contains('Add new Board');
  }

  get inputName() {
    return cy.get('input[name="name"]');
  }

  get nextBtn() {
    return cy.get('button').last();
  }

  get boardTypeKanban() {
    return cy.get('span[name="type_kanban"]');
  }

  get boardTypeScrum() {
    return cy.get('span[name="type_scrum"]');
  }

  actionBtns() {
    cy.get('input[name="name"]').should('have.value', '');
    cy.get('button').last().should('have.attr', 'disabled');
    this.inputName.clear().type('Novi board 2');
    this.modalActionBtn.click();
    this.boardTypeKanban.click();
    this.modalActionBtn.click();
    this.modalActionBtn.click();
    this.modalActionBtn.click();
    this.modalActionBtn.click();
  }

}

export const addBoard = new AddBoard();