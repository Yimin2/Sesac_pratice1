import React from "react";

function PropsChild({ name, age }) {
  return (
    <div>
      이름은 {name}이고 나이는 {age} 입니다.
    </div>
  );
}

export default PropsChild;
