import React from "react";
import PropsChild from "./PropsChild.jsx";

function PropsParent() {
  const user = { name: "영희", age: 25 };

  return (
    <div>
      <PropsChild name={user.name} age={user.age} />
    </div>
  );
}

export default PropsParent;
