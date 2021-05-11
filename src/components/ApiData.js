import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";


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
  const handleDelete = async (strName) => {
    // e.preventDefault();
    console.log(strName);
    try {
      await fetch('/stores', {
        method: 'DELETE',
        data: {storeName:strName}
      })
      .then(() => {
        history.push('/');
      })
    } catch (error) {
    console.error('Error when trying to delete!', error);
  }
  }
  return (
    <div className="ApiData">
      <hr></hr>
      <h2>⮋  Data from MongoDB Atlas  ⮋</h2>
      {
        <table style={{ 'fontSize': '18px' }}>
          <thead className="datatable" style={{ 'fontSize': '22px' }}>
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