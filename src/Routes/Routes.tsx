import { Routes, Route } from "react-router-dom";
import Main from "../components/Main/Main";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
    </Routes>
  );
};

export default AppRoutes;
