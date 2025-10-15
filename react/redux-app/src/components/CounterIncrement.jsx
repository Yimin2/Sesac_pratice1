import React from 'react';
import {increment} from "../store/counterSlice.js";
import {useDispatch} from "react-redux";

function CounterIncrement(props) {

    const dispatch = useDispatch()

    function handleClick() {
        dispatch(increment())
    }

    return (<div>
        <button onClick={handleClick}>1 증가</button>

    </div>);
}

export default CounterIncrement;