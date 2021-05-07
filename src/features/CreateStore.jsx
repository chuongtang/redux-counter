import React, {useState} from 'react';
import axios from 'axios';


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
        axios.post('http://localhost:5000/stores', newStore)
    }

    return <div className="container">
        <h1>Create Store data</h1>
        <form>
            <div className="form-group">
                <input onChange={handleChange} name='storeName' value={input.storeName} autoComplete='off' className='form-control' placeholder='Enter Store Name'/>
            </div>
            <div className="form-group">
                <input onChange={handleChange} name='count' value={input.count} autoComplete='off' className='form-control' placeholder='Count from Counter'/>
            </div>
            <button type="submit" onClick={()=> handleClick } className="btn btn-primary">Submit</button>
        </form>
    </div>

}
export default CreateStore;