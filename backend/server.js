import express from "express";
import dotenv from 'dotenv'
import cors from 'cors';

dotenv.config()
import connectDB from "./config/db.js";
import songs from './routes/songs.js'
import statisticsRoutes from './routes/statistics.js'

// using environment variable
const port = process.env.PORT || 5000

connectDB() //connect to mongoDB

// initialize express in the backend
const app = express()
app.use(express.json());
app.use(cors());

// checking if it is working
app.get('/', (req, res) => {
    res.send('API is running')
})

// declare the endpoints
app.use('/api/songs', songs)
app.use('/api/statistics', statisticsRoutes);

app.listen(port, () => console.log(`server running on port ${port}`)) 
