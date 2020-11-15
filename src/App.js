import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { params } from './constants'
import Field from './components/Field'

const App = () => {
  return (
    <View style={styles.container}>
      <Field opened nearMines={8} />
      <Field mined />
      <Field opened mined />
      <Field opened mined exploded />
      <Field flagged />
      <Field opened flagged />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
