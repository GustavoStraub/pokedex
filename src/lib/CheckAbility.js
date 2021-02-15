export default function CheckAbility(ab) {
  switch (ab) {
    case false:
      return '#4f0b03'
    case true:
      return '#b5b504'
    default:
      return '#cecece'
  }
}
