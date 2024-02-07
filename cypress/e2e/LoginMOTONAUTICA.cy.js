/// <reference types = "cypress"/>

describe('Prueba login DALIH', () =>{
    it.only("Login DALIH", () =>{
        cy.visit('https://motonautica-web.herokuapp.com/')
        cy.wait(1000)
        cy.get('#basic_username').type("dianacasanova02@gmail.com")
        cy.wait(1000)
        cy.get('#basic_password').type("1234")         
        cy.wait(1000)
        cy.get('.ant-btn').click()       
        cy.wait(1000)

        // //***********************CERRAR SESIÓN *********************************

        // cy.get('.ant-btn-primary').type("Cerrar sesión").type("{enter}")
   
    
  
        
    })
})
