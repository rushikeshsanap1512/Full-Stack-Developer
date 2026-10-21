// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {

  return (
    <>
      <Button startIcon={<PlusIcon />} size="sm" varient="primary" text="Share" />
      <Button size="md" varient="secondary" text="Add Content" />
      <Button size="lg" varient="secondary" text="Add Content" />
    </>
  )
}

export default App
