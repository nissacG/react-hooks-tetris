import { useState } from 'react'
import { createStage } from '../gameHelpers'
import { Stage } from '../components/Stage'

export const useStage = () => {
  const [stage, setStage] = useState<Stage>(createStage())

  return [stage, setStage]
}