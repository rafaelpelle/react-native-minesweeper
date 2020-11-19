import { useState, useEffect, useCallback } from 'react'
import { Alert } from 'react-native'
import { params } from '../constants'

export default function useMinesweeper() {
  const [board, setBoard] = useState(null)
  const [minesAmount, setMinesAmount] = useState(0)
  const [counter, setCounter] = useState(0)
  const [stopCounter, setStopCounter] = useState(false)
  const [won, setWon] = useState(false)
  const [lost, setLost] = useState(false)

  useEffect(() => {
    initializeGame()
  }, [initializeGame])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter === 999) {
        setCounter(0)
      } else {
        if (!stopCounter) {
          setCounter(counter + 1)
        }
      }
    }, 1000)
    return () => clearInterval(intervalId)
  }, [counter, stopCounter])

  const initializeGame = useCallback(() => {
    const rowsAmount = params.getRowsAmount()
    const columnsAmount = params.getColumnsAmount()
    const minesAmount2 = Math.ceil(rowsAmount * columnsAmount * params.difficultLevel)
    const newBoard = createBoard(rowsAmount, columnsAmount)
    const minedBoard = spreadMines(newBoard, minesAmount2)
    setMinesAmount(minesAmount2)
    setBoard(minedBoard)
    setStopCounter(false)
    setCounter(0)
    setWon(false)
    setLost(false)
  }, [])

  const createBoard = (rowsAmount, columnsAmount) =>
    Array(rowsAmount)
      .fill(0)
      .map((_, row) =>
        Array(columnsAmount)
          .fill(0)
          .map((__, column) => ({
            row,
            column,
            opened: false,
            flagged: false,
            mined: false,
            exploded: false,
            nearMines: 0,
          })),
      )

  const spreadMines = (unminedBoard, minesAmount2) => {
    const rowsAmount = unminedBoard.length
    const columnsAmount = unminedBoard[0].length
    let minesPlantedAmount = 0
    while (minesPlantedAmount < minesAmount2) {
      const selectedRow = parseInt(Math.random() * rowsAmount, 10)
      const selectedColumn = parseInt(Math.random() * columnsAmount, 10)
      if (!unminedBoard[selectedRow][selectedColumn].mined) {
        unminedBoard[selectedRow][selectedColumn].mined = true
        minesPlantedAmount++
      }
    }
    return unminedBoard
  }

  const cloneBoard = (originalBoard) =>
    originalBoard.map((rows) =>
      rows.map((field) => ({
        ...field,
      })),
    )

  const getNeighbors = (rowIndex, columnIndex) => {
    const neighbors = []
    const rows = [rowIndex - 1, rowIndex, rowIndex + 1]
    const columns = [columnIndex - 1, columnIndex, columnIndex + 1]
    rows.forEach((row) => {
      columns.forEach((column) => {
        const different = row !== rowIndex || column !== columnIndex
        const validRow = row >= 0 && row < board.length
        const validColumn = column >= 0 && column < board[0].length
        if (different && validRow && validColumn) {
          neighbors.push(board[row][column])
        }
      })
    })
    return neighbors
  }

  const neighborhoodIsSafe = (rowIndex, columnIndex) =>
    getNeighbors(rowIndex, columnIndex).every(({ mined }) => !mined)

  const openField = (gameBoard, rowIndex, columnIndex) => {
    const field = gameBoard[rowIndex][columnIndex]
    if (!field.opened) {
      field.opened = true
      if (field.mined) {
        field.exploded = true
      } else if (neighborhoodIsSafe(rowIndex, columnIndex)) {
        getNeighbors(rowIndex, columnIndex).forEach(({ row, column }) => {
          openField(gameBoard, row, column)
        })
      } else {
        field.nearMines = getNeighbors(rowIndex, columnIndex).filter(({ mined }) => mined).length
      }
    }
  }

  const flagField = (gameBoard, rowIndex, columnIndex) => {
    const field = gameBoard[rowIndex][columnIndex]
    field.flagged = !field.flagged
  }

  const getAllFields = (gameBoard) => [].concat(...gameBoard)

  const hasExplosion = (gameBoard) => getAllFields(gameBoard).some(({ exploded }) => exploded)

  const getFlagsAmount = () => getAllFields(board).filter(({ flagged }) => flagged).length

  const fieldIsPending = ({ mined, flagged, opened }) => (mined && !flagged) || (!mined && !opened)

  const userWonTheGame = (gameBoard) =>
    getAllFields(gameBoard).every((field) => !fieldIsPending(field))

  const showMines = (gameBoard) =>
    getAllFields(gameBoard)
      .filter(({ mined }) => mined)
      .forEach((field) => {
        field.opened = true
      })

  const getRemainingFlags = () => {
    if (!board) {
      return '000'
    } else {
      const result = minesAmount - getFlagsAmount()
      if (result < 0) {
        return '000'
      }
      return ('000' + result).slice(-3)
    }
  }

  const getCounter = () => {
    if (!counter) {
      return '000'
    } else {
      return ('000' + counter).slice(-3)
    }
  }

  const checkGameStatus = (gameBoard) => {
    if (userWonTheGame(gameBoard)) {
      Alert.alert('Parabéns!!!', 'Você ganhou o jogo!')
      setStopCounter(true)
      setWon(true)
    } else if (hasExplosion(gameBoard)) {
      Alert.alert('BOOOM!!!', 'Você perdeu o jogo!')
      showMines(gameBoard)
      setStopCounter(true)
      setLost(true)
    }
  }

  const handleFieldPress = (rowIndex, columnIndex) => {
    const clonedBoard = cloneBoard(board)
    openField(clonedBoard, rowIndex, columnIndex)
    checkGameStatus(clonedBoard)
    setBoard(clonedBoard)
  }

  const handleFieldLongPress = (rowIndex, columnIndex) => {
    const clonedBoard = cloneBoard(board)
    flagField(clonedBoard, rowIndex, columnIndex)
    checkGameStatus(clonedBoard)
    setBoard(clonedBoard)
  }

  return {
    board,
    won,
    lost,
    initializeGame,
    getRemainingFlags,
    getCounter,
    handleFieldPress,
    handleFieldLongPress,
  }
}
