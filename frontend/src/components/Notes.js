import React, { useContext, useEffect, useRef, useState } from 'react'
import NotesItem from './NotesItem'
import noteContext from '../context/notes/NoteContext'
import { useNavigate } from 'react-router-dom'
const Notes = (props) => {
  const navigate = useNavigate()
  const context = useContext(noteContext);
  const { showAlert } = props
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if (localStorage.getItem('authtoken'))
      getNotes()
    else
      navigate('/login')
    //eslint-disable-next-line
  }, []
  )
  const ref = useRef(null);
  const ref1 = useRef(null);
  const [note, setNote] = useState({ id: '', etitle: "", edescription: "", etag: "" })

  const updatenote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const handleClick = (e) => {
    console.log("Updating note ", note)
    editNote(note.id, note.etitle, note.edescription, note.etag);
    ref1.current.click();
    showAlert('success', 'Updated the note successfully')
  }
  return (
    <div className='row '>
      <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark text-light"  data-bs-theme='dark'>
              <h1 className="modal-title fs-5 " id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close btn-light "  data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body bg-secondary-subtle">
              <form>
                <div className="mb-3 my-3">
                  <label htmlFor="etitle" className="form-label">Title<span style={{color:'red'}}>*</span></label>
                  <input type="text" className="form-control" id="etitle" name="etitle" minLength={1} required aria-describedby="emailHelp" value={note.etitle} placeholder="Please enter a title of your note" onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description<span style={{color:'red'}}>*</span></label>
                  <input type="text" className="form-control" id="edescription" name="edescription" minLength={5} required value={note.edescription} placeholder="Please enter a description of your note" onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Tag</label>
                  <input type="text" className="form-control" placeholder='[Optional]' id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer bg-secondary-subtle">
              <button type="button" ref={ref1} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={note.etitle.length<1 || note.edescription.length <5?true:false} className="btn btn-dark" onClick={handleClick}>Update</button>
            </div>
          </div>
        </div>
      </div>
      {notes.length > 0 ? notes.map((note) => {
        return <NotesItem key={note._id} updatenote={updatenote} note={note} />;
      }) : <div className='container'>No notes to display</div>}
    </div>

  )
}

export default Notes
