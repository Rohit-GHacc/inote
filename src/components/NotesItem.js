import React from 'react'
// import noteContext from '../context/notes/NoteContext'
const NotesItem = (props) => {
    // const context  = useContext(noteContext);
    // const {notes} = context;
    const {note} = props;
    
    return (
        <div className = 'col-md-3'>
            <div className="card  my-3 " >
                    <div className="card-body mx-2">
                        <div className='d-flex'>
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-trash mx-2" style={{cursor: 'pointer'}}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" style={{cursor: 'pointer'}}></i>
                        </div>
                        <p className="card-text">{note.description}</p>
                    </div>
            </div>
        </div>
    )
}

export default NotesItem
