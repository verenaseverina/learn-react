import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import PostList from "./components/PostList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <PostList />
    </div>
  );
}

export default App;
