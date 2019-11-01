/// <reference types="cypress" />
import * as todoPage from '../page-objects/todo-page'

describe('visual validation', () =>{
    before(() => todoPage.navigate())
    beforeEach(() => cy.eyesOpen({appName: 'TAU TodoMVC', batchName:'TAU TodoMVC Hey!'}))
    afterEach(()=> cy.eyesClose())

    it('should look good', () => {
        cy.eyesCheckWindows('empty todo list')
        todoPage.addTodo('Clean room')
        todoPage.addTodo('Learn JS')

        cy.eyesCheckWindows('two todos')

        todoPage.toggleTodo(0)

        cy.eyesCheckWindows('mark as completed')
        
    })
})