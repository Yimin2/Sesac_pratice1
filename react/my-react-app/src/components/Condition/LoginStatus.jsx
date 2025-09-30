import React from "react";
import AdminLink from "./AdminLink.jsx";

function LoginStatus({ isLogin, name, isAdmin }) {
  return (
    <div>
      <span>로그인 상태 : {isLogin ? "로그인" : "로그아웃"} </span>
      <button className="border-2 m-2">
        {isLogin ? "로그아웃" : "로그인"}
      </button>
      <p className="m-5">
        {isLogin ? `${name}님 환영합니다.` : "로그인 해주세요"}
      </p>

      <AdminLink isAdmin={isAdmin} />
    </div>
  );
}

export default LoginStatus;
