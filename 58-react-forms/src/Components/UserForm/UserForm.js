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
    postUser(user);
  //   setUser({
  //     firstName: "",
  //     lastName: "",
  //     age: 0,
  //     gender: "",
  //   });
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

        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};


// const UserForm = () => {
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     age: 0,
//     genders: "",
//   });
//   const postUser = async (user) => {
//     await fetch("http://localhost:3001/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(user),
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log("OK");
//           return response;
//         } else {
//           console.log("Oops something went wrong");
//         }
//       })
//       .catch((error) => {
//         console.log("Ooops", error);
//       });
//   };
//   const userAdd = (event) => {
//     setUser({ ...user, [event.target.name]: event.target.value });
//     event.target.value = "";
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     postUser(user);
//   };
//   return (
//     <div className="state">
//       <form onSubmit={handleSubmit} className="userForm">
//         <label htmlFor="">First name:</label>
//         <input
//           value={user.firstName}
//           name="firstName"
//           className="firstName"
//           type="text"
//           placeholder="First Name"
//           onChange={userAdd}
//           required
//         />
//         <label htmlFor=""> Last name:</label>
//         <input
//           value={user.lastName}
//           name="lastName"
//           className="lastName"
//           type="text"
//           placeholder="Last Name"
//           onChange={userAdd}
//           required
//         />
//         <label htmlFor=""> What is your age? </label>
//         <input
//           value={user.age}
//           name="age"
//           className="age"
//           type="number"
//           placeholder="Age"
//           onChange={userAdd}
//           required
//         />
//         <label htmlFor=""> Select your gender:</label>
//         <select
//           type="select"
//           className="gender"
//           name="genders"
//           value={user.gender}
//           onChange={userAdd}
//           required
//         >
//           <option> - - - - - - - </option>
//           <option value="male">male</option>
//           <option value="female">female</option>
//           <option value="Prefer, not to say">Prefer, not to say</option>
//         </select>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };



export default UserForm;
