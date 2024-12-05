import React from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { updateToPaste } from '../features/paste/pasteSlice'

const EditPaste = () => {

    const {id}=useParams()
    const allpaste = useSelector((state) => state.pastes)
    let paste = allpaste.find((paste) => id === paste.id)
    const dispatch = useDispatch()

    const [title, setTitle] = useState(paste.title)
    const [input, setInput] = useState(paste.input)
  
    const addPasteHandler = (e) =>{
      e.preventDefault()
      const updatePaste = {
        title: title,
        input: input,
        id: paste.id,
        createAt: new Date().toISOString(),
      }
      dispatch(updateToPaste(updatePaste))
    }

  return (
    <div className='home'>
      <form onSubmit={addPasteHandler}>
        <div className="btnfield">
          <input type="text" placeholder='Title' value={title} onChange={(e)=>{
            setTitle(e.target.value)
          }}/>
          <button type='submit' className='btn'>Update</button> 
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

export default EditPaste
