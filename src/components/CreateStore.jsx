import React, {useState} from 'react';
import axios from 'axios';
import StoreData from './ApiData'



function CreateStore () {
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
        axios.post('/create', newStore)
        // fetch('/stores', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(newStore)
        // }).then(() => {
        //     console.log('new store added');
        // })
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