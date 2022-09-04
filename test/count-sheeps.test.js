import { describe, expect, it } from 'vitest'
import { countSheeps } from '../src/count-sheeps'

describe('countSheeps', () => {
  it('should be a function', () => {
    expect(typeof countSheeps).toBe('function')
  })

  it('should throw if first parameter is missing', () => {
    expect(() => countSheeps()).toThrow()
  })
})
