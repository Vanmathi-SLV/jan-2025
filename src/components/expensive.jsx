import React, { useState, useMemo, memo } from 'react';

function ExpensiveComponent({ data,childClick }) {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([1,2,3]);
    console.log("expensive component")
    // Expensive computation
    const expensiveComputation = (items) => {
        console.log('Recomputing expensive computation...');
        return items.reduce((total, item) => total + item, 0);
    };

    // Memoizing the result of the expensive computation
    const total = useMemo(() => expensiveComputation(items), [items]);
    // const total = expensiveComputation(items); // normal way

    return (
        <div>
            <h1>Expensive Computation Result: {total}</h1>
            <button onClick={() => setItems([...items, items.length + 1])}>
                Add Item
            </button>
            <button onClick={() => setCount(count + 1)}>
                Increment Count: {count}
            </button>
            <button onClick={childClick}>
                ChildClick
            </button>
        </div>
    );
}

export default memo(ExpensiveComponent);