import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className='grid grid-cols-12'>
        <div className='bg-blue-300 col-span-4'>
          Child 1
        </div>
        <div className='bg-red-300 col-span-6'>
          Child 2
        </div>
        <div className='bg-green-300 col-span-2'>
          Child 3
        </div>
      </div> */}

      {/* <div className="xl:bg-yellow-300 md:bg-green-300 sm:bg-blue-300 bg-red-300">
        Hi There
      </div> */}

      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-5 bg-red-500 text-2xl rounded-full">Hi there from the first div</div>
        <div className="col-span-12 sm:col-span-5 bg-red-300 ">Hi there from the second div</div>
        <div className="col-span-12 sm:col-span-2 bg-pink-300 ">Hi there from the third div</div>
      </div>
    </>
  );
}

export default App
