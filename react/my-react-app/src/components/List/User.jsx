import React from "react";

function User(user) {
  return (
    <div>
      <li>
        {user.id} - {user.name}
      </li>
    </div>
  );
}

export default User;
