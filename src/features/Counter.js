import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    selectCount,
    validateStore
} from "./counterSlide.js";

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [value, setValue] = useState(1);
    const [storeName, setStoreName] = useState('NameOfStore');

    const handleChange = (e) => {
        const num = parseInt(e.target.value);
        setValue(num);
    };
    const handleStoreName = (e) => {
        // const inputName = e.target.value;
        setStoreName(e.target.value);
    };

    return (
        <>
            <h1 className='appName'>React Door Counter</h1>
            <h2 className="count">Count: {count}</h2>
            <div className='nameBox'>
                <input placeholder='Enter store name to retrieve previous count' className='inputName' onChange={(e) => handleStoreName(e)} />
                <button className="startBtn" onClick={() => dispatch(validateStore(storeName))}>
                    ⎆
                </button>
            </div>
            <button className='counterBtn' onClick={() => dispatch(increment())}>➕</button>
            <button className='counterBtn' onClick={() => dispatch(decrement())}>➖</button>
            
            <div className='box-btn' >
                <button className="btn-plus btn" onClick={() => dispatch(incrementByAmount(value))}>
                    ⟰ INCREASE by 
                </button>
                <input placeholder='#' className='inputBox' onChange={(e) => handleChange(e)} />
            </div>
            <div className='box-btn'>
                <button className="btn-minus btn" onClick={() => dispatch(decrementByAmount(value))}>
                    ⟱ DECREASE by
                </button>
                <input placeholder='#' className='inputBox' onChange={(e) => handleChange(e)} />
            </div>
            
        </>
    );
};

export default Counter;