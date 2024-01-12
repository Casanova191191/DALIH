/// <reference types = "cypress"/>

require('cypress-xpath')

describe('Prueba login DALIH', () =>{
    it.only("Login DALIH", () =>{
        cy.visit('https://dalih.app/login-dalih')
        cy.get('#email').type("casanova9812@gmail.com")
        cy.wait(1000)
        cy.get('#password').type("12345")         
        cy.wait(1000)
        cy.get('.ant-form-item-control-input-content > .ant-btn').click()            
        
        //CLIENTES
        //boton agregar nuevo cliente
        cy.get(span[contains('Agregar nuevo cliente')]).click()
        cy.wait(1000)
        //campo razón social 
        cy.get('@name').type('Variedades deportivas mil cositas')
        cy.wait(1000)

        //campo tipo de persona 
        cy.get('#ant-col ant-col-16 ant-form-item-control css-u3j178').click()
        cy.wait(1000)
        //boton tipo de persona natural
        cy.get('#ant-btn css-u3j178 ant-btn-default ant-btn-icon-only').click()
        cy.wait(1000)
        //Cerrar tipo de persona
        cy.get('#anticon anticon-close').click()
        cy.wait(1000)

        //Tipo de identificación
        cy.get('#ant-btn css-u3j178 ant-btn-primary ant-btn-block').click()
        cy.wait(1000)
        //boton tipo de identificación 
        cy.get('ant-btn css-u3j178 ant-btn-default ant-btn-icon-only').click()
        cy.wait(1000)
        //cerrar tipo de identificación
        cy.get('anticon anticon-close').click()
        cy.wait(1000)

        //Identificacón 
        cy.get('ant-input css-u3j178 css-u3j178').type('1088345678')
        cy.wait(1000)

        //Teléfono
        cy.get('ant-input css-u3j178 css-u3j178').type('3143455432')
        cy.wait(1000)

        //Correo electrónico
        cy.get('milcositaszx@gmail.com')
        cy.wait(1000)

        //Botón crear registro 
        cy.get('#ant-btn css-u3j178 ant-btn-primary ant-btn-block').click()  
        cy.wait(5000)
    })

//*************************************************************************************************************/

    it(" Otras funcionalidades de clientes  ", () =>{

        //Descargar datos
        cy.get('#ant-btn css-u3j178 ant-btn-primary ant-btn-background-ghost').click()
        cy.wait(1000)
        //Botón descargar
        cy.get('#ant-btn css-u3j178 ant-btn-primary').click()
        cy.wait(2000)

        //Imprimir
        cy.get('#ant-btn css-u3j178 ant-btn-circle ant-btn-primary ant-btn-icon-only ant-btn-background-ghost').click()
        cy.wait(3000)
        cy.get('action-button').click()

        //Editar datos de clientes
        cy.get('#ant-btn css-u3j178 ant-btn-circle ant-btn-primary ant-btn-icon-only').click()
        cy.wait(1000)
        //Editar campo razón social 
        cy.get('#ant-col ant-col-16 ant-form-item-control css-u3j178').clear().type("Tienda deportiva")
        cy.wait(1000)
        //Guardar cambios
        cy.get('#ant-btn css-u3j178 ant-btn-primary ant-btn-block ant-btn-dangerous').click()

     })
})



