export const letter = 'bici coche balón _playstation bici coche peluche'
export const letterWithSpaces = 'bici coche balón _playstation    bici coche peluche'

export const listGifts = (letter) => {
  if (!letter) throw new Error('Missing parameter: letter')
  if (typeof letter !== 'string') throw new Error('Parameter must be a string')

  const gifts = letter.split(' ')
  const giftsCount = {}

  gifts.forEach((gift) => {
    if (gift[0] === '_') return
    if (!gift[0]) return
    giftsCount[gift] ? giftsCount[gift]++ : (giftsCount[gift] = 1)
  })

  return giftsCount
}
