import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Animate from './Animate'
import OwnAnimate from './OwnAnimate'

function App() {
  const [count, setCount] = useState(0)

  return (
    < OwnAnimate/>
   
  )
}

export default App
