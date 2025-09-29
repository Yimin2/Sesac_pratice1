import React from 'react';

function handleParamClick(param) {
    alert(param)
}

function OnClick() {


    function handleClick() {
        alert("클릭")
    }

    return (
        <div>
            <button
                className= "bg-amber-400 border-2 p-2 cursor-pointer"
                onClick={() => {
                handleParamClick("helloWorld")
            }}>Click 이벤트
            </button>

            <button
            className="border-2 m-2 cursor-pointer"
            onClick={() => {
                handleClick()
            }}>
                클릭 2
            </button>
        </div>
    );
}

export default OnClick;