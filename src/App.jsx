import { useState } from 'react'

import { CheckInData } from './CheckInData'
import { GreenMoodCard } from './moodcards/GreenMoodCard'
import { BlueMoodCard } from './moodcards/BlueMoodCard'
import { YellowMoodCard } from './moodcards/YellowMoodCard'
import { RedMoodCard } from './moodcards/RedMoodCard'

function App() {
  
  return (
    <>
      <CheckInData />
      <GreenMoodCard />
      <BlueMoodCard />
      <YellowMoodCard />
      <RedMoodCard />
    </>
  )
}

export default App