const express = require ("express");
const app = express();
const mongoose = require ("mongoose");
const morgan = require ('morgan');
const bodyParser = require("body-parser");
require ('dotenv').config();
const cors = require ('cors');
const errorHandler = require("./middleware/error")
const cookieParser = require('cookie-parser');

const authRoutes = require("../backend/routes/authRoutes");



//DATABASE CONNECTION
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>console.log('DB Conneted'))
.catch((err)=> console.log(err));

//MIDDLEWARE
app.use(morgan("dev"));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: true
}))
app.use(cookieParser());
app.use(cors());
  app.use('/api',authRoutes);
//errorMiddleware
app.use(errorHandler);
const port = process.env.PORT || 8000;


//routes

app.get('/', (req,res) =>{
   res.send("Hello from Node.js")

})

app.listen(port,()=>{
 console.log(`Server running on port ${port}`);
});