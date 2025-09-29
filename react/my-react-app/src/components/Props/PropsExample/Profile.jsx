import React from "react";

function Profile({ name, age, isAdmin }) {
  return (
    <div>
      {/*<h1>
        저는 {props.user.name}이고, {props.user.age}세 이며, 관리자 여부는
        {props.user.isAdmin}입니다.
      </h1>*/}
      {/*<h2>
        저는 {props.name}이고, {props.age}세 이며, 관리자 여부는 {props.isAdmin}
        입니다.
      </h2>*/}
      저는 {name}이고, {age}세 이며, 관리자 여부는 {isAdmin}입니다.
    </div>
  );
}

export default Profile;
