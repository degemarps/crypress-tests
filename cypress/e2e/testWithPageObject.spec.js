import { navigateTo } from "../support/navigationPages"

describe('Suite tests with page objects', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Visit pages', () => {
    navigateTo.formLayoutsPage()
    navigateTo.datepickerPage()
  })
})