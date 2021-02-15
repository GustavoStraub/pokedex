import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Logo, MainWrapper } from './style'
import FixedButton from '../FixedButton'
import { Width } from '../../lib/Screen'

export default function index({ off, pok, Prev, Next }) {
  return (
    <MainWrapper>
      <Logo resizeMode={'contain'} source={require('../../images/pokemon-logo.png')} />
    </MainWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    width: Width / 7,
    padding: 5,
    textAlign: 'center',
  },
})
