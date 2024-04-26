describe('Busqueda de cursos sobre la web de la Escuela de Administracion Publica', () => {

  const codigo_curso_testing = "2024.00.B.126.01"

  beforeEach(() => {
    cy.visit('http://eap.juntaex.es/formacion')
  })

  it('Busca nuestro curso por el codigo y verifica que esta realmente en el listado de cursos', () => {
    //campo codigo de curso
    cy.get('#1_08795744-c2dc-4a68-8252-4e21c4c4c774').type(codigo_curso_testing)
    cy.get('button[type="submit"]').click()
    cy.contains('SEMINARIOS ONLINE. TESTING')
  })

  it('Verifica que nuestro seminario es elegible', () => {
    //campo nombre curso
    cy.get('#0__itemname').type("seminario")
    //campo elegible
    cy.get('#elements598af07f-95bf-4957-a26f-0dd15d58493f').select('SI')
    
    cy.get('button[type="submit"]').click()
    cy.contains('SEMINARIOS ONLINE. TESTING')
  })

})
