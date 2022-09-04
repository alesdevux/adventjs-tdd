export const listGifts = (letter) => {
  if (!letter) throw new Error('Missing parameter: letter')
  if (typeof letter !== 'string') throw new Error('Parameter must be a string')
}
