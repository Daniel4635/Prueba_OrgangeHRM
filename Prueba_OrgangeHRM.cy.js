describe("Prueba OrgangeHRM", () => {

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")        
      });

    it("Test Login Usuario 1", () => {
        Cypress.on('uncaught:exception', (err, runnable) => {            
            return false;
          });
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
        cy.get('.oxd-userdropdown-tab').click();
        cy.contains('Logout').click();       
    })

    it("Test Login Usuario 2", () => {
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Usuario")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("usuario123")
        cy.get('.oxd-button').click()
        cy.get('.oxd-alert-content > .oxd-text').should("be.visible").contains("Invalid credentials")
        cy.log('Fallo: Credenciales Invalidas')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').contains("Usuario")
    })

    it("Test Filter Admin", () => {
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div.oxd-select-text-input').click({force: true})
        cy.contains('ESS').click({force: true})
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click({force: true})
        cy.contains('Enabled').click({force: true})
    })

    it("Test Edit Admit ", () => {
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div.oxd-select-text-input').click({force: true})
        cy.contains('ESS').click({force: true})
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click({force: true})
        cy.contains('Enabled').click({force: true})
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force: true})
        cy.get('.oxd-button--secondary').click()
        
    })

    it("Test CheckOut", () =>{
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
        cy.get(':nth-child(6) > .oxd-main-menu-item').click()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type("Daniel")
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type("Andres")
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type("Bello")
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type("2023-07-17{enter}{enter}")
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click({force: true})
        cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click({force: true})
        cy.get(':nth-child(2) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force: true})
        cy.get('.oxd-userdropdown-tab').click();
        cy.contains('Logout').click();  

    })
})