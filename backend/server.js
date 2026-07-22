const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {connectDB} = require('./config.js/database')

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("API IS RUNNING")
})


connectDB();
console.log(process.env.PORT)
// app.listen(process.env.PORT, () => {
//     console.log("server is running in the PORT")
// })