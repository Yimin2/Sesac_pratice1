import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {jwtDecode} from "jwt-decode";
import {useNavigate} from "react-router-dom";
import {logout} from "../store/authSlice.js";

function Profile(props) {
    const token = useSelector((state) => state.auth.token)
    const [decodeToken, setDecodeToken] = useState(null)
    const navigate = useNavigate()
    const distpatch = useDispatch()

    useEffect(() => {
        if (token) {
            setDecodeToken(jwtDecode(token))
        }
    }, [token]);

    function handleLogout() {
        distpatch(logout())
        alert("로그아웃되었습니다.")
    }

    return (<div>
        {token ? token : "로그인을 해주세요."}
        {decodeToken ? `이메일:${decodeToken.email}` : "로그인을 해주세요."}
        <div>
            <button className="border-2 m-2 p-2 cursor-pointer"
                    onClick={() => {
                        handleLogout()
                    }}>로그아웃
            </button>
        </div>
    </div>);
}

export default Profile;