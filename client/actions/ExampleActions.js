import { UPDATE_SCORE } from './types'

export const updateScore = score => ({
  type: UPDATE_SCORE,
  payload: score
})
