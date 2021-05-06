import React, {useState, useEffect} from 'react';
function ApiData() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
  
    return (
      <div className="ApiData">
                  <p>{!data ? "Loading..." : data}</p>
        
      </div>
    );
  }
  
  export default ApiData;