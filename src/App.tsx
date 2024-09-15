import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div >
      <Header />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Home />
        <NavBar />
      </div>
    </div>
  );
}

export default App;
