import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function StudentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://6881dcdf66a7eb81224c58b1.mockapi.io/Product/" + id)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img className="img-fluid" src={data.studentImage} />
          </div>
          <div className="col">
            <h1>Student Name: {data.studentName}</h1>
            <h2>Student EnrollNo: {data.studentEnrollNo}</h2>
            <Link className="btn btn-primary" to="/studentList">
              Back
            </Link>
            <button
              onClick={() => {
                fetch(
                  "https://6881dcdf66a7eb81224c58b1.mockapi.io/Product/" + id,
                  { method: "DELETE" }
                )
                  .then((res) => res.json())
                  .then((res) => navigate("/studentList"));
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDetail;
