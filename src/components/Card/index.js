import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import FlipCard from 'react-native-flip-card'
import { api } from '../../lib/api'
import CheckType from '../../lib/CheckType'
import CheckStats from '../../lib/CheckStats'

import {
  AbilitesWrapper,
  Abilities,
  Container,
  ContainerBack,
  Name,
  Title,
  Types,
  TypesWrapper,
  Weight,
  Info,
  StatusText
} from './style'
import CheckAbility from '../../lib/CheckAbility'

export default function index(props) {

  const [Stats, setStats] = useState('')

  useEffect(() => {
    api.get(`/${props.name}`)
      .then(res => setStats(res.data))
      .catch(e => console.log(e))
  }, [props.name])

  return (
    <FlipCard>
      <Container
        source={require('../../images/Pokeball.png')}
        imageStyle={{ opacity: 0.3 }}
        bg={Stats ? CheckType(Stats.types[0].type.name) : '#cecece'} >
        <Weight>
          Wt: {Stats.weight / 10}Kg
        </Weight>

        {Stats ?
          <Image source={{ uri: Stats.sprites.front_default }} resizeMode={'contain'} style={{ height: 150, width: 150 }} />
          : <Text>Loading...</Text>
        }
        <Name style={styles.textShadow}>
          {props.name}
        </Name>
      </Container>
      <ContainerBack
        source={require('../../images/Pokeball.png')}
        imageStyle={{ opacity: 0.3 }}
        bg={Stats ? CheckType(Stats.types[0].type.name) : '#cecece'}>
        <Title style={styles.TitleShadow}>Status:</Title>
        <Info>
          {Stats.stats ?
            Stats.stats.map(s => (
              <StatusText
                style={styles.Shadow}
                bg={CheckStats(s.stat.name)}
                key={s.stat.url}>
                {s.stat.name}: {s.base_stat} {'\n'}
              </StatusText>
            ))
            : <StatusText>Loading...</StatusText>
          }
        </Info>
        <Title style={styles.TitleShadow}>Types:</Title>
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
        <Title style={styles.TitleShadow}>Abilities:</Title>
        <AbilitesWrapper>
          {Stats ?
            Stats.abilities.map(a => (
              <Abilities bg={CheckAbility(a.is_hidden)}
                key={a.ability.url}>
                {a.ability.name}
              </Abilities>
            ))
            : <Text>Loading...</Text>
          }
        </AbilitesWrapper>


      </ContainerBack>
    </FlipCard>
  )
}

const styles = StyleSheet.create({
  textShadow: {
    textShadowColor: '#003A70',
    textShadowOffset: { width: 3, height: 4 },
    textShadowRadius: 1,
  },
  TitleShadow: {
    textShadowColor: '#003A70',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 1,
  },
  Shadow: {
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  }
})