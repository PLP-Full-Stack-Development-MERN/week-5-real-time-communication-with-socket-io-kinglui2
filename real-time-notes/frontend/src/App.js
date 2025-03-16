import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Notes from './Notes';
import { NotesProvider } from './NotesContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <NotesProvider>
      <div className="App">
        <div className="container mt-5">
          <header className="App-header text-center">      
            <h1 className="mb-4">Real-Time Notes</h1>
            <Notes />
          </header>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </NotesProvider>
  );
}

export default App;
