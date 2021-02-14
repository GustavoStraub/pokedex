import styled from 'styled-components'
import { Height, Width } from '../../lib/Screen'

export const Container = styled.ImageBackground`
justify-content: center;
align-items: center;
height: ${Height / 3.5}px;
width: ${Width / 1.3}px;
border-radius: 5px;
border: 2px solid #f7f7f7;
margin-bottom: 10px;
position: relative;
background-color: ${props => props.bg || '#cecece'};
`
export const Weight = styled.Text`
position: absolute;
top: 0px;
left: 0px;
background: #f7f7f7;
border-bottom-right-radius: 5px;
border-top-left-radius: 3px;
color: #000;
padding: 2px;
`
export const Info = styled.View`
flex-direction: row;
flex-wrap: wrap;
width: 90%;
justify-content: space-evenly;
align-items: center;
border-radius: 5px;
align-self: center;
`
export const StatusText = styled.Text`
color: #fff;
text-transform: capitalize;
font-size: ${Width / 32}px;
background: #000;
height: 22px;
margin-bottom: 5px;
text-align: center;
background-color: ${props => props.bg};
border: 2px solid #f7f7f7;
padding: 2px;
border-radius: 5px;
`
export const ContainerBack = styled.ImageBackground`
height: ${Height / 3.5}px;
width: ${Width / 1.3}px;
border-radius: 5px;
border: 1px solid #000;
margin-bottom: 10px;
background-color: ${props => props.bg || '#cecece'};
border: 2px solid #f7f7f7;
justify-content: space-evenly;
padding: 5px;
`
export const Name = styled.Text`
text-transform: capitalize;
font-size: ${Width / 15}px;
font-family: 'Pokemon Solid Normal';
color: #FFCB05;
width: 100%;
text-align: center;
position: absolute;
bottom: 20px;
`
export const Title = styled.Text`
font-size: 16px;
text-align: center;
font-family: 'Pokemon Solid Normal';
color: #FFCB05;
`
export const TypesWrapper = styled.View`
flex-direction: row;
width: 100%;
justify-content: space-evenly;
padding: 5px;
`
export const Types = styled.Text`
color: #fff;
background: ${props => props.bg || '#cecece'};
padding: 1px 5px;
text-align: center;
border-radius: 5px;
margin-bottom: 2px;
text-transform: capitalize;
border: 1px solid #fff;
font-size: ${Width / 35}px;
`
export const AbilitesWrapper = styled.View`
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
`
export const Abilities = styled.Text`
color: #fff;
background-color: ${props => props.bg || '#cecece'};
padding: 3px;
text-align: center;
border-radius: 5px;
margin-bottom: 2px;
text-transform: capitalize;
border: 1px solid #fff;
font-size: ${Width / 35}px;
`