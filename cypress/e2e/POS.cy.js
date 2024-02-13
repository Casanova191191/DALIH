/// <reference types = "cypress"/>


describe('Prueba login DALIH', () =>{
    it("Prueba POS crear cuenta desde mesa", () =>{
        cy.visit('https://dalih.app/login-dalih')
        cy.get('#email').type("casanova9812@gmail.com")
        cy.wait(1000)
        cy.get('#password').type("12345")         
        cy.wait(1000)
        cy.get('.ant-form-item-control-input-content > .ant-btn').click()       
        cy.wait(3000)   

        //Seleccion del módulo POS  desde el menú
        cy.get(':nth-child(3) > .sc-f24fa579-0 > .sc-f24fa579-1').click({ force: true })    
        cy.wait(5000)  

        cy.get(':nth-child(3) > .sc-f24fa579-0 > .sc-f24fa579-1').click({ force: true })
        cy.visit('https://dalih.app/management/pos-sale/65a53d43d1d4cb847d8bb2d0/65b950ad1de5ced8922d56af')
        cy.wait(8000)

        cy.window().then((win) => {
          // Accede al localStorage y obtén los datos que necesitas
          const localStorageData = win.localStorage.getItem('user'); // Reemplaza 'tu_clave' con la clave específica en localStorage
        
          // Imprime los datos en la consola de Cypress
          //cy.log('Datos en localStorage:', localStorageData);
        });


      //Seleccion por mesa
      cy.get('.flex-wrap > :nth-child(1)').click({ force: true })
      cy.wait(3000)  

      //Seleccion por producto
      cy.get("#rc-tabs-0-panel-1 > section > div > article:nth-child(1)").click({ force: true })
      cy.wait(3000)  
      cy.get('#rc-tabs-0-panel-2 > .flex.w-full > .flex-wrap > :nth-child(1)').click({ force: true })
      cy.wait(3000)  

      //Confirmar 
      cy.get('.justify-end > :nth-child(1)').click({ force: true })
      cy.wait(3000)

            //Selecciona crear cuenta
            cy.get('.bg-green-50').click({ force: true })
            cy.wait(3000)
      
            //Selecciona producto 
            cy.get('#rc-tabs-0-panel-2 > .flex.w-full > .flex-wrap > :nth-child(2)').click({ force: true })
            cy.wait(3000)
      
            //Agregar producto 
            cy.get('.justify-end > :nth-child(1)').click({ force: true })
            cy.wait(3000)
            cy.get('#rc-tabs-0-panel-2 > .flex.w-full > .flex-wrap > :nth-child(2)').click({ force: true })
            cy.wait(3000)

            //Pagar cuenta
            cy.get('.justify-end > .ant-btn-primary').click({ force: true })
            cy.wait(3000)

            //Seleccionar productos 
            cy.get('tbody > :nth-child(1) > .px-4 > .ant-btn').click({ force: true })
            cy.wait(3000)
            cy.get(':nth-child(2) > .px-4 > .ant-btn').click({ force: true })
            cy.wait(3000)

            //Valor servicio 
            cy.get(':nth-child(2) > .ant-segmented-item-label').click({ force: true })
            cy.wait(3000)

            //Facturar 
            cy.get('.bg-zinc-50 > .flex-col > :nth-child(4)').click({ force: true })
            cy.wait(3000)


            //Con tarjeta 
            cy.get('body > div:nth-child(5) > div > ul > li:nth-child(2)').click({ force: true })
            cy.wait(3000)

            //Pago efectivo 
           // cy.get('body > div:nth-child(5) > div > ul > li.ant-dropdown-menu-item.ant-dropdown-menu-item-active.ant-dropdown-menu-item-only-child').click({ force: true })

           //Seleccionar cliente
          cy.get(':nth-child(2) > :nth-child(4) > .ant-btn').click({ force: true })
          cy.wait(2000)

          //Pagar 
          cy.get('#reference').type('234v3553')
          cy.wait(1000)
          cy.get('#card').type('2347')
          cy.wait(1000)

          //Confirmar transacción 
          cy.get('.ant-form > :nth-child(3) > .ant-btn-primary').click()
            
    })


    })