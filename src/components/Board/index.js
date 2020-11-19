import React from 'react'
import { StyleSheet, View } from 'react-native'
import Field from '../Field'
import { colors, params } from '../../constants'

export default function Board({ board, ...fieldProps }) {
  return (
    <View style={styles.container}>
      {board?.map((row, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {row.map((field, columnIndex) => (
            <Field {...field} {...fieldProps} key={columnIndex} />
          ))}
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: params.borderSize + 1,
    borderLeftColor: colors.darkerGrey,
    borderTopColor: colors.darkerGrey,
    borderRightColor: colors.lightGrey,
    borderBottomColor: colors.lightGrey,
    backgroundColor: 'red',
  },
  row: {
    flexDirection: 'row',
  },
})
