import React, { useState } from 'react'

const AddNote = ({addNote}) => {
  const [noteText, setNoteText] = useState('')
  const charectorLimit = 200;

  const handlechange = (event) => {
    if(event.target.value.length <= charectorLimit) {
      setNoteText(event.target.value)
    }
  }

  const handleSaveclick = () => {
    if(noteText.trim().length > 0){
      addNote(noteText)
      setNoteText('')
    }
  }
  return (
    <div className='note new'>
      <textarea 
      rows='8' 
      cols='15' 
      placeholder='Type to add a note....'
      value={noteText}
      onChange={handlechange}
      >
      </textarea>
      <div className='note-footer'>
        <small>{charectorLimit-noteText.length} remaining</small>
        <button className='save' onClick={handleSaveclick}>Save</button>
      </div>
    </div>
  )
}

export default AddNote