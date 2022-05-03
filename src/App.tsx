import React from "react";
import "./App.css";
import CharactersScreen from "./views/characters";

function App() {
  return (
    <div className="core-container">
      {/*
       * Every core-container child will float over the other child,
       * Here you can add overlays like dialogs, popups, modals, etc.
       */}
      <CharactersScreen />
    </div>
  );
}

export default App;
