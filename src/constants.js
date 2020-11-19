import { Dimensions } from 'react-native'

export const params = {
  blockSize: 40,
  borderSize: 5,
  fontSize: 20,
  headerRatio: 0.13,
  difficultLevel: 0.1,
  getColumnsAmount() {
    const { width } = Dimensions.get('window')
    return Math.floor(width / this.blockSize)
  },
  getRowsAmount() {
    const { height } = Dimensions.get('window')
    const boardHeight = height * (1 - this.headerRatio)
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
