import "./App.css";
import { useState } from "react";
import Table from "./component/Table";
import Form from "./component/Form";

function App1() {
  //   const [user, setUser] = useState({
  //     name: "",
  //     age: undefined,
  //     salary: undefined,
  //     key: "",
  //   });
  const [users, setUsers] = useState([]);
  const pushUserToUsers = (user) => {
    setUsers([...users].concat([user]));
  };

  //   const [errorMessage, setErrorMessage] = useState("");
  //   const regex = /^[a-zA-Z0-9_ ]*$/;

  //   const handleUserFieldChange = (event, key) => {
  //     setUser({
  //       ...user,
  //       [key]: event.target.value,
  //     });
  //   };
  //   const submitHandle = (event) => {
  //     event.preventDefault();

  //     const existingUser = users.find((u) => u.name === user.name);
  //     if (existingUser) {
  //       setErrorMessage("Duplicated user! please add another user");
  //       return;
  //     }
  //     if (user.age <= 1 || user.age >= 100) {
  //       setErrorMessage("Invalid age! Please input user's age");
  //       return;
  //     }
  //     if (!regex.test(user.name)) {
  //       setErrorMessage("Invalid name! Please re-enter user's name");
  //       return;
  //     }

  //     setUsers([...users, user]);
  //     setErrorMessage("");
  //   };
  //   const resetUser = (event) => {
  //     setUser({
  //       name: "",
  //       age: undefined,
  //       salary: undefined,
  //     });
  //   };

  return (
    <div className="App">
      <Form submit={pushUserToUsers} />
      <Table users={users} />
    </div>
  );
}

export default App1;
