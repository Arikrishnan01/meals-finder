import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { connectDB } from './Config/db.js';
import bodyParser from 'body-parser';
import mealsRouter from './Route/mealsRoute.js';
import cors from 'cors';

const app = express();

/**CONFIGURE THE DOTEN VARIBLE */
dotenv.config();
const PORT = process.env.PORT;

/** MONGODB CONNECT */
connectDB();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(cors());
/** HOME API END POINT */
app.get('/', (req, res) => {
    res.status(200).json({
        message: "API RUNNING SUCCESSFULLY!!!"
    });
});

/** IMPORT THE SUB ROUTES */
app.use('/meals', mealsRouter);

app.listen(PORT,() => {
    console.log(`SERVER STARTED : ${PORT}`.bold.yellow);
});