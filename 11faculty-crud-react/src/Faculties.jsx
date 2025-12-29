import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Faculties() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://6881dcdf66a7eb81224c58b1.mockapi.io/Product/")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <>
      <div className="d-flex justify  -content-between align-items-center mb-3">
        <h2>Faculties</h2>
        <div style={{
          marginRight : "50px"
        }}>
        <Link className="btn btn-info" to="/faculty/add">
          Add
        </Link>
        </div>
      </div>

      {data.length === 0 ? (
        <p>No faculties found.</p>
      ) : (
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((fac) => (
                <tr key={fac.id}>
                  <td>{fac.facultyName}</td>
                  <td className="col-3">
                    <img
                      className="img-fluid"
                      src={fac.facultyImage || "/placeholder.jpg"}
                      alt={fac.facultyName}
                    />
                  </td>
                  <td>
                    <Link
                      className="btn btn-primary btn-sm"
                      to={`/faculty/${fac.id}`}
                    >
                      Detail
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="btn btn-warning btn-sm"
                      to={`/faculty/edit/${fac.id}`}
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Faculties;
