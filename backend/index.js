import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConnect.js";
import userRouter from "./routes/User.routes.js";

const app = express();

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3001;

app.use(express.json());


app.use('/api/users',userRouter);



app.listen(PORT, () =>{
    console.log(`Server is running on Port ${PORT}`);
})