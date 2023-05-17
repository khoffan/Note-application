import { useEffect, useState } from 'react'
import Notelist from './components/Notelist'
import { v4 as uuidv4 } from 'uuid';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState(() => {
    const saveNotes = JSON.parse(localStorage.getItem('react-note-app-data'));
    return saveNotes || [
    {
      id: uuidv4(),
      text: 'This is my first note',
      date: '15/5/2023'
    },
    {
      id: uuidv4(),
      text: 'This is my second note',
      date: '17/5/2023'
    },
    {
      id: uuidv4(),
      text: 'This is my thrid note',
      date: '19/5/2023'
    },
    {
      id: uuidv4(),
      text: 'This is my new note',
      date: '21/5/2023'
    },
  ]})

  const [searchText, setSearchText] = useState('')

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem('react-note-app-data'));

    console.log(saveNotes)
    if(saveNotes){
      setNotes(saveNotes)
    }
  },[])

  useEffect(() => {
    localStorage.setItem('react-note-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: uuidv4(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='conteiner'>
        <Header handletroggleMode={setDarkMode}/>
        <Search handleSearch={setSearchText} />
        <Notelist
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddnote={addNote}
          handleDeletenote={deleteNote} />
      </div>
    </div>

  )
}

export default App
