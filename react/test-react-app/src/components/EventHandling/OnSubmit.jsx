import React from 'react';

function OnSubmit(props) {

    function handleSubMit(e) {
        e.preventDefault()
        console.log(e)
    }


    return (<div>
        <form onSubmit={handleSubMit}>
            <input type="text"
                   name="email"
                   className="border-2 my-2"/>
            <input type="password"
                   name="password"
                   className="border-2 my-2"/>
            <input type="submit"
                   value="제출"
                   className="border-2 m-2"
                  />
        </form>
    </div>);
}

export default OnSubmit;