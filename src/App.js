import React from "react";
import Users from "./components/Users";
import { useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const users = useSelector((state) => state.users);
  return (
    <div className="App">
      <Users />
      <div className="wrapper">
        <h1>User List</h1>
        <ul className="users__list">
          {users.map((user) => (
            <li key={user.firstName}>
              <div className="user__details">
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
                <div className="button__group">
                  <button className="button">Edit</button>
                  <button className="button">Delete</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
