import React from "react";
import User from "./User.jsx";

function Container() {
  const array = [1, 2, 3, 4, 5];

  const userArray = [
    { id: 1, name: "우영" },
    { id: 2, name: "길동" },
    { id: 3, name: "철수" },
    { id: 4, name: "짱구" },
    { id: 5, name: "영희" },
  ];

  return (
    <div>
      {array.map((e) => {
        return <li>{e}</li>;
      })}

      {userArray.map((e) => {
        return (
          <li>
            {e.id} - {e.name}
          </li>
        );
      })}
      {userArray.map((userElement) => {
        return <User user={userElement} />;
      })}
    </div>
  );
}

export default Container;
