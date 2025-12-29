import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";  
import Faculties from "./Faculties";
import FacultyDetail from "./FacultyDetail";
import FacultyEdit from "./FacultyEdit";
import FacultyAdd from "./FacultyAdd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/faculties" element={<Faculties />} />
        <Route path="/faculty/:id" element={<FacultyDetail />} />
        <Route path="/faculty/edit/:id" element={<FacultyEdit />} />
        <Route path="/faculty/add" element={<FacultyAdd />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
