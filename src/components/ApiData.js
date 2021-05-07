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
        stores.map(store => (
          <div key="apiStore">
            <h4>{store.storeName}</h4>
            <h4>{store.count}</h4>
          </div>
        ))
      }

    </div>
  );
}

export default StoreData;