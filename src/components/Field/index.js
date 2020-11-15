import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { params, colors } from '../../constants'
import Mine from '../Mine'
import Flag from '../Flag'

const openedLabelColor = {
  0: null,
  1: colors.blue,
  2: colors.green,
  3: colors.red,
  4: colors.red,
  5: colors.red,
  6: colors.black,
  7: colors.black,
  8: colors.black,
}

export default function Field({ mined, opened, exploded, flagged, nearMines }) {
  const styleField = [styles.field]
  // TODO - other styles
  if (opened) styleField.push(styles.opened)
  if (exploded) styleField.push(styles.exploded)
  if (flagged) styleField.push(styles.flagged)
  if (!opened && !exploded) styleField.push(styles.regular)

  return (
    <View style={styleField}>
      {mined && opened && <Mine />}
      {flagged && !opened && <Flag />}
      {!mined && opened && nearMines > 0 && (
        <Text style={[styles.label, { color: openedLabelColor[nearMines] }]}>{nearMines}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  label: {
    fontSize: params.fontSize,
    fontWeight: 'bold',
  },
  regular: {
    backgroundColor: colors.grey,
    borderLeftColor: colors.lightGrey,
    borderTopColor: colors.lightGrey,
    borderRightColor: colors.darkerGrey,
    borderBottomColor: colors.darkerGrey,
  },
  opened: {
    backgroundColor: colors.grey,
    borderColor: colors.darkGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exploded: {
    backgroundColor: colors.red,
    borderColor: colors.red,
  },
})
