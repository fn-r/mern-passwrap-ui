import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

import Navbar from "../components/Navbar";
import NoteList from "../components/note/NoteList";
import AddNote from "../components/note/AddNote";
import EditNote from "../components/note/EditNote";

const Notes = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState(null)
    const [editNote, setEditNote] = useState(null)

    // Toggle note list menu
    const [listMenu, setListMenu] = useState('')
    const toggleListMenu = (e) => {
        e.preventDefault()
        setListMenu(() => (listMenu === 'hidden') ? '' : 'hidden')
    };

    return (
        <>
            <Navbar />
            <NoteList
                user={user}
                data={data}
                listMenu={listMenu}
                setData={setData}
                setEditNote={setEditNote}
                toggleListMenu={toggleListMenu}
            />
            <div className={`mx-auto lg:ml-60 ${((listMenu === 'hidden') ? '' : 'lg:mr-96')}`} >

                <section className="pt-8">
                    <div className="container px-4 mx-auto">
                        <button onClick={toggleListMenu} className="ml-auto flex items-center py-2 px-3 text-xs text-white bg-indigo-500 hover:bg-indigo-600 rounded">
                            <span className="mr-1">
                                <svg className="h-4 w-4 text-indigo-300" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.8334 0.666656H3.16675C1.75008 0.666656 0.666748 1.74999 0.666748 3.16666V14.8333C0.666748 16.25 1.75008 17.3333 3.16675 17.3333H14.8334C16.2501 17.3333 17.3334 16.25 17.3334 14.8333V3.16666C17.3334 1.74999 16.2501 0.666656 14.8334 0.666656ZM12.3334 9.83332H9.83342V12.3333C9.83342 12.8333 9.50008 13.1667 9.00008 13.1667C8.50008 13.1667 8.16675 12.8333 8.16675 12.3333V9.83332H5.66675C5.16675 9.83332 4.83342 9.49999 4.83342 8.99999C4.83342 8.49999 5.16675 8.16666 5.66675 8.16666H8.16675V5.66666C8.16675 5.16666 8.50008 4.83332 9.00008 4.83332C9.50008 4.83332 9.83342 5.16666 9.83342 5.66666V8.16666H12.3334C12.8334 8.16666 13.1667 8.49999 13.1667 8.99999C13.1667 9.49999 12.8334 9.83332 12.3334 9.83332Z" fill="currentColor"></path>
                                </svg>
                            </span>
                            <span>View All Notes</span>
                        </button>
                    </div>
                </section>

                <section className="py-8">
                    <div className="container px-4 mx-auto">
                        <div className="px-6 pb-6 pt-4 bg-white dark:bg-gray-800 shadow rounded">
                            {(editNote) ? (
                                <EditNote
                                    user={user}
                                    editNote={editNote}
                                    setEditNote={setEditNote}
                                    setData={setData}
                                />
                            ) : (
                                <AddNote
                                    user={user}
                                    setData={setData}
                                    setEditNote={setEditNote}
                                />
                            )}
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Notes