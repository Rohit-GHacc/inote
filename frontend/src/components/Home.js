import React from 'react'
import Notes from './Notes'
import AddNote from './AddNote'
const Home = (props) => {
  // const Notes = useContext(noteContext)
  // const {notes,setNotes }= Notes;
  return (
    <div>
      <AddNote showAlert={props.showAlert}/>
      <h1 className = 'my-3'> Your notes</h1>
      <Notes showAlert={props.showAlert}/>
    </div>
  )
}

export default Home
