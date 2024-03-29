import React, {useContext,useEffect} from 'react'
import NotesItem from './NotesItem'
import noteContext from '../context/notes/NoteContext'
const Notes = () => {
    const context = useContext(noteContext);
    const {notes,getNotes} = context;
    useEffect(()=>{
      getNotes()
      //eslint-disable-next-line
    },[]
    )
  return (
    <div className = 'row '>
        {notes.map((note)=>{
          return <NotesItem key={note._id} note = {note}/>;
        })}
      </div>

  )
}

export default Notes
