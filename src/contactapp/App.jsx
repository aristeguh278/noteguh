import React from "react";
import { Routes, Route } from "react-router-dom";
import Noteguh from "./Noteguh";
import DetailContent from "./components/molecues/DetailContent";
import Aris from "./components/Aris";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Aris/>} />
        <Route path="/detail/:id" element={<DetailContent />} />
      </Routes>
    </>
  );
};

export default App;
