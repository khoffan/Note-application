import React from 'react'
import Note from './Note'
import AddNote from './AddNote'
const Notelist = ({ notes, handleAddnote, handleDeletenote }) => {
    return (
        <div className='note-list'>
            {notes.map((note) =>
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    Deletenote={handleDeletenote}
                />)}
            <AddNote addNote={handleAddnote} />
        </div>
    )
}

export default Notelist