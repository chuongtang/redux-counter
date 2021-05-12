import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
    increment,
    decrement,
    incrementByAmount,
    // decrementByAmount,
    selectCount,
    // validateStore
} from "./counterSlide.js";
import axios from 'axios';

const Counter = () => {
    let count = useSelector(selectCount);
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
    const retCountByName = async (strName) => {
        console.log(strName);
        const findUrl = '/stores/' + strName;
        await axios.get(findUrl, {
            params: {
                storeName: strName
            }
        })
            .then(function (response) {
                console.log(response);
                const strCount = response.data.count
                console.log(strCount);
                if (!strCount) {
                    alert('😢 Store not found.\nStore Name is CaSe sEnSiTive 🔍.\nPlease try again');
                } else {
                    setValue(strCount);
                    alert('Previous count retrived 👍.\nClick the "CHANGE by" button to continue counting');
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    };
    const saveCountToDB = async ()=>{
        await axios.put('/stores', { storeName, count })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        
    }
    return (
        <div className='container App' >
            <h1 className='appName'>{storeName} </h1>

            <div className='nameBox'>
                <input type='text' placeholder='Enter store name' className='inputName' onChange={(e) => handleStoreName(e)} />
                <br></br><button className="flatBtn" onClick={() => retCountByName(storeName)}>
                    Click to retrieve previous count
                </button>
            </div>
            <h2 className="count">Count: {count}</h2>
            <button className="flatBtn" onClick={() => saveCountToDB()}>
                click to save count to database
                </button><br></br>
            <button className='counterBtn' onClick={() => dispatch(increment())}>➕</button>
            <button className='counterBtn' onClick={() => dispatch(decrement())}>➖</button>
            <div className='box-btn' >
                <button className="btn-plus btn" onClick={() => dispatch(incrementByAmount(value))}>
                    🎢CHANGE by ⏩
                </button>
                <input placeholder={value} className='inputBox' onChange={(e) => handleChange(e)} />
                <p>(enter negative number for subtraction)</p>
            </div>
        </div>
    );
};

export default Counter;