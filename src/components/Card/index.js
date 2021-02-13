import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import FlipCard from 'react-native-flip-card'
import { Container, Name } from './style'
import { api } from '../../lib/api'
import axios from 'axios'

export default function index(props) {

  const [Stats, setStats] = useState('')

  useEffect(() => {
    api.get(`/${props.name}`)
      .then(res => setStats(res.data))
      .catch(e => console.log(e))
  }, [props.name])

  return (
    <FlipCard>
      <Container>
        {Stats ?
          <Image source={{ uri: Stats.sprites.front_default }} resizeMode={'contain'} style={{ height: 150, width: 150 }} />
          : <Text>Loading...</Text>
        }
        <Name>{props.name}</Name>
      </Container>
      <Container>
        <Text>types:</Text>
        {Stats ?
          Stats.types.map(t => (
            <Text key={t.type.name}>
              {t.type.name}
            </Text>
          ))
          : <Text>Loading...</Text>
        }
        <Text>Abilities:</Text>
        {Stats ?
          Stats.abilities.map(a => (
            <Text key={a.ability.url}>
              {a.ability.name}
            </Text>
          ))
          : <Text>Loading...</Text>
        }
        <Text></Text>
      </Container>
    </FlipCard>
  )
}
