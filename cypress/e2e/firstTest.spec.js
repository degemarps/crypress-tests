/// <reference types="cypress" />

describe('First test suite', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
  })

  it('First test', () => {
    cy.get('[data-cy="imputEmail1"]')
  })

  it.only('Second test', () => {
    cy.contains('[status="primary"]', 'Sign in')
    cy.get('nav.fixed')
      .find('g[data-name="menu-2"]')
      .click()
  })
})