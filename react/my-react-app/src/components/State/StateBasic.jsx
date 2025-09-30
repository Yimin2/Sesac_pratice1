import React, { useState } from "react";
// 상태(state)를 사용하기 위한 모듈

function StateBasic(props) {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  function handleClick() {
    const newArray = [...array, 4];

    setArray(newArray);
  }
  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        원소 추가
      </button>
      {array.map((e) => {
        return <li>{e}</li>;
      })}
    </div>
  );
}

export default StateBasic;
