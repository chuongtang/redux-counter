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
    const [storeName, setStoreName] = useState('⮮');

    const handleChange = (e) => {
        const num = parseInt(e.target.value);
        setValue(num);
    };
    const handleStoreName = (e) => {
        // const inputName = e.target.value;
        setStoreName(e.target.value);
        
    };

    return (
        <div className='container App' >
            <h1 className='appName'>{storeName}</h1>
            <div className='nameBox'>
                <input placeholder='Enter store name' className='inputName' onChange={(e) => handleStoreName(e)} />
                <br></br><button className="flatBtn" onClick={() => dispatch(validateStore(value))}>
                    Click to retrieve previous count
                </button>
            </div>
            <h2 className="count">Count: {count}</h2>
                <button className="flatBtn" onClick={() => dispatch(validateStore(value))}>
                    click to save count to database
                </button><br></br>
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
            
        </div>
    );
};

export default Counter;