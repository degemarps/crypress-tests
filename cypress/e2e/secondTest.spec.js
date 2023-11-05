/// <reference types="cypress" />

describe('Second test suite', () => {
  it('Date picker', () => {

    function selectDayFromCurrent(day) {
      let date = new Date()
      date.setDate(date.getDate() + day) // update data
      let futureDay = date.getDate() // get day
      let futureMonth = date.toLocaleDateString('en-US', {month: 'short'}) // get month
      let futureYear = date.getFullYear() // get year
      let dateToAssert = `${futureMonth} ${futureDay}, ${futureYear}`
      
      cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then( dateAtribute => {
        if(!dateAtribute.includes(futureMonth) || !dateAtribute.includes(futureYear)) { // verify if the date on web element is correct, if it have correct month and year
          cy.get('[data-name="chevron-right"]').click()
          selectDayFromCurrent(day) // call the function again if the current year and current month its not correct
        } else {
          cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
        }
      })
      
      return dateToAssert
    }

    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Datepicker').click()    

    cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
      cy.wrap(input).click()
      const dateToAssert = selectDayFromCurrent(200) // call the function to get the full date and make the assert on the input field
      cy.wrap(input).invoke('prop', 'value').should('contain', `${dateToAssert}`)
      cy.wrap(input).should('have.value', `${dateToAssert}`)
    })
  })
})