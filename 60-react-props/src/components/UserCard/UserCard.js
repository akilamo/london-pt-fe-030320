import React from "react";

const UserCard = (props) => {
  const { user } = props;
  const { name, email, id } = user;
  return (
    <div className="card">
      <ul key={id}>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
      </ul>

    </div>
  );
};

export default UserCard;
