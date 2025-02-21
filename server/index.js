const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const authRoute = require('./Routes/AuthRoute');

mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
 .then(()=>console.log("Mongo Connected"))
 .catch((err)=>console.error(err));


const app = express();
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

app.use(cors({
    origin: ["http://localhost:5174", "http://localhost:4000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(cookieParser()); 
app.use(express.json());
app.use('/',authRoute);
