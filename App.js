import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, View, ScrollView, SafeAreaView } from 'react-native'
import { api } from './src/lib/api'
import Card from './src/components/Card'
import FixedButton from './src/components/FixedButton'

export default function App() {

  const [limit, setLimit] = useState(20)
  const [offset, setOffset] = useState(0)
  const [pokemons, setPokemons] = useState([])

  function NextPage() {
    setOffset(prev => prev + 20)
  }
  function PrevPage() {
    setOffset(prev => prev - 20)
  }

  useEffect(() => {
    api.get(`?limit=${limit}&offset=${offset}`)
      .then(res => setPokemons(res.data.results))
  }, [limit, offset])

  return (
    <ScrollView backgroundColor='#1a1a1a'>
      <SafeAreaView />
      <StatusBar backgroundColor='#1a1a1a' style="light" />
      <View style={{ alignItems: 'center', width: '100%', marginTop: 50 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
          {offset == 0 ? null : <FixedButton press={PrevPage} text='Prev' />}
          {pokemons.length < 20 ? null : <FixedButton press={NextPage} text='Next' />}
        </View>
      </View>
      <View style={styles.container}>
        {pokemons.map(p => (
          <Card
            key={p.url}
            name={p.name}
            text2={p.url} />
        ))}
      </View>
      <View style={{ alignItems: 'center', width: '100%' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
          {offset == 0 ? null : <FixedButton press={PrevPage} text='Prev' />}
          {pokemons.length < 20 ? null : <FixedButton press={NextPage} text='Next' />}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 31,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
