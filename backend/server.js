import express from "express";
import dotenv from 'dotenv'
dotenv.config()
import connectDB from "./config/db.js";
import songs from './routes/songs.js'

const port = process.env.PORT || 5000

connectDB() //connect to mongoDB

const app = express()

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/song', songs)


app.listen(port, () => console.log(`server running on port ${port}`)) 
