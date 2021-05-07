import React, { useState, useEffect } from 'react';

function StoreData() {
  const [stores, setStores] = useState([{
    storeName: '',
    count: ''
  }])

  useEffect(() => {
    fetch("/stores")
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(jsonRes => setStores(jsonRes))
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ApiData">
      <h3>Store info from database</h3>
      {
        stores.map(store =>
        <div>
          <h4>{store.storeName}</h4>
          <h4>{store.count}</h4>
          </div>
        )
      }

    </div>
  );
}

export default StoreData;