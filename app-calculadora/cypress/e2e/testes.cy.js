import './commands'

describe ("O google deve ", () => {
    it("Exibir a noticia do lula", () => {

        cy.visit("https://www.google.com/")
        // cy.contains("Lula diz que conversou com Zelensky sobre a paz e importância do diálogo")
    })

})