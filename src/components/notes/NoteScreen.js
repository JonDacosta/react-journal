import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            

            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Ponle título"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="¿Qué ha pasado hoy?"
                    className="notes__textarea"
                >
                </textarea>

                <div className="notes__image">
                    <img
                        src="https://images.unsplash.com/photo-1465328610639-388f315eb31b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                        alt="img"

                    ></img>
                </div>
            </div>
        </div>
    )
}
