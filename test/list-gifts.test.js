import { describe, expect, it } from 'vitest'
import { listGifts } from '../src/list-gifts'

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
})
