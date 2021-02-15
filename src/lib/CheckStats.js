export default function Checkstat(stat) {
  switch (stat) {
    case 'hp':
      return '#911010'
    case 'attack':
      return '#b56e6e'
    case 'defense':
      return '#59bd5f'
    case 'special-attack':
      return '#fa65b5'
    case 'special-defense':
      return '#96f1ff'
    case 'speed':
      return '#79a3ff'
    default:
      return '#cecece'
  }
}
