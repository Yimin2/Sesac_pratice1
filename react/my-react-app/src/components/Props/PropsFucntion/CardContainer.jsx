import React from "react";
import Card from "./Card.jsx";

function CardContainer() {
  function handleClick(user) {
    alert("클릭");
    console.log(user);
  }
  const user = {
    name: "홍길동",
    age: 25,
  };

  return (
    <div>
      CardContainer
      <Card user={user} onClickProps={handleClick} />
    </div>
  );
}

export default CardContainer;
