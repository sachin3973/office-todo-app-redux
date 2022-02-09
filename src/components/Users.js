import React from "react";
import "./css/Users.css";

const Users = () => {
  return (
    <div className="user__container">
      <h1>Todo List App</h1>
      <div className="form__container">
        <h3>Enter User details</h3>
        <form>
          <label htmlFor="firstName"></label>
          <input
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
            data-testid="firstName"
          />
          <label htmlFor="lastName"></label>
          <input
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
            data-testid="lastName"
          />
          <button
            data-testid="submitButton"
            className="submit__btn"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Users;
