import React, { useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { NotesContext } from './NotesContext';

function Notes() {
  const { notes, addNote, deleteNote, editNote, joinRoom } = useContext(NotesContext);
  const [note, setNote] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [roomId, setRoomId] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const room = urlParams.get('room');
    if (room) {
      setRoomId(room);
      joinRoom(room);
    }
  }, [joinRoom]);

  const handleAddNote = () => {
    if (note) {
      if (editIndex !== null) {
        editNote(editIndex, note);
        setEditIndex(null);
        toast.success('Note updated successfully!');
      } else {
        addNote(note);
        toast.success('Note added successfully!');
      }
      setNote('');
    }
  };

  const handleEditNote = (index) => {
    setNote(notes[index]);
    setEditIndex(index);
    toast.info('Note ready for editing');
  };

  return (
    <div className="mt-4">
      <h2 className="text-center">Notes - Room: {roomId}</h2>
      {!roomId && (
        <div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              placeholder="Enter room ID"
            />
            <button 
              className="btn btn-primary" 
              onClick={() => {
                joinRoom(roomId);
                window.history.pushState({}, '', `?room=${roomId}`);
              }}
            >
              Join Room
            </button>
          </div>
        </div>
      )}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your note"
        />
        <button className="btn btn-primary" onClick={handleAddNote}>
          {editIndex !== null ? 'Update Note' : 'Add Note'}
        </button>
      </div>
      <ul className="list-group">
        {notes
          .filter(n => n.text.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((n, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center note-item">
            <div>
              <div>{n.text}</div>
              <small className="text-muted">{n.timestamp}</small>
            </div>
            <div>
              <button className="btn btn-warning btn-sm" onClick={() => handleEditNote(index)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => {
                deleteNote(index);
                toast.error('Note deleted');
              }}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
