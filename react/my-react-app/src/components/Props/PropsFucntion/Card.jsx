import React from "react";

function Card({ user, onClickProps }) {
  return (
    <div>
      Card 이름은 {user.name}, 나이는 {user.age}
      <button
        className="border-2 m-2 cursor-pointer"
        onClick={() => {
          onClickProps();
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default Card;
