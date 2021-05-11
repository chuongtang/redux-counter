import React, {useState} from 'react';
import axios from 'axios';
import StoreData from './ApiData'
import { useHistory } from "react-router-dom";



function CreateStore () {
    const history = useHistory();
    const [input, setInput] = useState({
        storeName: '',
        count: ''
    })
    function handleChange(e){
        const {name, value}= e.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(e) {
        e.preventDefault();
        const newStore ={
            storeName: input.storeName,
            count: input.count  
        }
        console.log(newStore);
        axios.post('/stores', newStore);
        alert('StoreName and Count added to database 🚀. \nGo to "Counter" to retrieve count number and start counting');
        history.go(-1);
        history.go(-1);
    }

    return <div className="App">
        <h1>Create Store data</h1>
        <form>
            <div className="form-group">
                <input onChange={handleChange} name='storeName' value={input.storeName} autoComplete='off' className='inputName' placeholder='Enter Store Name'/>
            </div>
            <div className="form-group">
                <input onChange={handleChange} name='count' value={input.count} autoComplete='off' className='inputName' placeholder='Counter start at'/>
            </div>
            <button type="submit" onClick={handleClick} className="btn btn-primary">Submit</button>
        </form>
        <StoreData />
    </div>
}

export default CreateStore;