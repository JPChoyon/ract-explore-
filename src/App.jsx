import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./counter";
import Comment from "./comment";

function App() {
  function handleclick() {
    alert("clicked you to the button");
  }

  return (
    <>
      <h1> React Project</h1>
      <Comment></Comment>
      <Counter></Counter>
      <button onClick={handleclick}>Click Me</button>
    </>
  );
}

export default App;
