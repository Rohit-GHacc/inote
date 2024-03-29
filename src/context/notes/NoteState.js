import NoteContext from './NoteContext';
// import react from 'react';
import { useState } from 'react';

const NoteState = (props) => {
    // const s1 = {
    //     "name" : "Harry",
    //     "class": "5b"
    // }
    // const [state,setState]=useState(s1);
    // const update = ()=>{
    //     setTimeout(()=>{
    //         setState({
    //             "name": "Larry",
    //             "class":"10a"
    //         })
    //     },1000)
    // }
    // console.log(props.children)
    const initialNotes = [
        {
            "_id": "65fb12e6daf0d678ebce5b36",
            "user": "65f82c667cb11615fc79593a",
            "title": "Updated title",
            "description": "updated description",
            "tag": "Updated tag",
            "date": "2024-03-20T16:46:30.583Z",
            "__v": 0
        },
        {
            "_id": "65fbba562d1695146ba9b4bd",
            "user": "65f82c667cb11615fc79593a",
            "title": "rohit",
            "description": "Wake up early",
            "tag": "personal",
            "date": "2024-03-21T04:40:54.841Z",
            "__v": 0
        },
        {
            "_id": "65fbba562d1695346ba9b4ba",
            "user": "65f82c667cb11615fc79593a",
            "title": "rohit",
            "description": "Wake up early",
            "tag": "personal",
            "date": "2024-03-21T04:40:54.841Z",
            "__v": 0
        },
        {
            "_id": "65fbba562d1692146ba9b4bd",
            "user": "65f82c667cb11615fc79593a",
            "title": "rohit",
            "description": "Wake up early",
            "tag": "personal",
            "date": "2024-03-21T04:40:54.841Z",
            "__v": 0
        },
        {
            "_id": "65fbb3562d1695146ba9b4bd",
            "user": "65f82c667cb11615fc79593a",
            "title": "rohit",
            "description": "Wake up early",
            "tag": "personal",
            "date": "2024-03-21T04:40:54.841Z",
            "__v": 0
        },
        {
            "_id": "65fbba562d1695146ba9b5bd",
            "user": "65f82c667cb11615fc79593a",
            "title": "rohit",
            "description": "Wake up early",
            "tag": "personal",
            "date": "2024-03-21T04:40:54.841Z",
            "__v": 0
        }
    ];
    const [notes, setNotes] = useState(initialNotes);
    // Add a note
    const addNote = (title, description, tag) => {
        console.log('adding a new note')
        const note = {
            "_id": "65fbba562d1695116ba9b4bd",
            "user": "65f82c667cb11615fc79593a",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-03-21T04:40:54.841Z",
            "__v": 0
        }
        setNotes(notes.concat(note));
    }
    // Delete a note
    const deleteNote = (id) => {

    }
    // Edit a note
    const editNote = (id) => {

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
