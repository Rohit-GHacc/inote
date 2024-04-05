import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

const NotesItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updatenote } = props;
    const extimage = 'https://wallpapercave.com/wp/wp10703427.png'
    return (

        <div className='col-md-3' >
            {/* <div style={{ backgroundImage: `url(${extimage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',backgroundBlendMode:'darken' }}> */}
                <div className="card  text-light my-3 "  style={{ backgroundImage: `url(${extimage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',backgroundBlendMode:'darken' }}>
                    <div className="card-body mx-2">
                        <div className='d-flex justify-content-between' >
                            <h5 className="card-title">{note.title}</h5>
                            <div>
                                <i className="fa-solid fa-trash mx-2" style={{ cursor: 'pointer' }} onClick={() => { deleteNote(note._id) }}></i>
                                <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updatenote(note) }} style={{ cursor: 'pointer' }}></i>
                            </div></div>
                        <p className="card-text">{note.description}</p>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default NotesItem
