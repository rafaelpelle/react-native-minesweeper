import React from 'react'
import { StyleSheet, View } from 'react-native'
import { params, colors } from '../../constants'

export default function Field(props) {
  const styleField = [styles.field]
  // TODO - other styles
  if (styleField.length === 1) styleField.push(styles.regular)

  return <View style={styleField}></View>
}

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: colors.grey,
    borderLeftColor: colors.lightGrey,
    borderTopColor: colors.lightGrey,
    borderRightColor: colors.darkGrey,
    borderBottomColor: colors.darkGrey,
  },
})
