import React, { useState } from "react";
import { postUser } from "../../API.js";

const UserForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]:
        event.target.type === "number"
          ? parseInt(event.target.value)
          : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(user.firstName && user.lastName && user.gender) { 
      postUser(user);
    }
      setUser({
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
    });
  };

  return (
    <div className="state">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="firstName"
          name="firstName"
          placeholder="First Name"
          value={user.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="lastName"
          name="lastName"
          placeholder="Last Name"
          value={user.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          className="age"
          name="age"
          min="0"
          max="100"
          value={user.age}
          onChange={handleChange}
          required
        />
        <select
          className="gender"
          name="gender"
          value={user.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select your option</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};


export default UserForm;
