import React, { useState } from 'react'
import '../Styling/Home.css'
import {addToPaste} from '../features/paste/pasteSlice'
import {useDispatch} from 'react-redux'

const Home = () => {
  
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [input, setInput] = useState('')

  const addPasteHandler = (e) =>{
    e.preventDefault()
    const paste = {
      title: title,
      input: input,
      id: Date.now().toString(36),
      createAt: new Date().toISOString(),
    }
    dispatch(addToPaste(paste))
    setInput('')
    setTitle('')
  }

  return (
    <div className='home'>
      <form onSubmit={addPasteHandler}>
        <div className="btnfield">
          <input type="text" placeholder='Title' value={title} onChange={(e)=>{
            setTitle(e.target.value)
          }}/>
          <button type='submit' className='btn'>Add Paste</button> 
        </div>
        <div className="textfield">
          <div>
          <span className="dot1"></span>
          <span className="dot2"></span>
          <span className="dot3"></span>
          </div>
          <textarea value={input} onChange={(e)=>{
          setInput(e.target.value)
         }}></textarea>
        </div>
      </form>
    </div>
  )
}

export default Home
