import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Width } from '../../lib/Screen'
import { TextButton } from './style'

export default function index({ press, text }) {
  return (
    <>
      <RectButton style={styles.container} onPress={press}>
        <TextButton style={{ color: '#000', textAlign: 'center' }}>{text}</TextButton>
      </RectButton>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: '#fff',
    width: Width / 2.5,
    padding: 5,
    textAlign: 'center',
    marginRight: 5
  },
})
