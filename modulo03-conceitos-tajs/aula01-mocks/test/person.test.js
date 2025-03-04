import { describe, it, expect, jest } from '@jest/globals'
import Person from '../src/person'

describe('#Person Suite', () => {
    describe('#validate', () => {
        it('sould throw if the name is not present', () => {
            const mockInvalidPerson = {
                name: '',
                cpf: '123.456.789-00'
            }

            expect(
                () => Person.validate(mockInvalidPerson)
            ).toThrowError(new Error('name is required'))

        })
        it('sould throw if the cpf is not present', () => {
            const mockInvalidPerson = {
                name: 'Zezzin',
                cpf: ''
            }

            expect(
                () => Person.validate(mockInvalidPerson)
            ).toThrowError(new Error('cpf is required'))

        })
        it('sould not throw person is valid', () => {
            const mockInvalidPerson = {
                name: 'Zezzin',
                cpf: '123.456.789-00'
            }

            expect(
                () => Person.validate(mockInvalidPerson)
            )
            .not
            .toThrowError()

        })
    })

    describe('#format', () => {
        it('should format the person name and CPF', () => {
            const mockPerson = {
                name: 'Xuxa da Silva',
                cpf: '000.133.456-13'
            }

            const formattedPerson = Person.format(mockPerson)

            const expectedPerson = {
                name: 'Xuxa',
                cpf: '00013345613',
                lastName: 'da Silva'
            }

            expect(formattedPerson).toStrictEqual(expectedPerson)


        })
    })

    describe('#save', () => {
        it('should save person with success', () => {

        })
    })

    describe('#process', () => {
        it('should process a valid person', () => {
            /**
             * Não testar o que já foi testado
             * O método abaixo faz mais sentido para quando se tem interações extermas como:
             * chamadas de API, banco de dados, etc
             * Mocks são simulações de funções ao testar o seu comportamento 
             * AAA
             */

            const mockPerson = {
                name: 'Zezin da Silva',
                cpf: '12345678900'
            }

            //Arrange
            jest.spyOn(
                Person,
                Person.validate.name
            ).mockReturnValue()     
            
            jest.spyOn(
                Person,
                Person.format.name
            ).mockReturnValue({
                cpf: '12345678',
                name: 'Zezin',
                lastName: 'da Silva'
            })
            //Act
            const result = Person.process(mockPerson)
            //Assert
            const expected = 'ok'
            
            expect(result).toStrictEqual(expected)
        })
    })

})