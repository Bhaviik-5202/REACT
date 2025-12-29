import React, { useState } from "react";
import "./Student.css";

function Student() {
  const [studentList, setStudentList] = useState([]);
  const [student, setStudent] = useState({
    name: "",
    branch: "",
    sem: "",
    rollNo: "",
    batch: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleAddEdit = () => {
    const { name, branch, sem, rollNo, batch } = student;
    if (!name || !branch || !sem || !rollNo || !batch) {
      alert("All Fields Required.");
    }

    if (editIndex !== null) {
      const updated = [...studentList];
      updated[editIndex] = student;
      setStudentList(updated);
      setEditIndex(null);
    } 
    else {
      setStudentList([...studentList, student]);
    }

    setStudent({ name: "", branch: "", sem: "", rollNo: "", batch: "" });
  };

  const handleEdit = (index) => {
    setStudent(studentList[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = studentList.filter((_, i) => i !== index);
    setStudentList(filtered);
    if (editIndex === index) {
      setStudent({ name: "", branch: "", sem: "", rollNo: "", batch: "" });
      setEditIndex(null);
    }
  };

  return (
    <div className="container">
      <h2>Student DATA</h2>

      <div className="form">
        <input
          value={student.name}
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
        />
        <input
          value={student.branch}
          type="text"
          placeholder="Enter Branch"
          onChange={(e) => setStudent({ ...student, branch: e.target.value })}
        />
        <input
          value={student.sem}
          type="text"
          placeholder="Enter Semester"
          onChange={(e) => setStudent({ ...student, sem: e.target.value })}
        />
        <input
          value={student.rollNo}
          type="text"
          placeholder="Enter Roll No"
          onChange={(e) => setStudent({ ...student, rollNo: e.target.value })}
        />
        <input
          value={student.batch}
          type="text"
          placeholder="Enter Batch"
          onChange={(e) => setStudent({ ...student, batch: e.target.value })}
        />
        <button onClick={handleAddEdit}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <table s>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Semester</th>
            <th>Roll No</th>
            <th>Batch</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((stu, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{stu.name}</td>
              <td>{stu.branch}</td>
              <td>{stu.sem}</td>
              <td>{stu.rollNo}</td>
              <td>{stu.batch}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button className="delete" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
