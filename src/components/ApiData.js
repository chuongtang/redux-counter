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
      <h3>Store info from database</h3>
      {
        
        <table>
            <tr><th>Store Name</th><th>Previous Count</th></tr>
            {stores.map((store) => {
                return (
                  <tr key={store.name}>
                      <td>{store.storeName}</td>
                      <td>{store.count}</td>
                  </tr>
                )
            })}                
        </table>
      }

    </div>
  );
}

export default StoreData;