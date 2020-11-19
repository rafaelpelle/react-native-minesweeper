import React from 'react'
import { StyleSheet, View } from 'react-native'
import useMinesweeper from './hooks/useMinesweeper'
import Header from './components/Header'
import Board from './components/Board'

const App = () => {
  const useMinesweeperHook = useMinesweeper()

  return (
    <View style={styles.container}>
      <Header {...useMinesweeperHook} />
      <Board {...useMinesweeperHook} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
  },
})

export default App
