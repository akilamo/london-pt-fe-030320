import React from "react";

const UserCard = (props) => {
  const { user } = props;
  const { name, email, id } = user;
  return (
    <div className="card">
      <ul key={id}>
        <li>name: {name}</li>
        <li>email: {email}</li>
      </ul>
    </div>
  );
};

export default UserCard;
