import React, { useState } from "react";

export default function Form({ submit }) {
  const [user, setUser] = useState({
    name: "",
    age: undefined,
    salary: undefined,
    key: "",
  });

  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const regex = /^[a-zA-Z0-9_ ]*$/;

  const handleUserFieldChange = (event, key) => {
    setUser({
      ...user,
      [key]: event.target.value,
    });
  };
  const submitHandle = (event) => {
    event.preventDefault();

    const existingUser = users.find((u) => u.name === user.name);
    if (existingUser) {
      setErrorMessage("Duplicated user! please add another user");
      return;
    }
    if (user.age <= 1 || user.age >= 100) {
      setErrorMessage("Invalid age! Please input user's age");
      return;
    }
    if (!regex.test(user.name)) {
      setErrorMessage("Invalid name! Please re-enter user's name");
      return;
    }

    setUsers([...users, user]);
    setErrorMessage("");
  };
  const resetUser = (event) => {
    setUser({
      name: "",
      age: undefined,
      salary: undefined,
    });
  };
  return (
    <div className="userform">
      {errorMessage && <p>{errorMessage}</p>}
      <h1>User</h1>
      <form onSubmit={submitHandle}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Add user name"
            value={user.name}
            onChange={(event) => handleUserFieldChange(event, "name")}
            required
          />
        </label>{" "}
        <br />
        <label>
          Age:
          <input
            type="number"
            placeholder="Add user age"
            value={user.age}
            onChange={(event) => handleUserFieldChange(event, "age")}
            required
          />
        </label>{" "}
        <br />
        <label>
          Salary:
          <input
            type="number"
            placeholder="Add user salary"
            value={user.salary}
            onChange={(event) => handleUserFieldChange(event, "salary")}
            required
          />
        </label>
        <br />
        <button onSubmit={submitHandle}>Add</button>
        <button onClick={resetUser}>Reset User</button>
      </form>
    </div>
  );
}
