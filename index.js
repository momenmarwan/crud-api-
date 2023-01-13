import express from "express";
import bodyParser from 'body-parser';
import userRouter from "./routes/users.js";

const app = express();
const  PORT = 8080 ;    

app.use(bodyParser.json());
app.use('/users' , userRouter)

app.get('/' , (req , res) => res.send("hello from home page")) ;

app.listen(PORT , () => console.log(`server running on port : http://localhost:${PORT}`));


