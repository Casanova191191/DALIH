/// <reference types = "cypress"/>

describe('Prueba login DALIH', () =>{
    it.only("Login DALIH", () =>{

        //LOGIN
        cy.visit('https://dalih.app/login-dalih')
        cy.get('#email').type("casanova9812@gmail.com")
        cy.wait(1000)
        cy.get('#password').type("12345")         
        cy.wait(2000)
        cy.get('.ant-form-item-control-input-content > .ant-btn').click()    
        
        //CLIENTES
        
    })
})
