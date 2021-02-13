import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import { api } from './src/lib/api'
import Card from './src/components/Card'
import axios from 'axios'

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
    <ScrollView>
      <SafeAreaView />
      <StatusBar backgroundColor='#cecece' style="dark" />
      <View style={styles.container}>
        {pokemons.map(p => (
          <Card
            key={p.url}
            name={p.name}
            text2={p.url} />
        ))}
        <Button onPress={NextPage} title='next page' />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cecece',
    marginTop: 31,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
