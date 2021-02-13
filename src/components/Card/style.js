import styled from 'styled-components'
import { Height, Width } from '../../lib/Screen'

export const Container = styled.View`
justify-content: center;
align-items: center;
height: ${Height /3.5}px;
width: ${Width /1.2}px;
border-radius: 5px;
border: 1px solid #000;
margin-bottom: 10px;
`
export const Name = styled.Text`
text-transform: capitalize;
font-size: 16px;
`