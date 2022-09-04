import { describe, expect, it } from 'vitest'
import { letter, letterWithSpaces, listGifts } from '../src/list-gifts'

describe('listGifts', () => {
  it('should be a function', () => {
    expect(typeof listGifts).toBe('function')
  })

  it('should throw if parameter is missing', () => {
    expect(() => listGifts()).toThrow()
  })

  it('should throw if parameter is not a string', () => {
    expect(() => listGifts(1)).toThrow()
    expect(() => listGifts({})).toThrow()
    expect(() => listGifts([])).toThrow()
  })

  it('should return an object', () => {
    expect(typeof listGifts('tdd')).toBe('object')
  })

  it('should delete word after "_" and return an object with the number of times each gift appears in the string', () => {
    expect(listGifts(letter)).toEqual({ bici: 2, coche: 2, balón: 1, peluche: 1 })
  })

  it('should delete empty spaces', () => {
    expect(listGifts(letterWithSpaces)).toEqual({ bici: 2, coche: 2, balón: 1, peluche: 1 })
  })
})
