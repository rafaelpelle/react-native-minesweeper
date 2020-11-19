import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import { params, colors } from '../../constants'
import Mine from '../Mine'
import Flag from '../Flag'

const openedLabelColor = [
  null,
  colors.blue,
  colors.green,
  colors.red,
  colors.red,
  colors.red,
  colors.black,
  colors.black,
  colors.black,
]

export default function Field({
  row,
  column,
  mined,
  opened,
  exploded,
  flagged,
  nearMines,
  handleFieldPress,
  handleFieldLongPress,
}) {
  const styleField = [styles.field]
  if (opened) styleField.push(styles.opened)
  if (exploded) styleField.push(styles.exploded)
  if (flagged) styleField.push(styles.flagged)
  if (!opened && !exploded) styleField.push(styles.regular)

  return (
    <TouchableWithoutFeedback
      onPress={() => handleFieldPress(row, column)}
      onLongPress={() => handleFieldLongPress(row, column)}
    >
      <View style={styleField}>
        {mined && opened && <Mine />}
        {flagged && !opened && <Flag />}
        {!mined && opened && nearMines > 0 && (
          <Text style={[styles.label, { color: openedLabelColor[nearMines] }]}>{nearMines}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
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
