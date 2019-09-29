type Array0 = [number][]
type ArrayI = [number, string, number, number][]
type ArrayJ = [[number, string, number],[number, string, number],[string, string, number]]
type ArrayL = [[number, string, number],[number, string, number],[number, string, string]]
type ArrayO = [string, string][]
type ArrayS = [[number, string, string],[number, string, number],[string, string, number]]
type ArrayT = [[string, string, string],[number, string, number]]
type ArrayZ = [[string, string, number],[number, string, number],[number, string, string]]

interface Tetrominos {
  [key: string]: {
    shape: Array0 | ArrayJ | ArrayL | ArrayI | ArrayO | ArrayS | ArrayT | ArrayZ
    color: string
  }
}

export const tetrominos: Tetrominos = {
  0: {
    shape: [[0]],
    color: '0, 0, 0'
  },
  I: {
    shape: [
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
    ],
    color: '0, 240, 240'
  },
  J: {
    shape: [
      [0, 'J', 0],
      [0, 'J', 0],
      ['J', 'J', 0],
    ],
    color: '0, 0, 240'
  },
  L: {
    shape: [
      [0, 'L', 0],
      [0, 'L', 0],
      [0, 'L', 'L'],
    ],
    color: '240, 160, 0'
  },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O'],
    ],
    color: '240, 240, 0'
  },
  S: {
    shape: [
      [0, 'S', 'S'],
      [0, 'S', 0],
      ['S', 'S', 0],
    ],
    color: '0, 240, 0'
  },
  T: {
    shape: [
      ['T', 'T', 'T'],
      [0, 'T', 0],
    ],
    color: '160, 0, 240'
  },
  Z: {
    shape: [
      ['Z', 'Z', 0],
      [0, 'Z', 0],
      [0, 'Z', 'Z'],
    ],
    color: '240, 0, 0'
  }
}