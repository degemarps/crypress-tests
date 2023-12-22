import { onFormLayoutsPage } from "../support/page Objects/formLayoutsPage"
import { navigateTo } from "../support/page Objects/navigationPages"

describe('Suite tests with page objects', () => {
  beforeEach(() => {
    cy.openHomePage()
  })

  it('Visit pages', () => {
    navigateTo.formLayoutsPage()
    navigateTo.datepickerPage()
  })

  it('should submit inline and basic form and select tomorrow date in the calendar', () => {
    navigateTo.formLayoutsPage()
    onFormLayoutsPage.submitInlineFormWithNameAndEmail('degemar', 'test@test.com')
    onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'test123')
  })
})