import React, { useState } from "react";
import { useSaveData } from "../api/API";

function NewNote(props) {
  const [note, setNote] = useState("");
  const saveData = useSaveData();

  const saveNote = () => {
    saveData({note});
  };
  return (
    <div>
      <h1>new note</h1>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} />
      <br />
      <button onClick={saveNote}>save note</button>
    </div>
  );
}
export default NewNote;
