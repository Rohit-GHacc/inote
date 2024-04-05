import NoteContext from './NoteContext';
// import react from 'react';
import { useState } from 'react';

const NoteState = (props) => {
    const host = "https://inote-snowy.vercel.app";
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
    // const initialNotes = [
    //     {
    //         "_id": "65fb12e6daf0d678ebce5b36",
    //         "user": "65f82c667cb11615fc79593a",
    //         "title": "Updated title",
    //         "description": "updated description",
    //         "tag": "Updated tag",
    //         "date": "2024-03-20T16:46:30.583Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fbba562d1695146ba9b4bd",
    //         "user": "65f82c667cb11615fc79593a",
    //         "title": "rohit",
    //         "description": "Wake up early",
    //         "tag": "personal",
    //         "date": "2024-03-21T04:40:54.841Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fbba562d1695346ba9b4ba",
    //         "user": "65f82c667cb11615fc79593a",
    //         "title": "rohit",
    //         "description": "Wake up early",
    //         "tag": "personal",
    //         "date": "2024-03-21T04:40:54.841Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fbba562d1692146ba9b4bd",
    //         "user": "65f82c667cb11615fc79593a",
    //         "title": "rohit",
    //         "description": "Wake up early",
    //         "tag": "personal",
    //         "date": "2024-03-21T04:40:54.841Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fbb3562d1695146ba9b4bd",
    //         "user": "65f82c667cb11615fc79593a",
    //         "title": "rohit",
    //         "description": "Wake up early",
    //         "tag": "personal",
    //         "date": "2024-03-21T04:40:54.841Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fbba562d1695146ba9b5bd",
    //         "user": "65f82c667cb11615fc79593a",
    //         "title": "rohit",
    //         "description": "Wake up early",
    //         "tag": "personal",
    //         "date": "2024-03-21T04:40:54.841Z",
    //         "__v": 0
    //     }
    // ];

    const [notes, setNotes] = useState([]);
    // getnotes
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('authtoken')
            }

        })
        const json = await response.json();
        // console.log(json);
        setNotes(json);
    }

    // Add a note
    const addNote = async (title, description, tag) => {
        console.log('adding a new note')
        //API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('authtoken')
            },
            body: JSON.stringify({ title, description, tag })
        })
        const note = await response.json();
        // console.log(json);
        // const note = {
        //     "_id": "65fbba562d1695116ba9b4bd",
        //     "user": "65f82c667cb11615fc79593a",
        //     "title": title,
        //     "description": description,
        //     "tag": tag,
        //     "date": "2024-03-21T04:40:54.841Z",
        //     "__v": 0
        // }
        setNotes(notes.concat(note));
    }
    // Delete a note
    const deleteNote = async (id) => {
        //API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('authtoken')
            }
        })
        const json = response.json();
        console.log(json);
        console.log('deleting a note ', id);
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }
    // Edit a note
    const editNote = async (id, title, description, tag) => {
        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('authtoken')
            },
            body: JSON.stringify({ title, description, tag })
        })
        const json = await response.json();
        console.log(json)

        // Logic to edit in client
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < notes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].tag = tag;
                newNotes[index].description = description;
                break;
            }
        }
        setNotes(newNotes)
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
