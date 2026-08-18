const express = require('express');
const path = require('path');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
let feedbackCollection;

async function connectDB() {
  await client.connect();
  const db = client.db("feedbackDB");
  feedbackCollection = db.collection("responses");
  console.log("✅ MongoDB Connected (Compass)");
}
connectDB();

// POST feedback
app.post('/api/feedback', async (req, res) => {
  const feedback = req.body;
  await feedbackCollection.insertOne(feedback);
  res.json({ message: "Feedback submitted successfully!" });
});

// GET all feedback
app.get('/api/feedback', async (req, res) => {
  const data = await feedbackCollection.find().toArray();
  res.json(data);
});

// Serve frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
