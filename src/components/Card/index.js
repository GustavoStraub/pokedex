import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import FlipCard from 'react-native-flip-card'
import { api } from '../../lib/api'
import CheckType from '../../lib/CheckType'
import {
  Container,
  ContainerBack,
  Name,
  Title,
  Types,
  TypesWrapper
} from './style'

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

      <ContainerBack>
        <Title>Types:</Title>
        <TypesWrapper>
          {Stats ?
            Stats.types.map(t => (
              <View key={t.type.name}>
                <Types
                  bg={CheckType(t.type.name)}>
                  {t.type.name}
                </Types>
              </View>
            ))
            : <Text>Loading...</Text>
          }
        </TypesWrapper>
        <Title>Abilities:</Title>
        {Stats ?
          Stats.abilities.map(a => (
            <Text key={a.ability.url}>
              {a.ability.name}
            </Text>
          ))
          : <Text>Loading...</Text>
        }
        <Text></Text>
      </ContainerBack>
    </FlipCard>
  )
}
