import axios from "axios";
import { useState } from "react";

const AddNote = ({ user, setData, setEditNote }) => {
    // Add new note
    const [newNote, setNewNote] = useState({
        title: '',
        notes: '',
    })
    const handleChange = (e) => {
        setNewNote((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };
    const handleClick = async (e) => {
        e.preventDefault();
        await axios.post(`${process.env.REACT_APP_API}/notes/${user._id}`, newNote)
        setData(newNote)
        setEditNote(newNote)
    };

    return (
        <form>

            <div className="mb-6">
                <label className="block text-sm dark:text-white font-medium mb-2" htmlFor="title">Title</label>
                <input
                    className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 dark:placeholder-gray-600 bg-white dark:bg-gray-900 dark:text-white border rounded"
                    type="text" name="title" placeholder="Write something..." id="title" value={newNote.title} onChange={handleChange} />
            </div>

            <div className="mb-6">
                <label className="block text-sm dark:text-white font-medium mb-2" htmlFor="notes">Notes</label>
                <textarea
                    className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 dark:placeholder-gray-600 bg-white dark:bg-gray-900 dark:text-white border rounded"
                    name="notes" rows="5" placeholder="Write something..." id="notes" value={newNote.notes} onChange={handleChange} ></textarea>
            </div>

            <div className="flex justify-end text-center w-full mb-2">
                <button onClick={handleClick}
                    className="inline-block w-1/2 px-6 py-3 mr-2 font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded transition duration-200"
                    type="submit">Add Note</button>
            </div>
        </form>
    )
}

export default AddNote