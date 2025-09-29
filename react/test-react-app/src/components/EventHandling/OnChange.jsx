import React from 'react';


function handleChange(e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
}

function handleNumberChange(e) {
    if (e.target.value < 10) {
        console.log("10보다 작은 수 입니다.")
    }
}

function OnChange(props) {
    return (
        <div>
            Change 이벤트
            <input type="number"
                   className="border-3 m-2"
                   onChange={(e) => {
                       handleNumberChange(e)
                   }}/>
            <input type="text"
                   className="border-3 m-2"
                   onChange={(e) => {
                       handleChange(e)
                   }}
            />
        </div>
    );
}

export default OnChange;

