import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">
          Welcome to Faculty Portal
        </h1>
        <p className="lead text-muted mt-3">
          Manage and explore faculty details easily. Add new members, edit
          information, and view all faculties at one place.
        </p>
        <Link to="/faculties" className="btn btn-primary btn-lg mt-4">
          View Faculties
        </Link>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Easy Management</h5>
              <p className="card-text">
                Quickly add, edit, or remove faculty details with a simple
                interface.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Up-to-Date Data</h5>
              <p className="card-text">
                All information is stored online so you can access it anytime.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Responsive Design</h5>
              <p className="card-text">
                Works great on desktop, tablet, and mobile devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
