import React from "react";
import Child from "./Child.jsx";

function Parent(props) {
  return (
    <div className="">
      <Child name="홍길동" age={25} />
      <Child name="김철수" age={23} />
      <Child name="영희" age={21} />
    </div>
  );
}

export default Parent;
