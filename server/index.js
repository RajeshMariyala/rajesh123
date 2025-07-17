// app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/busesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Bus Schema
const busSchema = new mongoose.Schema({
  name: String,
  from: String,
  to: String,
  type: String,
  ac: Boolean,
  sleeper: Boolean,
});

// Create Bus Model
const Bus = mongoose.model('Bus', busSchema);

// Get all buses
app.get('/api/buses', async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create sample buses data
const sampleBuses = [
  { id:1,name: 'Orange Travels', from: 'Hyderabad', to: 'Chennai', type: 'Non-AC', ac: false, sleeper: true },
  { id: 2, name: 'Green Lines', from: 'Bangalore', to: 'Mumbai', type: 'AC', ac: true, sleeper: false },
  { id: 3, name: 'Blue Transports', from: 'Chennai', to: 'Kolkata', type: 'AC Sleeper', ac: true, sleeper: true },
  { id: 4, name: 'Red Roadways', from: 'Delhi', to: 'Hyderabad', type: 'Non-AC Sleeper', ac: false, sleeper: true },
  { id: 5, name: 'Yellow Coaches', from: 'Mumbai', to: 'Pune', type: 'AC', ac: true, sleeper: false },
  { id: 6, name: 'Purple Bus', from: 'Kolkata', to: 'Delhi', type: 'AC Sleeper', ac: true, sleeper: true },
  { id: 7, name: 'White Transport', from: 'Pune', to: 'Bangalore', type: 'Non-AC Sleeper', ac: false, sleeper: true },
  { id: 8, name: 'Black Lines', from: 'Hyderabad', to: 'Bangalore', type: 'AC', ac: true, sleeper: false },
  { id: 9, name: 'Grey Coaches', from: 'Mumbai', to: 'Delhi', type: 'AC Sleeper', ac: true, sleeper: true },
  { id: 10, name: 'Brown Transports', from: 'Chennai', to: 'Hyderabad', type: 'Non-AC Sleeper', ac: false, sleeper: true },
  { id: 11, name: 'Brown Transports', from: 'Chennai', to: 'mumbai', type: 'Non-AC Non-Sleeper', ac: false, sleeper: false }
  // Add more sample buses here
];

// Initialize sample data in MongoDB
async function initializeData() {
  try {
    await Bus.deleteMany({});
    await Bus.insertMany(sampleBuses);
    console.log('Sample data initialized successfully');
  } catch (error) {
    console.error('Error initializing sample data:', error);
  }
}

// Initialize sample data
initializeData();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
