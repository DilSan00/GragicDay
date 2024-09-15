import { Routes, Route } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import AddGrafic from "../components/AddGrafic/AddGrafic";
import Main from "../components/Main/Main";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route
        path="/addGrafic"
        element={
          <Modal>
            <AddGrafic />
          </Modal>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
