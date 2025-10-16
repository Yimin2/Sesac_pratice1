import React from 'react';
import Counter from "./components/Counter.jsx";
import CounterIncrement from "./components/CounterIncrement.jsx";
import CounterIncrementByAmount from "./components/CounterIncrementByAmount.jsx";
import CounterReset from "./components/CounterReset.jsx";

function App(props) {
    return (<div>
        <Counter/>
        <CounterIncrement/>
        <CounterIncrementByAmount/>
        <CounterReset/>
    </div>);
}

export default App;