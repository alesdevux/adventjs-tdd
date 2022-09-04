import { describe, expect, it } from 'vitest'
import { countSheeps, sheeps } from '../src/count-sheeps'

describe('countSheeps', () => {
  it('should be a function', () => {
    expect(typeof countSheeps).toBe('function')
  })

  it('should throw if parameter is missing', () => {
    expect(() => countSheeps()).toThrow()
  })

  it('should throw if parameter is not an array', () => {
    expect(() => countSheeps('asf')).toThrow()
    expect(() => countSheeps(1)).toThrow()
    expect(() => countSheeps({})).toThrow()
  })

  it('should return an array', () => {
    expect(Array.isArray(countSheeps(sheeps))).toBe(true)
  })

  it('should return only sheeps with red color', () => {
    const sheepsWithRedColor = countSheeps(sheeps)
    expect(sheepsWithRedColor.every(s => s.color === 'rojo')).toBe(true)
  })

  it('should return only sheeps with name contain "a" and "n" (lowercase or uppercase)', () => {
    const sheepsWithAN = countSheeps(sheeps)
    expect(sheepsWithAN.every(s => s.name.toLowerCase().includes('a') && s.name.toLowerCase().includes('n'))).toBe(true)
  })

  it('should return only sheeps with red color and name contain "a" and "n" (lowercase or uppercase)', () => {
    const sheepsWithRedColorAndAN = countSheeps(sheeps)
    expect(sheepsWithRedColorAndAN.every(s => s.color === 'rojo' && s.name.toLowerCase().includes('a') && s.name.toLowerCase().includes('n'))).toBe(true)
  })
})
