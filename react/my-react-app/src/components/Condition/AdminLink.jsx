import React from "react";

function AdminLink({ isAdmin }) {
  return (
    <div>
      <span className="m-5">
        현재 권한 : {isAdmin ? "관리자" : "일반 사용자"}
      </span>
      {isAdmin && <a> 관리자 페이지 이동</a>}
    </div>
  );
}

export default AdminLink;
