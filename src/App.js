import "./App.css";
import { useState } from "react";

function App() {
  const [name, SetName] = useState("");
  const [age, SetAge] = useState(0);
  const [salary, SetSalary] = useState(0);
  const [users, SetNewUser] = useState([]);
  const [errorMessage, SetErrorMessage] = useState("");
  const regex = /^[a-zA-Z0-9_ ]*$/;

  const handleUserName = (event) => {
    SetName(event.target.value);
  };
  const handleUserAge = (event) => {
    SetAge(event.target.value);
  };
  const handleUserSalary = (event) => {
    SetSalary(event.target.value);
  };
  const submitHandle = (event) => {
    event.preventDefault();

    const existingUser = users.find((user) => user.name === name);
    if (existingUser) {
      SetErrorMessage("Duplicated user! please add another user");
      return;
    }
    if (age <= 1 || age >= 100) {
      SetErrorMessage("Invalid age! Please input user's age");
      return;
    }
    if (!regex.test(name)) {
      SetErrorMessage("Invalid name! Please re-enter user's name");
      return;
    }

    const newID = users.length + 1;
    const newUser = { id: newID, name: name, age: age, salary: salary };
    SetNewUser([...users, newUser]);
    SetName("");
    SetAge("");
    SetSalary("");
    SetErrorMessage("");
  };
  const resetUser = (event) => {
    SetName("");
    SetAge("");
    SetSalary("");
  };

  return (
    <div className="App">
      {errorMessage && <p>{errorMessage}</p>}
      <div className="userform">
        <h1>User</h1>
        <form onSubmit={submitHandle}>
          <label>
            Name:
            <input
              type="text"
              placeholder="Add user name"
              value={name}
              onChange={handleUserName}
              required
            />
          </label>{" "}
          <br />
          <label>
            Age:
            <input
              type="number"
              placeholder="Add user age"
              value={age}
              onChange={handleUserAge}
              required
            />
          </label>{" "}
          <br />
          <label>
            Salary:
            <input
              type="number"
              placeholder="Add user salary"
              value={salary}
              onChange={handleUserSalary}
              required
            />
          </label>
          <br />
          <button onSubmit={submitHandle}>Add</button>
          <button onClick={resetUser}>Reset User</button>
        </form>
      </div>
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
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
