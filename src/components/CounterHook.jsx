import useCounter from "../hooks/useCounter";

function CounterHook() {

    const { count, increment } = useCounter();

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={increment}>
                Increment
            </button>
        </div>
    );
}

export default CounterHook;