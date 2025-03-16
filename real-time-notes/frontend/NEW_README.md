# Real-Time Notes Application

This is a real-time collaborative note-taking application built with React, Express, and Socket.io. It allows multiple users to create, edit, and view notes in real-time within specific rooms.

## Features

- **Real-Time Collaboration**: Users can join rooms and collaborate on notes in real-time.
- **Note Management**: Add, edit, and delete notes with ease.
- **Search Functionality**: Search through notes using keywords.
- **Timestamps**: Each note includes a timestamp indicating when it was created or last modified.
- **User Feedback**: Toast notifications provide feedback for actions like adding, editing, or deleting notes.
- **Responsive Design**: The application is optimized for both desktop and mobile devices.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd real-time-notes
   ```

2. **Install Dependencies**:
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```

3. **Start the Servers**:
   - Backend:
     ```bash
     cd backend
     npm start
     ```
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```

4. **Access the Application**:
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Join a Room**:
   - Enter a room ID and click "Join Room" to start collaborating.

2. **Add Notes**:
   - Enter your note in the input field and click "Add Note".

3. **Edit Notes**:
   - Click the "Edit" button next to a note to modify it.

4. **Delete Notes**:
   - Click the "Delete" button next to a note to remove it.

5. **Search Notes**:
   - Use the search bar to filter notes by keywords.

## Technologies Used

- **Frontend**: React, Bootstrap, Socket.io-client
- **Backend**: Express, Socket.io
- **State Management**: React Context API
- **Notifications**: react-toastify

## Future Enhancements

- **Room Management**: Display active rooms and allow users to switch between them.
- **User Authentication**: Implement user authentication for personalized note-taking.
- **Persistent Storage**: Save notes to a database for persistence across sessions.
- **Rich Text Editing**: Allow formatting of notes (bold, italics, bullet points).

## Contributing

Contributions are welcome! Please follow the standard GitHub workflow:
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
