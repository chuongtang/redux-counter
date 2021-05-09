import React, { useState, useEffect } from 'react';

function StoreData() {
  const [stores, setStores] = useState([{
    storeName: '',
    count: ''
  }])

  useEffect(() => {
    const getStore = async () => {
      try {
        const reponse = await fetch("/stores");
        const data = await reponse.json();
        console.log(data);
        setStores(data);
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
            <tr className="datatable" style={{'fontSize':'22px'}}><th>Store</th><th>Count</th></tr>
            {stores.map((store) => {
                return (
                  <tr className="datatable" key={store.name}>
                      <td className="datatable">{store.storeName}</td>
                      <td className="datatable">{store.count}</td>
                      <td className="delTab">🗑️</td>
                  </tr>
                )
            })}                
        </table>
      }

    </div>
  );
}

export default StoreData;