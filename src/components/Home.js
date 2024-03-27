import React from 'react'
import Notes from './Notes'
import AddNote from './AddNote'
const Home = () => {
  // const Notes = useContext(noteContext)
  // const {notes,setNotes }= Notes;
  return (
    <div>
      <AddNote/>
      <h1 className = 'my-3'> Your notes</h1>
      <Notes/>
    </div>
  )
}

export default Home
