import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FacultyEdit() {
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
      <div className="container mt-5">
        <div class="form-group row">
          <label for="text1" class="col-4 col-form-label">
            Enter Faculty Name :
          </label>
          <div class="col-8">
            <input
              value={data.facultyName}
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
            Enter Faculty Code :
          </label>
          <div class="col-8">
            <input
              value={data.facultyCode}
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
            Enter Faculty Image(URL) :
          </label>
          <div class="col-8">
            <input
              value={data.facultyImage}
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
                  "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/" + id;
                fetch(apiUrl, {
                  method: "PUT",
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

export default FacultyEdit;
