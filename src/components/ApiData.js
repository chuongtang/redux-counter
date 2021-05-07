import React, { useState, useEffect } from 'react';

function StoreData() {
  const [stores, setStores] = useState([{
    storeName: '',
    count: ''
  }])

  useEffect(() => {
    const getStore = async () => {
      let res = await fetch("/stores")
      let data = await res.json();
      console.log(data);
      setStores(data);
    };
    getStore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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