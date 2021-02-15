import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {  MainWrapper } from './style'
import FixedButton from '../FixedButton'
import { Width } from '../../lib/Screen'

export default function index({ off, pok, Prev, Next, Page }) {
  return (
    <MainWrapper>
      {off == 0 ?
        <View style={styles.container} />
        : <FixedButton press={Prev} text='Prev.' />}
        <FixedButton text={`Pag.${Page}`} />
      {pok.lenght < 19 ? <View style={styles.container} /> :
        <FixedButton press={Next} text='Next' />
      }
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
