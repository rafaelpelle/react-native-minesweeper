import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { params } from './constants'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>
        Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
