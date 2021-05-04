import React, { useState } from 'react'

import { useDispatch, useSelector } from "react-redux";
import {
    increment,
    decrement,
    incrementByAmount,
    selectCount
} from "./counterSlide.js";

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [value, setValue] = useState();

    const handleChange = (e) => {
        const num = parseInt(e.target.value);
        setValue(num);
    };

    return (
        <>
            <header class="tc pv4 pv5-ns">
                <h1 className="f5 f4-ns fw6 black-70">Redux Door Counter</h1>
            </header>
            <h2 class="f6 black-70 fw2 ttu tracked">Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>➕</button>
            <button onClick={() => dispatch(decrement())}>➖</button>
            <button onClick={() => dispatch(incrementByAmount(value))}>
                Change by Value ⇧
      </button>
            <input onChange={(e) => handleChange(e)} />
        </>
    );
};

export default Counter;