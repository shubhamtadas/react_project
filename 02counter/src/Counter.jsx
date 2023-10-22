import {useState} from 'react'

export const Counter = () => {
    let [counter, setCounter] = useState(0)
    function incCounter() {
        setCounter(counter+1);
    }
    function decCounter() {
        if(counter > 0)
        setCounter(counter-1);
    }
    return (
        <>
            <h1>Counter App</h1>
            <button onClick={incCounter}>Add Counter</button>
            <br/><br/>
            <button onClick={decCounter}>Remove Counter</button>

            <h2>Counter Value: {counter}</h2>
        </>
    )
}

export default Counter;