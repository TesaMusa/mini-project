import React from "react";
import { useState } from "react";
import students from "../data/students.json";

function Students() {
  const [studentsToDisplay, setStudents] = useState(students);

  // Deleting students
  const deleteStudents = (studentId) => {
    const newList = studentsToDisplay.filter((studentObj) => {
      return studentObj.id !== studentId;
    });
    setStudents(newList);
  };

  return (
    <>
      <section>
        <h1 className="my-students">Students list</h1>
       
        <table>
          <thead>
            <tr>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {studentsToDisplay.map((element) => (
              <tr key={element.id}>
                <td>{element.last_name}</td>
                <td>{element.gender}</td>
                <td>{element.email}</td>
                <td>
                  <button onClick={() => deleteStudents(element.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Students;
