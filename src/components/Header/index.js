import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { colors, params } from '../../constants'
const smileImage = require('../../assets/smile.png')
const sadImage = require('../../assets/sad.png')
const wonImage = require('../../assets/won.png')

export default function Header({ getRemainingFlags, getCounter, initializeGame, won, lost }) {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>{getRemainingFlags()}</Text>
      </View>

      <TouchableOpacity style={styles.imageContainer} onPress={initializeGame}>
        <Image style={styles.tinyLogo} source={won ? wonImage : lost ? sadImage : smileImage} />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.info}>{getCounter()}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
    padding: 5,
    maxHeight: 90,
    backgroundColor: colors.grey,
    borderLeftColor: colors.darkerGrey,
    borderTopColor: colors.darkerGrey,
    borderRightColor: colors.lightGrey,
    borderBottomColor: colors.lightGrey,
    borderWidth: params.borderSize + 1,
  },
  infoContainer: {
    backgroundColor: colors.black,
    borderLeftColor: colors.darkerGrey,
    borderTopColor: colors.darkerGrey,
    borderRightColor: colors.lightGrey,
    borderBottomColor: colors.lightGrey,
    borderWidth: 3,
  },
  info: {
    color: colors.red,
    fontSize: 45,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: colors.grey,
    borderLeftColor: colors.lightGrey,
    borderTopColor: colors.lightGrey,
    borderRightColor: colors.darkerGrey,
    borderBottomColor: colors.darkerGrey,
    borderWidth: 3,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
})
