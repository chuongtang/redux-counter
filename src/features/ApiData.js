import React, {useState, useEffect} from 'react';
function ApiData() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch("http://localhost:5000/stores")
        .then((res) => res.json())
        .then((data) => setData(data.count));
    }, []);
  
    return (
      <div className="ApiData">
                  <p>{!data ? "Loading..." : data}</p>
        
      </div>
    );
  }
  
  export default ApiData;