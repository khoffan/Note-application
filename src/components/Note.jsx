import React from 'react'
import {MdDeleteForever } from 'react-icons/md'
const Note = ({ id,text,date, Deletenote }) => {
  return (
    <div className='note'>
        <h4>{text}</h4>
        <div className='note-footer'>
            <span>{date}</span>
            <MdDeleteForever onClick={() => Deletenote(id)} className='del-icon' size='1.3em' />
        </div>
    </div>
  )
}

export default Note