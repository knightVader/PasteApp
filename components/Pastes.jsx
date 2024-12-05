import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPaste } from '../features/paste/pasteSlice'
import toast from 'react-hot-toast'
import { Link } from 'react-router'
import '../Styling/pastes.css'

const Pastes = () => {
  const allpaste = useSelector((state) => state.pastes)
  const [searchCnt, setSearchCnt] = useState('')
  const dispatch = useDispatch()

  const filteredPaste = allpaste.filter((paste) => {
    return paste.title.toLowerCase().includes(searchCnt.toLowerCase())
  })

  const handleDeleteFunction = (paste) =>{
    dispatch(removeFromPaste(paste))
  }

  return (
    <div className='paste'>
        <div className='inputfield'>
          <input type="search" value={searchCnt} onChange={(e)=>{
            setSearchCnt(e.target.value)
          }} placeholder='Search items here...' className='inp'/>
        </div>
        <div className='addedpastes'>
          <h1 className='htwo'>All Pastes</h1>
          {
            filteredPaste.length>=0 ? 
            filteredPaste.map((paste) => (
              <div key={paste.id} className='maindiv'>
                <div className='text'>
                  <h2>{paste.title}</h2>
                  <p>{paste.input}</p>
                </div>
                <div className='icon'>
                <Link to={`/pastes/edit/${paste.id}`}><button className='btn2'><i className="fa-solid fa-pen-to-square edit"></i></button></Link>
                  <Link to={`/pastes/view/${paste.id}`}><button className='btn2'><i className="fa-solid fa-eye view"></i></button></Link>
                  <button onClick={() => {handleDeleteFunction(paste)}} className='btn2'><i className="fa-solid fa-trash-can delete"></i></button>
                  <button className='btn2'><i className="fa-solid fa-share-from-square share"></i></button>
                  <button onClick={() => 
                    {navigator.clipboard.writeText(paste.input) 
                      toast.success("Copied to Clipboard", { position: 'top-right' })                     
                    }} className='btn2'><i className="fa-solid fa-copy copy"></i></button>
                </div>
              </div>
            ))
            : <p>Not Found</p>
          }
        </div>
    </div>
  )
}

export default Pastes
