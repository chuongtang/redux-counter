import React, { useState, useEffect } from 'react';
import axios from 'axios';

const handleDelete = async(str) => {
  // e.preventDefault();
try {
    await axios.delete("/stores/:storeName", { data: {storeName: str}})
    .then(res => console.log('Delete successful'))
  } catch (error) {
    console.error('There was an error!', error);
  }
}

function StoreData() {
  const [stores, setStores] = useState([{
    storeName: '',
    count: ''
  }])
  useEffect(() => {
    const getStore = async () => {
      try {
        const reponse = await fetch("/stores");
        const predata = await reponse.json();
        const data = predata.reverse();
        // console.log(data);
        setStores(data);
        // const revStore = stores.reverse();
        // return revStore;
      } catch (error) {
        console.log(error.message);
      }
    }
    getStore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="ApiData">
    <hr></hr>
      <h2>⮋  Data from MongoDB Atlas  ⮋</h2>
     {
        <table style={{'fontSize':'18px'}}>
            <thead className="datatable" style={{'fontSize':'22px'}}>
            <th>Store</th><th>Count</th>
            </thead>
            {stores.map((store) => {
                return (
                  <tbody className="datatable" key={store.name}>
                      <td className="datatable" >{store.storeName}</td>
                      <td className="datatable">{store.count}</td>
                      <td className="delTab" onClick={()=>{handleDelete(store.storeName)}}>🗑️</td>
                  </tbody>
                )
            })}                
        </table>
      }
    </div>
  );
}

export default StoreData;