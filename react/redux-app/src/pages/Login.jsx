import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {login} from "../store/authSlice.js";

function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const token = useSelector((state) => {
        return state.auth.token
    })
    const error = useSelector((state) => state.auth.error)

    useEffect(() => {
        if(token) {
            alert("로그인 되었습니다")
            navigate("/")
        }
    }, [token, navigate]);

    useEffect(() => {
        if(error) {
            alert(`로그인 실패: ${error.error_description || error.msg || "알 수 없는 오류"}`)
        }
    }, [error]);
    function handleSubmit (e) {
        e.preventDefault()
        dispatch(login({email: email, password: password}))
    }
    return (<div>
        <form onSubmit={(e) => {
            handleSubmit(e)
        }}>
            <input type="email"
                   value={email}
                   onChange={(e) => {
                       setEmail(e.target.value)
                   }}/>
            <input type="password"
                   value={password}
                   onChange={(e) => {
                       setPassword(e.target.value)
                   }}/>
            <input type="submit"
                   value="로그인"/>

        </form>
    </div>);
}

export default Login;