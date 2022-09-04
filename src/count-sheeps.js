export const sheeps = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]

export const countSheeps = (sheeps) => {
  if (!sheeps) throw new Error('Missing sheeps')
  if (!Array.isArray(sheeps)) throw new Error('Sheeps must be an array')

  const sheepsFiltered = sheeps.filter(sheep => sheep.color === 'rojo')

  return sheepsFiltered
}
