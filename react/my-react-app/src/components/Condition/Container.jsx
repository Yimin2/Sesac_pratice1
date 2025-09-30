import React from "react";
import LoginStatus from "./LoginStatus.jsx";

function Container() {
  return (
    <div>
      <LoginStatus isLogin={true} name="홍길동" isAdmin={true} />
      <LoginStatus isLogin={false} name="김철수" isAdmin={false} />
    </div>
  );
}

export default Container;
