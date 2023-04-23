import React from "react";

export default function Table(users) {
  return (
    <div className="table">
      <h1>List of user</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
