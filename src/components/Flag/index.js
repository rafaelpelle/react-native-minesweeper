import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../constants'

export default function Flag({ bigger = true }) {
                 const style = bigger ? stylesBigger : styles

                 return (
                   <View style={style.container}>
                     <View style={style.flagPole} />
                     <View style={style.flag} />
                     <View style={style.base1} />
                     <View style={style.base2} />
                   </View>
                 )
               }
const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  flagPole: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: colors.darkerGrey,
    marginLeft: 15,
  },
  flag: {
    position: 'absolute',
    height: 5,
    width: 6,
    backgroundColor: colors.red,
    marginLeft: 9,
  },
  base1: {
    position: 'absolute',
    height: 2,
    width: 7,
    backgroundColor: colors.darkerGrey,
    marginLeft: 12,
    marginTop: 12,
  },
  base2: {
    position: 'absolute',
    height: 2,
    width: 11,
    backgroundColor: colors.darkerGrey,
    marginLeft: 10,
    marginTop: 13,
  },
})

const stylesBigger = StyleSheet.create({
  container: {
    marginTop: 3,
  },
  flagPole: {
    ...styles.flagPole,
    height: 24,
    width: 3,
    marginLeft: 15,
  },
  flag: {
    ...styles.flag,
    height: 8,
    width: 11,
    marginLeft: 4,
  },
  base1: {
    ...styles.base1,
    height: 3,
    width: 7,
    marginLeft: 12,
    marginTop: 21,
  },
  base2: {
    ...styles.base2,
    height: 3,
    width: 13,
    marginLeft: 9,
    marginTop: 23,
  },
})
