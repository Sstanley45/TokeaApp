import express from 'express';
const app = express()
import dotenv from 'dotenv' 
dotenv.config() 
import "express-async-errors";
import connectDB from './db/Connect.js';
const port = process.env.PORT || 5000


import EventRouter from './routes/EventRoutes.js'
import AuthRouter from './routes/AuthRoute.js'

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";



app.use(express.json())

app.get('/', (req, res) => {
    throw new Error('error test')
    res.send('Hello World') 
})

app.use('/api/v1', EventRouter) 
app.use('/api/v1/auth', AuthRouter) 
app.use(notFoundMiddleware) 
app.use(errorHandlerMiddleware)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('connected to database');

        app.listen(port, () => {
            console.log(`server is listening on port ${port} ...`);
        })
    } catch (error) {
        console.log(error); 
    }
}

start();
