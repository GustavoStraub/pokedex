import styled from 'styled-components'
import { Height, Width } from '../../lib/Screen'

export const Container = styled.View`
justify-content: center;
align-items: center;
height: ${Height / 3.5}px;
width: ${Width / 1.2}px;
border-radius: 5px;
border: 1px solid #000;
margin-bottom: 10px;
`
export const ContainerBack = styled.View`
height: ${Height / 3.5}px;
width: ${Width / 1.2}px;
border-radius: 5px;
border: 1px solid #000;
margin-bottom: 10px;
`
export const Name = styled.Text`
text-transform: capitalize;
font-size: 16px;
`
export const Title = styled.Text`
font-size: 18px;
text-align: center;
margin-top: 10px;
`
export const TypesWrapper = styled.View`
flex-direction: row;
width: 100%;
justify-content: space-evenly;
margin-top: 15px;
`
export const Types = styled.Text`
color: #fff;
background: ${props => props.bg || '#cecece'};
width: 60px;
text-align: center;
border-radius: 5px;
margin-bottom: 2px;
text-transform: uppercase;
border: 1px solid #fff;

`