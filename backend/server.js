import express from "express";
import dotenv from 'dotenv'
import cors from 'cors';

dotenv.config()
import connectDB from "./config/db.js";
import songs from './routes/songs.js'
import statisticsRoutes from './routes/statistics.js'

const port = process.env.PORT || 5000

connectDB() //connect to mongoDB

const app = express()
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/songs', songs)
app.use('/api/statistics', statisticsRoutes);

app.listen(port, () => console.log(`server running on port ${port}`)) 
