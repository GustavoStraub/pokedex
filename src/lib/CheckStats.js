export default function Checkstat(stat) {
  if (stat == 'hp') {
    return '#911010'
  } else if (stat == 'attack') {
    return '#b56e6e'
  } else if (stat == 'defense') {
    return '#59bd5f'
  } else if (stat == 'special-attack') {
    return '#fa65b5'
  } else if (stat == 'special-defense') {
    return '#96f1ff'
  } else if (stat == 'speed') {
    return '#79a3ff'
  } else {
    return '#cecece'
  }
}
