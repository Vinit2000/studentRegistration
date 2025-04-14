// Import the Express framework to create the server
const express = require('express');
// Import the CORS package to handle Cross-Origin Resource Sharing
const cors = require('cors');
// Load environment variables from a .env file into process.env
require('dotenv').config();
// Import the database connection function
const connectToDatabase = require('./config/db');
// Import student-related routes
const studentRoutes = require('./routes/studentRoutes');
// Initialize the Express app
const app = express();
// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;
// List of allowed origins for CORS (Cross-Origin Resource Sharing)
const allowedOrigins = [
  'http://localhost:5173', // Local development frontend URL
  // 'https://your-frontend-url.com', // Add your deployed frontend URL here
];
// Enable CORS with custom configuration
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    // OR if the origin is in the allowed list
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS')); // Block the request
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow sending cookies and authentication headers
}));
// Enable pre-flight (OPTIONS) request handling for all routes
app.options('*', cors());
// Middleware to parse incoming JSON data in request bodies
app.use(express.json());
// Connect to the MongoDB database
connectToDatabase();
// Use student routes for any route that starts with '/'
app.use('/', studentRoutes);
// Define a basic route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the API'); // Send a welcome message
});
// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Log server status
});