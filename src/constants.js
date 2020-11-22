import { Dimensions } from 'react-native'

export const params = {
  blockSize: 40,
  borderSize: 5,
  fontSize: 20,
  headerSize: 90,
  difficultLevel: 0.1,
  getColumnsAmount() {
    const { width } = Dimensions.get('window')
    return Math.floor(width / this.blockSize)
  },
  getRowsAmount() {
    const { height } = Dimensions.get('window')
    const boardHeight = height - this.headerSize
    return Math.floor(boardHeight / this.blockSize)
  },
}

export const colors = {
  lighterGrey: '#EEE',
  lightGrey: '#CCC',
  grey: '#999',
  darkGrey: '#777',
  darkerGrey: '#333',
  blue: '#0000FF',
  green: '#007700',
  red: '#FF0000',
  black: '#000000',
}
