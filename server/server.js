import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

let storeList = [
  {id: 35245558, storename: 'FreeCovid', count: 50},
  {id: 26134447, storename: 'MoreCovid', count: 70}
];

app.get("/api", (req, res) => {
    res.json({ message: "Hello from my STORE server!" });
  });

app.get('/api/stores', (req, res)=>{
    res.send(storeList);
});

// Find store
app.get('/api/stores/:id', (req, res)=>{
  const store = storeList.find(st => st.id === parseInt(req.params.id));
  if(!store) res.status(404).send('Unable to find the store with given ID');
  res.send(store);
});
//  Create store
app.post('/api/stores', (req, res) =>{
  res.setHeader('Content-Type', 'application/json');
  const store = {
      id: parseInt(`${Math.random().toString().substr(2, 8)}`, 10),
      storename: req.body.storename,
      count: 0
  };
  storeList.push(store);
  res.send(store);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Hello, Store server is listening on ${PORT}`);
  });