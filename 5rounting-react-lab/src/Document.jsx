import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mypage from "./Mypage.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";

function Document() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mypage />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Document;
