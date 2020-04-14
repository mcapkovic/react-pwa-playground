import React, { useState } from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import NewNote from "./components/NewNote";
import User from "./components/User";
import Notes from "./components/Notes";
import { APIProvider } from "./api/API-context";
import APIStatus from "./components/APIStatus";

const tabs = ["login", "register", "note", "newNote"];

function App() {
  const [activeTab, setActiveTab] = useState("note");
  return (
    <div className="App">
      <APIProvider>
        <APIStatus />


        <User />
        <hr />

        <div className="tab-strip">
          {tabs.map((tab) => (
            <button
              className={`tab-strip__tab ${
                activeTab === tab ? "tab-strip__tab--active" : ""
              }`}
              key={tab}
              onClick={() => {
                setActiveTab(tab);
              }}
            >
              {tab}
            </button>
          ))}
        </div>


        <div style={{ height: "300px" }}>
          {activeTab === "register" && <Register />}
          {activeTab === "login" && <Login />}
          {activeTab === "newNote" && <NewNote />}
          {activeTab === "note" && <Notes />}
        </div>
      </APIProvider>
    </div>
  );
}

export default App;
