import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {incrementByAmount} from "../store/counterSlice.js";

function CounterIncrementByAmount() {
    const dispatch = useDispatch()

    const [payload, setPayload] = useState(0)

    return (<div>
        <input type="number"
               value={payload}
               onChange={(e) => (setPayload(Number(e.target.value)))}/>
        <button onClick={() => (dispatch(incrementByAmount(payload)))}>증가</button>
    </div>);
}

export default CounterIncrementByAmount;