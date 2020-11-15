import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../constants'

export default function Mine(props) {
  return (
    <View style={styles.container}>
      <View style={styles.core} />
      <View style={styles.line} />
      <View style={[styles.line, { transform: [{ rotate: '45deg' }] }]} />
      <View style={[styles.line, { transform: [{ rotate: '90deg' }] }]} />
      <View style={[styles.line, { transform: [{ rotate: '135deg' }] }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  core: {
    height: 18,
    width: 18,
    borderRadius: 20,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    position: 'absolute',
    height: 3,
    width: 24,
    borderRadius: 3,
    backgroundColor: colors.black,
  },
})
