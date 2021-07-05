import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import Create from "./Create";

function App() {

  const [notes, setnotes] = useState([]);
  function handleNotes(addednote){
    setnotes(prevNote => {
      return ([...prevNote, addednote])
    })
  }

  return (
    <div className="App">
      
      <Header />
      <Create added={handleNotes}/>
      {notes.map((noteObj) => (
        <Note
          title={noteObj.title}
          content={noteObj.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
