import React, {useContext,useState} from 'react'
import noteContext from '../context/notes/NoteContext'

const AddNote = () => {
    const context = useContext(noteContext)
    const {addNote} = context;

    const [note,setNote] = useState({title:"", description: "", tag:"default"})
    const onChange = (e)=>{
        setNote({...note,[e.target.name]: e.target.value})
    }
    
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }
    const handleClear = ()=>{
      let title = document.getElementById('title');
      title.value = '';
      let desc = document.getElementById('description');
      desc.value = '';
    }
  return (
    <div>
      <h1 className = 'my-3'> Add a note </h1>
      <form>
        <div className="mb-3 my-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange= {onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description"  onChange= {onChange}/>
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary mx-2" onClick={handleClick}>Add a note</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
      </form>
    </div>
  )
}

export default AddNote
