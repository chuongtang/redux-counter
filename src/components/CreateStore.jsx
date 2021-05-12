import React, {useState} from 'react';
import axios from 'axios';
import StoreData from './StoreData'
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

     const handleClick = async(e)=>{
        e.preventDefault();
        const newStore ={
            storeName: input.storeName,
            count: input.count  
        }
        console.log(newStore);
        await axios.post('/stores', newStore);
        alert(`${newStore.storeName} with ${newStore.count}Counts has been added to database 🚀. \nGo to "Counter" to retrieve count number and start counting`);
        history.push('/loading');
        setInterval(history.push('/create'), 5000);
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
            <button type="submit" onClick={handleClick} className="btn btn-primary">Send to Database 🚀</button>
        </form>
        <StoreData />
    </div>
}

export default CreateStore;