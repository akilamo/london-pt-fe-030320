import React, { useState, useEffect } from "react";
import "./App.css";
import UserCard from "./components/UserCard/UserCard";

/**
 * Exercise
 * 1. fetch data and store it in {users} state.
 * 2. Pass user data as {user} prop for UserCard component and render all users.
 * 3. In UserCard component, render user name, and user email. 
 * Inside UserCard add class "card" to wrapper.
 * 
 * NOTE: DB url - http://localhost:3000/contacts
 */

const App = () => {
  const [users, setUsers] = useState([]);

  if (users.length === 0) {
    fetch("http://localhost:3000/contacts")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }

  return users.map((user) => <UserCard user={user} />)
};

export default App;
