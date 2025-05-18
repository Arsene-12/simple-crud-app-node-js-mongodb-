const express=require('express');
const  mongoose  = require('mongoose');
const app=express();
const cors = require('cors');
const taskrouter =require('./router/task.router.js');


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({origin: '*'}))
//router
app.use('/api/task',taskrouter);

mongoose
.connect('mongodb://localhost:27017/tasks')

.then(()=>console.log('connected to database successfull'))

.catch((err)=>console.log('an error happened :',err))

app.get('/',(req,res)=>{
  res.send('this is an api')
});

app .listen(5000,()=>{
  console.log('app is running on port 5000');
});