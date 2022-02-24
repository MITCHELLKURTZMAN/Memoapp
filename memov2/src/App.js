import NotesList from "./components/NotesList";
import {nanoid} from 'nanoid';
import {useState} from "react";


const App = () => {
  const [notes, setNotes] = useState([
   { id: nanoid(),
    text: "note 1",
    date: "february 23,2022"
   },
   { id: nanoid(),
    text: "note 2",
    date: "february 26,2022"
   },
   { id: nanoid(),
    text: "note 3",
    date: "february 24,2022"
   },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote= {
      id: nanoid(),
      text: text, 
      date: date.toLocaleDateString()

    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
   const newNotes = notes.filter((note) => note.id !== id);
   setNotes(newNotes);
    }

  return (
  
  <div className="container">
    <NotesList 
    notes={notes}
    handleAddNote={addNote}
    handleDeleteNote={deleteNote}
    />
  </div>
  );
};

export default App;
