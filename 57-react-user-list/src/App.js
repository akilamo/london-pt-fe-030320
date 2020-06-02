import React, {useState} from "react";

/**
 * Create a User List app
 *
 * 1. create a state where you will store your users.
 * 2. I want to render all users from my state.
 * 3. add button with class "newUser"
 * 4. when I click on a "newUser" button I want to fetch a new user,
 * add it to state.
 * 5. On user element I want to have full name and button to remove a user.
 * 6. when I click "remove" button, it should remove selected user from my state.
 *
 * NOTE: API for random user - "https://randomuser.me/api/"
 *
 * FEEL FREE TO STYLE YOUR APP WITH CSS
 */

function App() {
  const [users, setUsers] = useState([]);

  const URL = "https://randomuser.me/api/";
  const fetchUsers = async () => {
    return await fetch(URL)
      .then((response) => response.json())
      .then((data) => data)
      .then((user) => user.results)
      .then((userIndex) => userIndex[0])
      .then((userName) => userName.name)
      .catch((error) => error);
  };

  const addUser = async () => {
    const newUser = await fetchUsers();
    setUsers([...users, newUser]);
    console.log(newUser);
  };

  const removeUser = (user) => setUsers(users.filter((u) => u !== user));

  return (
    <div>
      <button className="newUser" onClick={() => addUser()}>
        Username
      </button>
      <ul>
        {users.map((user) => (
          <>
            <li>
              {user.first} {user.last}
            </li>
            <button className="removeUser" onClick={() => removeUser(user)}>
              Remove user
            </button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
