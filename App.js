import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from 'react-native'
import { api } from './src/lib/api'
import Card from './src/components/Card'
import Footer from './src/components/Footer'
import Header from './src/components/Header'

export default function App() {

  const [limit, setLimit] = useState(20)
  const [offset, setOffset] = useState(0)
  const [Page, setSetPage] = useState(1)
  const [pokemons, setPokemons] = useState([])

  function NextPage() {
    setOffset(prev => prev + 20)
    setSetPage(prev => prev + 1)
  }
  function PrevPage() {
    setOffset(prev => prev - 20)
    setSetPage(prev => prev - 1)
  }

  useEffect(() => {
    api.get(`?limit=${limit}&offset=${offset}`)
      .then(res => setPokemons(res.data.results))
  }, [limit, offset])

  return (
    <>
      <SafeAreaView />
      <StatusBar backgroundColor='#01192e' style="light" />
      <Header />
      <ScrollView backgroundColor='#1a1a1a'>
        <View style={styles.container}>
          {pokemons.map(p => (
            <Card
              key={p.url}
              name={p.name}
              text2={p.url} />
          ))}
        </View>
      </ScrollView>
      <Footer off={offset}
        pok={pokemons}
        Prev={PrevPage}
        Next={NextPage}
        Page={Page} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
