import React, { useState} from 'react'


/**
 * 1. Create component Counter which will have:
 * - button with class {increment}
 * - button with class {decrement}
 * - h1 element which will represent state value
 * - state should hold {counter} value(default value = 0)
 * - with buttons you should be able to in/decrement {counter} value
 *
 * 2. In App component add button with class {newCounter}
 * 3. when you click {newCounter} you should add new counter to view
 * 
 * NOTE: feel free to add some CSS to style your counters.
 */


 const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>{counter}</h1>
            <button className="increment" onClick={() => setCounter(counter + 1)}>Increment</button>
            <button className="decrement" onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    )
}

export default Counter;