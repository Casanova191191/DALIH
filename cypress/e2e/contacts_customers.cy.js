/// <reference types = "cypress"/>


describe('Prueba login DALIH', () =>{
    it("Login DALIH", () =>{
        cy.visit('https://dalih.app/login-dalih')
        cy.get('#email').type("casanova9812@gmail.com")
        cy.wait(1000)
        cy.get('#password').type("12345")         
        cy.wait(1000)
        cy.get('.ant-form-item-control-input-content > .ant-btn').click()       
        cy.wait(3000)           
        
        //Seleccion del clinetes desde el menú
        cy.get(':nth-child(1) > .sc-f24fa579-0 > :nth-child(1)').click()
        cy.wait(3000)
       
        //CLIENTES
        //boton agregar nuevo cliente
        cy.get('.ant-col-xs-6 > .ant-btn').click()
        cy.wait(2000)
        //campo razón social 
        cy.get('#name').type('Variedades deportivas')
        cy.wait(1000)

        //campo tipo de persona 
        cy.get(':nth-child(2) > .ant-row > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-ribbon-wrapper > .ant-btn').click()
        cy.wait(1000)
        //boton tipo de persona natural
        cy.get(':nth-child(2) > .ant-row > :nth-child(3) > .ant-btn').click()
        cy.wait(1000)
        //Cerrar tipo de persona
        cy.get('.ant-drawer-close').click()
        cy.wait(1000)

        //Tipo de identificación
        cy.get(':nth-child(3) > .ant-row > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-ribbon-wrapper > .ant-btn').click()
        cy.wait(2000)
        //boton tipo de identificación 
        cy.get(':nth-child(31) > .ant-drawer > .ant-drawer-content-wrapper > .ant-drawer-content > .ant-drawer-wrapper-body > .ant-drawer-body > :nth-child(1) > [style="background: rgb(226, 226, 226);"] > .ant-row > :nth-child(3) > .ant-btn').click()
        cy.wait(1000)
        //cerrar tipo de identificación
        cy.get('anticon anticon-close').click()
        cy.wait(1000)

        //Identificacón 
        cy.get('#id_number').type('1088345678')
        cy.wait(1000)

        //Teléfono
        cy.get('#phone').type('3143455432')
        cy.wait(1000)

        //Correo electrónico
        cy.get('#email').type('milcositaszx@gmail.com')
        cy.wait(1000)

        //Botón crear registro 
        cy.get('.ant-row-center > :nth-child(2) > .ant-btn').click()  
        cy.wait(5000)
    })

//*************************************************************************************************************/

    it.only(" Otras funcionalidades de clientes  ", () =>{
        cy.visit('https://dalih.app/login-dalih')
        cy.get('#email').type("casanova9812@gmail.com")
        cy.wait(1000)
        cy.get('#password').type("12345")         
        cy.wait(1000)
        cy.get('.ant-form-item-control-input-content > .ant-btn').click()       
        cy.wait(3000)           
        
        //Seleccion del clinetes desde el menú
        cy.get(':nth-child(1) > .sc-f24fa579-0 > :nth-child(1)').click()
        cy.wait(3000)

        //Descargar datos
        cy.get('[style="padding: 14px;"] > .ant-btn').click()
        cy.wait(1000)
        //Botón descargar
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        cy.wait(4000)

        //Imprimir
        /*cy.get('[data-row-key="6595ce37f98d8a7954f9f420"] > :nth-child(1) > .sc-9b4d550b-0 > .ant-btn-background-ghost').click()
        cy.wait(3000)
        cy.get('action-button').click()*/

        //Editar datos de clientes
        cy.get('[data-row-key="6595ce37f98d8a7954f9f420"] > :nth-child(1) > .sc-9b4d550b-0 > :nth-child(1)').click()
        cy.wait(1000)
        //Editar campo razón social 
        cy.get('#name').clear().type("Tienda deportiva")
        cy.wait(1000)
        //Guardar cambios
        cy.get('.ant-row-center > :nth-child(2) > .ant-btn').click()

     })
})



