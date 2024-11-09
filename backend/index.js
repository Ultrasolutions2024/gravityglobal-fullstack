const express = require("express")
const cors = require("cors")
require("dotenv").config()
const userRoute = require('./routes/adminRoutes')
const productRoute = require('./routes/productRoutes')
const connectDb = require('./config/db')
res.setHeader('Access-Control-Allow-Origin', '*');  // Or specify your frontend domain
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

const app = express()
const PORT = process.env.PORT || 8000
connectDb();

app.use(cors())
app.use(express.json())

app.use('/auth',userRoute)
app.use('/product',productRoute)

app.get('/',(req,res)=>{
    res.send('Gravity Backend Running')
})

app.listen(PORT ,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})
