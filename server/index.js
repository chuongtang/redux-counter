import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ message: "Hello from my STORE server!" });
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Hello, Store server is listening on ${PORT}`);
  });