describe('Assignment of Lambdatest certification', () => {
  it('Test Scenario 1 :', () => {

    // This is to remove unwanted exception from application and not having issues with code
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    })

    // Visite the Drag & Drop Sliders page
      cy.visit('https://www.lambdatest.com/selenium-playground/').then((text) => {
        cy.log("Visited the LambdaTest Playgroup website")
      })

      cy.contains('a', 'Drag & Drop Sliders').click().then(() => {
      cy.log('Clicked on "Drag and Drop"')
      })
    
    // Perform the slider to value : 895
      cy.get('[id="rangeSuccess"]').should('have.text', '15');
      cy.get('div[id="slider3"] input[type="range"]').as('sliderInput');
      cy.get('@sliderInput').invoke('val', 95).trigger('input')
      cy.get('@sliderInput').trigger('change')

    // Validate output value
      cy.get('#rangeSuccess').invoke('val', 95).should('have.text', '95');
      cy.wait(2000)
      })

  it('Test Scenario 2 : ', () => {

    // This is to remove unwanted exception from application and not having issues with code
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    })

    // Visite the Drag & Drop Sliders page and view the port in samsung note
      cy.visit('https://www.lambdatest.com/selenium-playground/').then((text) => {
        cy.log("Visited the LambdaTest Playgroup website");
        })

      cy.viewport("samsung-note9");

      cy.contains('a', 'Input Form Submit').click().then(() => {
        cy.log("Clicked on Input Form Submit");
        })
      
      // Fill the all fields and print the log
      cy.get('[id="name"]').type("Lambdauser").then(() => {
        cy.log("UserName has been provided");
      })

      cy.get('[id="inputEmail4"]').first().type('testuser@gmail.com').then(() => {
        cy.log("Email Address has been provided");
      })

      cy.get('[type="password"]').type("Pas@12345").then(() => {
        cy.log("Password has been provided");
      })

      cy.get('[placeholder="Company"]').type('HCLTECH').then(() => {
        cy.log("Company name has been provided");
      })

      cy.get('[id="websitename"]').type('Test').then(() => {
        cy.log('Webiste name has been entered');
      })

      cy.get('[name="country"]').select('India').then(() => {
        cy.log("Country has been selected");
      })

      cy.get('[placeholder="City"]').type('Bangalore').then(() => {
        cy.log("City has been entered");
      })

      cy.get('[placeholder="Address 1"]').type('LB road, Main circle').then(() => {
        cy.log("Address 1 has been provided");
      })

      cy.get('[placeholder="Address 2"]').type('Bangalore').then(() => {
        cy.log("Address 2 has been provided");
      })

      cy.get('[placeholder="State"]').type('Karnataka').then(() => {
        cy.log("State has been provided");
      })

      cy.get('[placeholder="Zip code"]').type('583001').then(() => {
        cy.log("postal code has been entered");
      })

      cy.get('.bg-lambda-900').first().click().then((SubmitEvent) => {
        cy.log("Details has been submitted");
      })

      // Verification of success message
      cy.get('.success-msg').should('have.text', 'Thanks for contacting us, we will get back to you shortly.').and('be.visible').then(() => {
        cy.log("Success message should display");
      })

      Cypress.session.clearAllSavedSessions();
  })
});
