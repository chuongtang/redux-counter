import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';


function StoreData() {
  const [stores, setStores] = useState([{
    storeName: '',
    count: ''
  }])
  const history = useHistory();

  useEffect(() => {
    const getStore = async () => {
      try {
        const reponse = await fetch("/stores");
        const predata = await reponse.json();
        const data = predata.reverse();
        console.log(data);
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
  const handleDelete = async (strName) => {
    // e.preventDefault();
    const delUrl = "/stores/"+strName;
    console.log(delUrl);
    await axios.delete(delUrl, { params: { id: strName } })
    .then(response => {
      console.log(response);
      history.push('/loading');
      history.go(-1);
  })}
  return (
    <div className="ApiData">
      <hr></hr>
      <h2>⮋  Data from MongoDB Atlas  ⮋</h2>
      {
        <table style={{ 'fontSize': '18px' }}>
          <thead className="datatable" style={{ 'fontSize': '22px' }}>
            <tr>
            <th>Store</th><th>Count</th>

            </tr>
            
          </thead>
              <tbody className="datatable" >
          {stores.map((store) => {
            return (
              <tr key={store.id}>
                <td className="datatable" >{store.storeName}</td>
                <td className="datatable">{store.count}</td>
                <td className="delTab" onClick={()=>{handleDelete(store._id)}}>🗑️</td>

              </tr>
            )
          })}
              </tbody>
        </table>
      }
    </div>
  );
}

export default StoreData;