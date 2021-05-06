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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Hello, Store server is listening on ${PORT}`);
  });