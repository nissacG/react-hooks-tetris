export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

export const createStage = () => (
  // create Array from an array, created from the STAGE_HEIGHT. 
  Array.from(Array(STAGE_HEIGHT), () => ( // [[], [], []...]
    // on each item in that array, create a new array from STAGE_WIDTH filled with array of [0, 'clear']
    new Array(STAGE_WIDTH).fill([0, 'clear']) // result is [([([0, 'clear'] x12)] x20) ]
  ))
)