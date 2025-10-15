import React from 'react';
import {useDispatch} from "react-redux";
import {reset} from "../store/counterSlice.js";

function CounterReset(props) {
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(reset())
    }
    return (<div>
        <button onClick={() => (handleClick())}>리셋</button>
    </div>);
}

export default CounterReset;