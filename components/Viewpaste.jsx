import React from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

const Viewpaste = () => {
  const {id}=useParams()
  const allpaste = useSelector((state) => state.pastes)
  let paste = allpaste.find((paste) => id === paste.id)
  console.log(paste)

  return (
        <div className='home'>
        <form disabled>
          <div className="btnfield">
            <input type="text" disabled value={paste.title}/>
          </div>
          <div className="textfield">
            <div>
            <span className="dot1"></span>
            <span className="dot2"></span>
            <span className="dot3"></span>
            </div>
            <textarea disabled value={paste.input}></textarea>
          </div>
        </form>
      </div>
  )
}

export default Viewpaste
