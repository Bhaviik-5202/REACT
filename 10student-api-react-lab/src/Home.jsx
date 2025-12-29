import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <h1>Student Here</h1>
        <Outlet />
      </main>
    </>
  );
}

export default Home;
