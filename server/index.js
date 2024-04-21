import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// Import routes
import authRoutes from './routes/auth.js';
import podcastsRoutes from './routes/podcast.js';
import userRoutes from './routes/user.js';

const app = express();

dotenv.config();

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Configure CORS
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

// Set up MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};
connectDB(); // Start MongoDB connection

// Define base URL for API endpoints
const BASE_URL = '/api';

// Routes
app.use(`${BASE_URL}/auth`, authRoutes);
app.use(`${BASE_URL}/podcasts`, podcastsRoutes);
app.use(`${BASE_URL}/user`, userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

// Handle preflight OPTIONS requests
app.options('*', cors());

const port = process.env.PORT || 8700;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
