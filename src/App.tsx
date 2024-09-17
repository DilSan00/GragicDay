import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

import Modal from "./components/Modal/Modal";
import AddGrafic from "./components/AddGrafic/AddGrafic";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="appContainer">
        <Home />
        <NavBar />
      </div>
      <Modal>
        <AddGrafic />
      </Modal>
    </div>
  );
}

export default App;
