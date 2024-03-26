import React,{useContext} from 'react'
// import noteContext from '../context/notes/NoteContext'
const NotesItem = (props) => {
    // const context  = useContext(noteContext);
    // const {notes} = context;
    const {note} = props;
    return (
        <div className = 'col-md-3'>
            <div className="card  my-3 " >
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                    </div>
            </div>
        </div>
    )
}

export default NotesItem
