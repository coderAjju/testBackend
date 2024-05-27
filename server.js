import express from 'express'
import formRoute from './Router/form.route.js'
const app = express();

app.use('/form',formRoute);

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(4001,()=>{
    console.log("server is running .....")
})