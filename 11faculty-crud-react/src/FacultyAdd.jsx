import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FacultyAdd() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  return (
    <>
      <div className="container mt-5">
        <div class="form-group row">
          <label for="text1" class="col-4 col-form-label">
            Enter Faculty Name
          </label>
          <div class="col-8">
            <input
              onChange={(e) => {
                setData({ ...data, facultyName: e.target.value });
              }}
              id="text1"
              name="text1"
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">
            Enter Faculty Code
          </label>
          <div class="col-8">
            <input
              onChange={(e) => {
                setData({ ...data, facultyCode: e.target.value });
              }}
              id="text"
              name="text"
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="text2" class="col-4 col-form-label">
            Enter Faculty Image
          </label>
          <div class="col-8">
            <input
              onChange={(e) =>
                setData({ ...data, facultyImage: e.target.value })
              }
              id="text2"
              name="text2"
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="offset-4 col-8">
            <button
              onClick={() => {
                const apiUrl =
                  "https://6881dcdf66a7eb81224c58b1.mockapi.io/Product/";
                fetch(apiUrl, {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                  .then((res) => res.json())
                  .then((res) => navigate("/faculties"));
              }}
              name="submit"
              class="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FacultyAdd;
