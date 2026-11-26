import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  const [messages, setMessages] = useState(["Hi There", "Hello"]);
  const wsRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");
    ws.onmessage = (event) => {
      setMessages(m => [...m, event.data])
    }
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "join",
        payload: {
          roomId: "red"
        }
      }))
    }
    return() => {
      ws.close()
    }
  },[])

  return (
    <div className='h-screen bg-black'>
      <br /><br /><br />
      <div className='h-[85vh]'>
        {messages.map(message => 
          <div className='m-8'> 
            <span className='bg-white text-black rounded p-4 m-8'>
              {message}
            </span>
          </div>)}
      </div>
      <div className='w-full bg-white flex'>
        <input id='message' className='flex-1 p-4'/>
        <button onClick={() => {
          const message = document.getElementById("message")?.value;
          wsRef.current.send(JSON.stringify({
            type: "chat",
            payload: {
              message: message
            }
          }))
        }} className='bg-purple-600 text-white p-4'>
          Send Message
        </button>
      </div>
    </div>
  )
}

export default App
