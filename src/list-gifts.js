export const letter = 'bici coche balón _playstation bici coche peluche'
// export const letter = 'bici coche balón _playstation    bici coche peluche'

export const listGifts = (letter) => {
  if (!letter) throw new Error('Missing parameter: letter')
  if (typeof letter !== 'string') throw new Error('Parameter must be a string')

  const gifts = letter.split(' ')
  const giftsCount = {}

  gifts.forEach((gift) => {
    giftsCount[gift] ? giftsCount[gift]++ : (giftsCount[gift] = 1)
  })

  return giftsCount
}
