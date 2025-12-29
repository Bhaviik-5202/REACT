import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import StudentList from "./StudentList.jsx";
import StudentDetail from "./StudentDetail.jsx";
import StudentEdit from "./StudentEdit.jsx";
import StudentAdd from "./StudentAdd.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/studentList" element={<StudentList />} />
          <Route path="/student/:id" element={<StudentDetail />} />
          <Route path="/student/edit/:id" element={<StudentEdit />} />
          <Route path="/student/add" element={<StudentAdd />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
