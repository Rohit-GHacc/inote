import React, {useContext} from 'react'
import NotesItem from './NotesItem'
import noteContext from '../context/notes/NoteContext'
const Notes = () => {
    const context = useContext(noteContext);
    const {notes,setNotes} = context;
  return (
    <div className = 'row '>
        {notes.map((note)=>{
          return <NotesItem note = {note}/>;
        })}
      </div>

  )
}

export default Notes
