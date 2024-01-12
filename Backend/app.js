import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.yryqaxg.mongodb.net/Blog?retryWrites=true&w=majority")
    .then(()=>app.listen(5000)).then(()=>console.log("Connected To Database and listening to localhost:5000!"))
    .catch((err) => console.log(err));

