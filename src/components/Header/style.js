import styled from 'styled-components'
import { Height, Width } from '../../lib/Screen'

export const MainWrapper = styled.View`
width: ${Width}px;
align-items: center;
justify-content: center;
background: #032747;
height: 80px;
border-bottom-width: 0.2px;
border-color: #fff;
padding: 10px 30px;
flex-direction: row;
margin-top: 30px;
`
export const Logo = styled.Image`
width: 70%;
height: 90%;
`