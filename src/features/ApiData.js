import React, {useState, useEffect} from 'react';

function ApiData() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch("http://localhost:5000/stores")
        .then((res) => res.json())
        .then((data) => setData(data.count))
        console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <div className="ApiData">
                  <p>{!data ? "Loading..." : data}</p>
        
      </div>
    );
  }

  // function PostData (){
  //   useEffect(() => {
  //     // POST request using fetch inside useEffect React hook
  //     const requestOptions = {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ storeName: 'NumberOneStore' })
  //     };
  //     fetch('http://localhost:5000/stores', requestOptions)
  //         .then(response => response.json())
  //         .then(data => setPostId(data.id));

  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  //   }, []);
  // }
  
  export default ApiData;