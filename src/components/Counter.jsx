import React, { useReducer } from 'react';

function reducer(state, action) {

    if (action === "INCREMENT") {
        return state + 1;
    }

    if (action === "DECREMENT") {
        return state - 1;
    }

    return state;
}

function Counter() {

    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h2>Counter Application</h2>

            <h3>Count: {state}</h3>

            <button onClick={() => dispatch("INCREMENT")}>
                Increment
            </button>

            <button onClick={() => dispatch("DECREMENT")}>
                Decrement
            </button>
        </div>
    );
}

export default Counter;