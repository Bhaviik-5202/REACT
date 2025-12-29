import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function StudentList() {
  const apiUrl = "https://6881dcdf66a7eb81224c58b1.mockapi.io/Product";
  const [studentList, setStudetnList] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setStudetnList(res))
      .catch((err) => console.error("Fetch error:", err));
    // .finally(setLoading(false));
  }, []);

  return (
    <>
      <table
        style={{
          border: "2px solid red",
        }}
      >
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Stu. Name</th>
            <th>Stu. Image</th>
            <th>Stu. EnrollNo</th>
            {/* <th>Stu SPI</th> */}
            <th>Stu. Email</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((stu) => (
            <tr key={stu.id}>
              <td>{stu.studentName}</td>
              <td className="col-3">
                <img
                  className="img-fluid"
                  src={stu.studentImage || "/placeholder.jpg"}
                  alt={stu.studentName}
                />
              </td>
              <td>{stu.studentSPI}</td>
              <td>{stu.studentEmail}</td>
              <td>
                <Link
                  className="btn btn-primary btn-sm"
                  to={`/student/${stu.id}`}
                >
                  Detail
                </Link>
              </td>
              <td>
                <Link
                  className="btn btn-warning btn-sm"
                  to={`/student/edit/${stu.id}`}
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default StudentList;
