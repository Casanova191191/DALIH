/// <reference types = "cypress"/>

describe('Prueba login DALIH', () =>{
    it.only("Login DALIH", () =>{
        cy.visit('https://dalih.app/login-dalih')
        cy.get('#email').type("casanova9812@gmail.com")
        cy.wait(1000)
        cy.get('#password').type("12345")         
        cy.wait(1000)
        cy.get('.ant-form-item-control-input-content > .ant-btn').click()       
        cy.wait(5000)

        //***********************CERRAR SESIÓN *********************************

        cy.get('.ant-btn-primary').type("Cerrar sesión").type("{enter}")
   
    
  
        
    })
})
