function selectGroupMenu(groupName) {
  cy.contains('a', groupName).then(menu => {
    cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
      if(attr.includes('left')){
        cy.wrap(menu).click()
      }
    })
  })
}


export class navigatePages{
  formLayoutsPage(){
    selectGroupMenu('Forms')
    cy.contains('Form Layouts').click()
  }
  datepickerPage(){
    selectGroupMenu('Forms')
    cy.contains('Datepicker').click()
  }
}

export const navigateTo = new navigatePages()