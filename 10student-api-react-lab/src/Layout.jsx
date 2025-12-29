import React from "react";
import { Link, Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link
            className="navbar-brand text-uppercase fw-bold text-primary"
            to="/"
          ></Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/studentList">
                  Student
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="outlet-container">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
