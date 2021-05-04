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
            <h1 className='appName'>Redux Door Counter</h1>
            <h2 class="count">Count: {count}</h2>
            <button className='counterBtn' onClick={() => dispatch(increment())}>➕</button>
            <button className='counterBtn' onClick={() => dispatch(decrement())}>➖</button>
            
            <div>
                <button onClick={() => dispatch(incrementByAmount(value))}>
                    Change by Value ⇧
                </button>
                <input onChange={(e) => handleChange(e)} />

            </div>
        </>
    );
};

export default Counter;