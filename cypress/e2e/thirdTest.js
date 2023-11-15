/// <reference types="cypress" />

describe('Third test suite', () => {
  it('Web tables', () => {
    cy.visit('/')
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()

    // get the row by text
    cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
      cy.wrap(tableRow).find('.nb-edit').click()
      cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('35')
      cy.wrap(tableRow).find('.nb-checkmark').click()
      cy.wrap(tableRow).find('td').eq(6).should('contain', '35')
    })

    //get the row by index
    cy.get('thead').find('.nb-plus').click()
    cy.get('thead').find('tr').eq(2).then( tableRow => {
      cy.wrap(tableRow).find('[placeholder="First Name"]').type('Harry')
      cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Potter')
      cy.wrap(tableRow).find('.nb-checkmark').click()
    })

    cy.get('tbody tr').first().find('td').then( tableColumns => {
      cy.wrap(tableColumns).eq(2).should('contain', 'Harry')
      cy.wrap(tableColumns).eq(3).should('contain', 'Potter')
    })

  })
})