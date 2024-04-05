import React, { useContext, useState, useRef } from 'react'
import noteContext from '../context/notes/NoteContext'

const AddNote = (props) => {
  const ref = useRef(null);
  const { showAlert } = props;
  const context = useContext(noteContext)
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" })
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    ref.current.click();
    setNote({ title: "", description: "", tag: "" })
    showAlert('success', 'Added a note')
  }
  const handleClear = () => {
    let title = document.getElementById('title');
    title.value = '';
    let desc = document.getElementById('description');
    desc.value = '';
    document.getElementById('tag').value = '';
    setNote({ title: '', description: '', tag: '' })
  }
  // const title = document.getElementById('title')
  // console.log(title);
  return (
    <div className='container my-5'>
      <h1 className='my-3'> Add a Note </h1>
      <form>
        <div className="mb-3 my-3">
          <label htmlFor="title" className="form-label">Title<span style={{color:'red'}}>*</span></label>
          <input type="text" className="form-control"  id="title" name="title" placeholder="Please enter a title of your note" aria-describedby="emailHelp" minLength={1} required onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description<span style={{color:'red'}}>*</span></label>
          <input type="text" className="form-control" id="description" name="description" placeholder="Please enter a description of your note"  minLength={5} required onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag" placeholder='[Optional]' required onChange={onChange} />
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        {/* <div className='container mx-0'> */}
        <button type="submit" disabled={note.title.length < 1 || note.description.length < 5 ? true : false} className="btn btn-dark my-3" onClick={handleClick}>Add a note</button>
        <button type="button" disabled={note.title.length === 0 && note.description.length === 0 && note.tag.length === 0 ? true : false} className="btn btn-dark mx-4" ref={ref} onClick={handleClear}>Clear</button>
        {/* </div> */}
      </form>
    </div>
  )
}

export default AddNote
