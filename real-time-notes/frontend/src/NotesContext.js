import React, { createContext, useState, useEffect } from 'react';
import { io } from 'socket.io-client';

// Create a Context for the notes
export const NotesContext = createContext();

// Create a provider component
export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [roomId, setRoomId] = useState(null);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io('http://localhost:5000');
        setSocket(newSocket);

        newSocket.on('noteUpdated', (note) => {
            setNotes([note]);
        });

        return () => newSocket.close();
    }, []);

    const joinRoom = (roomId) => {
        if (socket) {
            socket.emit('joinRoom', roomId);
            setRoomId(roomId);
        }
    };

    const addNote = (note) => {
        const noteWithTimestamp = {
            text: note,
            timestamp: new Date().toLocaleString()
        };
        setNotes([...notes, noteWithTimestamp]);
    };

    const deleteNote = (index) => {
        const newNotes = notes.filter((_, i) => i !== index);
        setNotes(newNotes);
    };

    const editNote = (index, updatedNote) => {
        const newNotes = notes.map((note, i) => 
            i === index ? { ...note, text: updatedNote, timestamp: new Date().toLocaleString() } : note
        );
        setNotes(newNotes);
    };

    return (
        <NotesContext.Provider value={{ notes, addNote, deleteNote, editNote, joinRoom }}>
            {children}
        </NotesContext.Provider>
    );
};
