import { expect, it } from '@jest/globals'

function sum(a, b){
    return a + b
}

it('Deve somar 2 valores', () =>{
    expect(sum(2,3)).toBe(5)
})

it('Deve somar 2 valores', () =>{
    expect(sum(2,4)).toBe(6)
    
})
