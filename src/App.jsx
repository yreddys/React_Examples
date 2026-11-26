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

function App() {

    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h1>Count: {state}</h1>

            <button onClick={() => dispatch("INCREMENT")}>
                Increment
            </button>

            <button onClick={() => dispatch("DECREMENT")}>
                Decrement
            </button>
        </div>
    );
}

export default App;